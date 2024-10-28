document.addEventListener("DOMContentLoaded", () => {
    const logOutButton = document.getElementById("log-out");
    const createPostButton = document.getElementById("create-post");
    const getPostsButton = document.getElementById("get-posts");
    const postList = document.getElementById("post-list");
  
    logOutButton.addEventListener("click", () => {
      document.cookie = "auth=; Max-Age=0; path=/";
      window.location.href = "login.html";
    });
  
    createPostButton.addEventListener("click", async () => {
      const content = (document.getElementById("post-content") as HTMLInputElement).value;
      const image = (document.getElementById("post-image") as HTMLInputElement).files[0];
  
      const formData = new FormData();
      formData.append("content", content);
      if (image) {
        formData.append("image", image);
      }
  
      const token = getCookie("auth");
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
  
      if (response.ok) {
        fetchPosts();
      } else {
        alert("Error creating post");
      }
    });
  
    getPostsButton.addEventListener("click", fetchPosts);
  
    async function fetchPosts() {
      const token = getCookie("auth");
      const response = await fetch("/api/posts", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.ok) {
        const posts = await response.json();
        displayPosts(posts);
      } else {
        alert("Error fetching posts");
      }
    }
  
    function displayPosts(posts) {
      postList.innerHTML = "";
      posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
          <h3>${post.userId.username}</h3>
          <p>${post.content}</p>
          ${post.image ? `<img src="${post.image}" alt="Post Image">` : ""}
          <div class="actions">
            <button onclick="likePost('${post._id}')">Like</button>
            <button onclick="commentOnPost('${post._id}')">Comment</button>
          </div>
          <div class="comments">
            ${post.comments.map(comment => `<p>${comment.userId.username}: ${comment.content}</p>`).join("")}
          </div>
        `;
        postList.appendChild(postElement);
      });
    }
  
    (window as any).likePost = async (postId) => {
      const token = getCookie("auth");
      await fetch(`/api/posts/${postId}/like`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchPosts();
    };
  
    (window as any).commentOnPost = async (postId) => {
      const comment = prompt("Enter your comment:");
      if (!comment) return;
  
      const token = getCookie("auth");
      await fetch(`/api/posts/${postId}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ content: comment })
      });
      fetchPosts();
    };
  
    function getCookie(name) {
      return document.cookie.split("; ").reduce((r, v) => {
        const parts = v.split("=");
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
      }, "");
    }
  });