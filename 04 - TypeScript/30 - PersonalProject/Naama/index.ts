// declaring classes
JSON.parse(localStorage.getItem('posts')!) || localStorage.setItem('posts', JSON.stringify([]));
JSON.parse(localStorage.getItem('comments')!) ||localStorage.setItem('comments', JSON.stringify([]));
class Post{
    id:string;
    title:string;
    description:string;
    content:string;
    constructor(title:string, description:string, content:string){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.content = content;
        return this;
    }
    saveToLocalStorage(){
        const check = this.checkposts();
        if(!check.ifExist){
            check.posts.push(this);
            localStorage.setItem('posts', JSON.stringify(check.posts));
        }
    }
    checkposts(){
        const posts = JSON.parse(localStorage.getItem(`posts`)!);
        return {posts:posts ,ifExist:posts.find((post) => post.title === this.title)};
    }
}
class Comment{
    id:string;
    postId:string;
    author:string;
    content:string;
    constructor(author:string, postId:string ,content:string){
        this.id = crypto.randomUUID();
        this.postId = postId;
        this.author = author;
        this.content = content;
    }
    saveToLocalStorage(){
        const comments = JSON.parse(localStorage.getItem(`cpmments`)!);
        comments.push(this);
        localStorage.setItem('comments', JSON.stringify(comments))
    }
}
// creating default posts
const post1 = (new Post("Hello World", "This is a test post", "This is the content of the post")).saveToLocalStorage();
const post2 = (new Post("lol","this is test","lorem ipsum dolor sit amet")).saveToLocalStorage();
//creting functions
function printPost(post:Post){
    return `
    <div>
    <a href="post.html?id=${post.id}">
    <h2>${post.title}</h2>
    <p>${post.description}</p>
    </a></div>`;
}
function printPosts():string[] {
    const posts = JSON.parse(localStorage.getItem('posts')!);
    const newposts:string[] = posts.map((post) => printPost(post));
    return newposts;
}

//executing functions
const listPosts = document.getElementById("links")!;

listPosts.innerHTML = printPosts().join("");
