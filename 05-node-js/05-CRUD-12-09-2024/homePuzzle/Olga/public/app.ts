class Post {
    id: string;
    description: string;
    image: string;
    place: string;
    postDate: Date | string;
    constructor(id: string, description: string, image: string, place?: string, postDate?: Date | string) {
        this.id = id;
        this.description = description;
        this.image = image;
        this.place = place || '';
        this.postDate = postDate || new Date();
    }

    getDateAgo() {
        if (typeof this.postDate === 'string') {
            this.postDate = new Date(this.postDate);
        }
        const now = new Date();
        const diff = now.getTime() - this.postDate.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        if (seconds < 60) {
            return `${seconds} seconds ago`;
        } else if (minutes < 60) {
            return `${minutes} minutes ago`;
        } else if (hours < 24) {
            return `${hours} hours ago`;
        } else {
            return `${days} days ago`;
        }
    }
}

const posts: Post[] = []

class User {
    id: string;
    nickname: string;
    name: string;
    imageUrl: string;
    description: string;
    posts: Post[];
    followers: User[] = [];
    following: User[] = [];
    constructor(name: string, nickname: string, imageUrl: string, description?: string, posts?: Post[]) {
        this.id = `id-${crypto.randomUUID()}`;
        this.name = name;
        this.nickname = nickname;
        this.imageUrl = imageUrl;
        this.description = description || '';
        this.posts = posts || [];
    }
}

const users: User[] = [
    new User('Olga', '21apr', './images/upic.jpg', "I am Olga. I love coding and animals"),
]

async function init() {
    renderUserCard(users[0]);
    await getPosts();
    renderPosts(users[0]);
}

async function getPosts() {
    const response = await fetch('/getData');
    const data = await response.json();
    users[0].posts = [];
    data.forEach((post: Post) => {
        users[0].posts.push(new Post(post.id, post.description, post.image, post.place, post.postDate));
    })
}

function renderUserCard(user: User) {
    try {
        const html = `
            <h1>${user.nickname}</h1>
            <div class="user-info">
                <div class="user-image">
                    <img src="${user.imageUrl}" alt="${user.name}" />
                </div>
                <div class="user-description">
                    <h2>${user.name}</h2>
                    <p>${user.description}</p>
                </div>
            </div>
            <button class="add-post-btn" onclick="renderAddPost()">New Post</button>`;
        const element = document.querySelector('#user-card');
        if (!element) {
            throw new Error('There is no user card container');
        }
        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function renderPost(post: Post, user: User) {
    try {
        const html = `
        <div class="post">
            <div class="header-post">
                <div class="user-image-post">
                    <img src="${user.imageUrl}" alt="${user.name}" />
                </div>
                <div class="post-details">
                    <a href="#">${user.name}</a>
                    <p class="grey">${post.place.length > 0 ? post.place : '&nbsp;'}</p>
                </div>
                <div class="buttons-post">
                    <button class="edit-btn" onclick="editPost('${post.id}')" disabled><i class='bx bx-edit-alt'></i></button>
                    <button class="delete-btn" onclick="deletePost('${post.id}')"><i class='bx bx-trash'></i></button>
                </div>
            </div>
            <div class="image">
                <img src="${post.image}" alt="${post.description}" />
            </div>
            <div>
                <button class="like-btn" disabled><i class='bx bx-heart'></i></button>
                <button class="comment-btn" disabled><i class='bx bx-chat'></i></button>
            </div>
            <div class="content">
                <p class="grey">${post.getDateAgo()}</p>
                <p>${post.description}</p>
            </div>
        </div>`;
        return html;
    } catch (error) {
        console.error(error);
    }

}

function renderPosts(user: User) {
    try {
        const element = document.querySelector('#posts-list');
        if (!element) {
            throw new Error('There is no posts container');
        }
        element.innerHTML = user.posts.map(post => renderPost(post, user)).join('');
    } catch (error) {
        console.error(error);
    }
}

function renderAddPost() {
    try {
        const html = `
        <div class="add-post">
            <h2>Add new post</h2>
            <form onsubmit="addPost(event)">
                <label for="image">URL Image*</label>
                <input type="text" id="image" name="image" /> <br />
                <label for="place">Place</label>
                <input type="text" id="place" name="place" /> <br />
                <label for="description">Description</label>
                <input type="textarea" id="description" name="description" /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>`;
        const element = document.querySelector('#posts-list');
        if (!element) {
            throw new Error('There is no user card container');
        }
        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

async function addPost(event: Event) {
    try {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const image = form.image.value;
        const place = form.place.value;
        const description = form.description.value;
        form.reset();
        await addPostToDB(image, place, description);
        await getPosts();
        renderPosts(users[0]);
    } catch (error) {
        console.error(error);
    }
}

function editPost(id: string) {
    renderAddPost();
}

async function addPostToDB(image: string, place: string, description: string) {
    const response = await fetch('/addPost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, place, description })
    });
    const data = await response.json();
    console.log(data);
}


function deletePost(id: string) {
    deletePostFromDB(id);

}

async function deletePostFromDB(id: string) {
    const response = await fetch('/deletePost', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    });
    const data = await response.json();
    console.log(data);
    await getPosts();
    renderPosts(users[0]);
}