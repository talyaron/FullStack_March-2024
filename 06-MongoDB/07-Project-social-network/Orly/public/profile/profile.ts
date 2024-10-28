
interface UserProfile {
    _id: string;
    name: string;
    email: string;
    profileImage?: string;
    bio?: string;
}

interface UserPost {
    _id: string;
    image: string;
    caption: string;
    likes: string[];
    comments: any[];
    createdAt: string;
}

let currentUser: UserProfile;

async function initializeProfile() {
    try {
        // Get user data
        const response = await fetch('/users/getUser');
        const { user } = await response.json();
        
        if (!user) {
            window.location.href = './../login/login.html';
            return;
        }

        currentUser = user;
        displayUserInfo(user);
        await getUserPosts();
        setupImageUpload();
    } catch (error) {
        console.error(error);
    }
}

function displayUserInfo(user: UserProfile) {
    // Set profile image
    const profileImage = document.getElementById('profileImage') as HTMLImageElement;
    profileImage.src = user.profileImage || '/images/default-avatar.png';

    // Set name
    document.getElementById('profileName')!.textContent = user.name;
    document.getElementById('userName')!.textContent = user.name;

    // Set bio
    const bioElement = document.getElementById('profileBio')!;
    bioElement.textContent = user.bio || 'No bio yet';
}

async function getUserPosts() {
    try {
        const response = await fetch('/posts/getUserPosts');
        const { posts } = await response.json();
        
        // Update posts count
        document.getElementById('postsCount')!.textContent = posts.length.toString();
        
        // Display posts
        const postsGrid = document.getElementById('userPosts')!;
        postsGrid.innerHTML = posts.map((post: UserPost) => `
            <div class="post-thumbnail">
                <img src="${post.image}" alt="Post" loading="lazy">
            </div>
        `).join('');
    } catch (error) {
        console.error(error);
    }
}
function setupImageUpload() {
    const imageInput = document.getElementById('imageInput') as HTMLInputElement;
    imageInput.addEventListener('change', async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('profileImage', file);

        try {
            const response = await fetch('/users/updateProfileImage', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.ok) {
                const profileImage = document.getElementById('profileImage') as HTMLImageElement;
                profileImage.src = data.profileImage;
            }
        } catch (error) {
            console.error(error);
            alert('Failed to update profile image');
        }
    });
}


function toggleEditProfile() {
    const modal = document.getElementById('editProfileModal')!;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const bioInput = document.getElementById('bio') as HTMLTextAreaElement;

    if (modal.style.display === 'none' || !modal.style.display) {
        // Show modal and populate with current values
        nameInput.value = currentUser.name;
        bioInput.value = currentUser.bio || '';
        modal.style.display = 'block';
    } else {
        // Hide modal
        modal.style.display = 'none';
    }
}

async function handleEditProfile(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/users/updateProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const jsonResponse = await response.json();
        if (jsonResponse.ok) {
            currentUser = { ...currentUser, ...data };
            displayUserInfo(currentUser);
            toggleEditProfile();
        }
    } catch (error) {
        console.error(error);
        alert('Failed to update profile');
    }
}


// Initialize profile page
initializeProfile();