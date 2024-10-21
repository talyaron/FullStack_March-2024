

async function getUser() {
    try {
        const response = await fetch('/users/getUser');
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse.user) {
            helloUser(jsonResponse.user.name, document.getElementById('userName'));
        } else {
            window.location.href = './../login/login.html';
        }
       
       
    }
    catch (error) {
        console.error(error);
    }
}

getUser();

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
async function loadPosts() {
    try {
        const response = await fetch('/posts');
        const posts = await response.json();
        renderPosts(posts);
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}
function renderPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) {
        console.error("postsContainer not found");
        return;
    }
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p><strong>${post.user.name}:</strong> ${post.content}</p>
            <small>${new Date(post.createdAt).toLocaleString()}</small>
        `;
        postsContainer.appendChild(postElement);
    });
}

const newPostForm = document.getElementById('newPostForm');
if (newPostForm) {
    newPostForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const postContentElement = document.getElementById('postContent') as HTMLInputElement;
        
        if (!postContentElement) {
            console.error("postContent element not found");
            return;
        }
        
        const content = postContentElement.value;
        
        try {
            const response = await fetch('/posts/add-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content }),
            });

            const result = await response.json();
            if (result.ok) {
                postContentElement.value = ''; // Clear input field
                loadPosts(); // Reload posts after creating a new one
            } else {
                alert('Failed to create post');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    });
} else {
    console.error('newPostForm element not found');
}


getUser();
loadPosts();