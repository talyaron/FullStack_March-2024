class Post {
    id: string;
    description: string;
    image: string;
    place: string;
    constructor(description: string, image: string, place?: string) {
        this.id = `id-${crypto.randomUUID()}`;
        this.description = description;
        this.image = image;
        this.place = place || '';
        // this.postDate = postDate || '';
    }
}

const posts: Post[] = [
    // new Post ('I love my cat', 'https://cataas.com/cat'),
]

// getApiPic('https://dog.ceo/api/breeds/image/random', 'I love my dog');
// getApiPic('https://randomfox.ca/floof/?ref=apilist.fun', 'I love my fox');
// getApiPic('https://some-random-api.com/animal/bird', 'I love my bird');

async function getApiPic(url: string, text: string) {
    const response = await fetch(url)
    const data = await response.json()
    if (url === 'https://dog.ceo/api/breeds/image/random') {
        posts.push (new Post(text, data.message));
    }
    if (url === 'https://randomfox.ca/floof/?ref=apilist.fun' || url === 'https://some-random-api.com/animal/bird') {
        posts.push (new Post(text, data.image));
    }
    renderPosts(users[0]);
}

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
    new User('Olga', '21apr', './images/upic.jpg', "I am Olga. I love coding and animals", posts),
]

function init() {
    renderUserCard(users[0]);
    getPosts();
    renderPosts(users[0]);
}

async function getPosts() {
    const response = await fetch('/getData');
    const data = await response.json();
    data.forEach((post: Post) => {
        users[0].posts.push(post);
    })
    renderPosts(users[0]);
    console.log(users[0].posts);
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
                    <p>${post.place.length > 0 ? post.place : ''}</p>
                </div>
            </div>
            <div class="image">
                <img src="${post.image}" alt="${post.description}" />
            </div>
            <div class="content">
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
            <form>
                <label for="description">Description</label>
                <input type="text" id="description" name="description" /> <br />
                <label for="image">Image</label>
                <input type="text" id="image" name="image" /> <br />
                <label for="place">Place</label>
                <input type="text" id="place" name="place" /> <br />
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