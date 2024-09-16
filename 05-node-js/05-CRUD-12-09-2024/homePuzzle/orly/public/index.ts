const postForm = document.getElementById('postForm') as HTMLFormElement;
const postsList = document.getElementById('postsList') as HTMLUListElement;

interface Post {
  id: number;
  content: string;
  author: string;
  timestamp: string;
}

// Fetch all posts from the server
async function fetchPosts() {
  const response = await fetch('/posts');
  const posts: Post[] = await response.json();
  renderPosts(posts);
}

// Add a new post
postForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const author = (document.getElementById('author') as HTMLInputElement).value;
  const content = (document.getElementById('content') as HTMLTextAreaElement).value;

  if (!author || !content) {
    alert("Please provide both author and content.");
    return;
  }

  await fetch('/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content, author }),  // Send actual content and author from form
  });

  postForm.reset();
  fetchPosts();  // Refresh the post list after adding a new post
});

// Delete a post
async function deletePost(id: number) {
  await fetch(`/posts/${id}`, {
    method: 'DELETE'
  });
  fetchPosts();  // Refresh the post list after deleting a post
}

// Render the posts in the HTML
function renderPosts(posts: Post[]) {
  postsList.innerHTML = posts.map(post => `
    <li>
      <strong>${post.author}</strong>: ${post.content} <em>${new Date(post.timestamp).toLocaleString()}</em>
      <button onclick="deletePost(${post.id})">Delete</button>
    </li>
  `).join('');
}

// Initial load of posts
fetchPosts();
