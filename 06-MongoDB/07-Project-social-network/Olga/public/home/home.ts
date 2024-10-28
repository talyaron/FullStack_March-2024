async function getUser() {
  try {
    const response = await fetch("/users/getUser");
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    if (jsonResponse.user) {
      helloUser(jsonResponse.user.name, document.getElementById("userName"));
    } else {
      window.location.href = "./../login/login.html";
    }
  } catch (error) {
    console.error(error);
  }
}

getUser();
getPosts();

function helloUser(userName: string, element: HTMLElement | null) {
  try {
    if (!element) {
      throw new Error("Element not found");
    }
    element.innerHTML = `Hello ${userName}`;
  } catch (error) {
    console.error(error);
  }
}

async function getPosts() {
  try {
    const response = await fetch("/posts/all-posts");
    const jsonResponse = await response.json();
    if (jsonResponse.posts) {
      renderPosts(jsonResponse.posts);
    } else {
      window.location.href = "./../login/login.html";
    }
  } catch (error) {
    console.error(error);
  }
}

function renderPosts(posts: any) {
  const postsContainer = document.querySelector("#posts");
  if (!postsContainer) {
    throw new Error("Element not found");
  }
  postsContainer.innerHTML = "";
  posts.forEach((post: any) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h3>${post.user.name}</h3>
      <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}

async function addPost(e: any) {
  try {
    e.preventDefault();
    const postContentElement = document.querySelector("#postContent") as HTMLInputElement;
    if (!postContentElement) {
      throw new Error("Element not found");
    }
    const content = postContentElement.value;
    const response = await fetch("/posts/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    const jsonResponse = await response.json();
    if (jsonResponse.ok) {
      getPosts();
    } else {
      console.log("Failed to create post");
    }
  } catch (error) {
    console.error(error);
  }
}