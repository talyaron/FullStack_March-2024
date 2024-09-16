class Post {
    id: string;
    image: string;
    description: string;
    location: string;
    constructor(image: string, description: string, location: string) {
        this.image = image;
        this.description = description;
        this.location = location;
    }
}
const posts: Post[] = [];

async function renderPosts() {
    try {
        const response = await fetch('/posts'); 
        if (!response.ok) throw new Error('Failed to fetch posts');
        const posts = await response.json();

        const postsContainer = document.getElementById('postsContainer');
        if (!postsContainer) {
            console.error('Posts container not found');
            return;
        }
        postsContainer.innerHTML = ''; 

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <img src="${post.image}" alt="Post Image" width="100">
                <p>${post.description}</p>
                <p>${post.location}</p>
                <button onclick="deletePost('${post.id}')">Delete</button>
            `;
            postsContainer!.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

async function addPost() {
    try {
        const image = (document.getElementById('image') as HTMLInputElement).value;
        const description = (document.getElementById('description') as HTMLInputElement).value;
        const location = (document.getElementById('location') as HTMLInputElement).value;

        const newPost = { image, description, location };

        const response = await fetch('/posts/add-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });

        if (response.ok) {
            console.log('New post added:', newPost);
            await renderPosts(); 
        } else {
            console.error('Failed to add post:', response.statusText);
        }
    } catch (error) {
        console.error('Error adding post:', error);
    }
}

document.getElementById('addPostButton')?.addEventListener('click', async (event) => {
    event.preventDefault(); 
    await addPost(); 
});


async function deletePost(id: string) {
    try {
        const response = await fetch(`/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            await renderPosts(); // Refresh posts after deleting
        } else {
            console.error('Failed to delete post:', response.statusText);
        }
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}


// Initial fetch of posts when the page loads
renderPosts();

