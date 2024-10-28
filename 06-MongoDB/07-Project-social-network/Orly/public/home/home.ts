
interface Post {
    _id: string;
    image: string;
    caption: string;
    user: {
        _id: string;
        name: string;
    };
    likes: string[];
    comments: Comment[];
    createdAt: string;
}

interface Comment {
    _id: string;
    text: string;
    user: {
        _id: string;
        name: string;
    };
    createdAt: string;
}

async function getUser() {
    try {
        const response = await fetch('/users/getUser');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.user) {
            helloUser(jsonResponse.user.name, document.getElementById('userName'));

            await getPosts();
        } else {
            window.location.href = './../login/login.html';
        }
       
       
    }
    catch (error) {
        console.error(error);
    }
}

async function getPosts() {
    try {
        const response = await fetch('/posts/getAllPosts');
        const {posts} = await response.json();
        displayPosts(posts);
    } catch(error) {
        console.error(error);
    }
}



function displayPosts(posts: Post[]) {
    const feedElement = document.getElementById('postsFeed');
    if (!feedElement) return;

    feedElement.innerHTML = posts.map(post => `
        <article class="post" data-post-id="${post._id}">
            <div class="post-header">
                <img src="${post.user.profileImage || '/images/default-avatar.png'}" alt="Profile" class="profile-pic">
                <span class="username">${post.user.name}</span>
            </div>
            <img src="${post.image}" alt="Post" class="post-image">
            <div class="post-actions">
                <button onclick="handleLike('${post._id}')" class="like-btn ${post.likes.includes(getCurrentUserId()) ? 'liked' : ''}">
                    ❤️ ${post.likes.length}
                </button>
            </div>
            <p class="caption"><strong>${post.user.name}</strong> ${post.caption}</p>
            <div class="comments">
                ${post.comments.map(comment => `
                    <p><strong>${comment.user.name}</strong> ${comment.text}</p>
                `).join('')}
            </div>
            <form onsubmit="handleComment(event, '${post._id}')" class="comment-form">
                <input type="text" placeholder="Add a comment..." name="comment" required>
                <button type="submit">Post</button>
            </form>
        </article>
    `).join('');
}

  async function handleCreatePost(e: Event) {
    try {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const response = await fetch('/posts/create', {
            method: 'POST',
            body: formData, // Send as FormData to handle file upload
        });

        const jsonResponse = await response.json();
        if (jsonResponse.ok) {
            form.reset();
            await getPosts(); // Refresh posts after creating new one
        } else {
            alert(jsonResponse.error);
        }
    } catch (error) {
        console.error(error);
    }
}



async function handleLike(postId: string) {
    try {
        const response = await fetch(`/posts/${postId}/like`, {
            method: 'POST',
        });
        const jsonResponse = await response.json();
        if (jsonResponse.ok) {
            await getPosts(); // Refresh posts to show updated likes
        }
    } catch (error) {
        console.error(error);
    }
}

async function handleComment(e: Event, postId: string) {
    try {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const response = await fetch(`/posts/${postId}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: formData.get('comment'),
            }),
        });

        const jsonResponse = await response.json();
        if (jsonResponse.ok) {
            form.reset();
            await getPosts(); // Refresh posts to show new comment
        }
    } catch (error) {
        console.error(error);
    }
}

async function handleLogout() {
    try {
        const response = await fetch('/users/logout', {
            method: 'POST',
        });
        const jsonResponse = await response.json();
        if (jsonResponse.ok) {
            window.location.href = './../login/login.html';
        }
    } catch (error) {
        console.error(error);
    }
}

function helloUser(userName:string, element:HTMLElement|null){
    try {
        if(!element){
            throw new Error('Element not found');
        }
        element.innerHTML = `Hello ${userName}`;
    } catch (error) {
        console.error(error);
        
    }
    
}
    
function getCurrentUserId(): string {
    // You might want to store this in localStorage or get it from a global state
    return localStorage.getItem('userId') || '';
}

// Initialize
getUser();