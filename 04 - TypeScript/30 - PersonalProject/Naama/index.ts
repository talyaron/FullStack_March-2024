// declaring classes
class Post{
    id:string;
    title:string;
    description:string;
    content:string;
    comments:Comment[];
    constructor(title:string, description:string, content:string){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.content = content;
        this.comments = [];
    }
}
class Comment{
    id:string;
    author:string;
    content:string;
    comments:Comment[];
    constructor(author:string, content:string){
        this.id = crypto.randomUUID();
        this.author = author;
        this.content = content;
        this.comments = [];
    }
}
// creating default posts
const post1 = new Post("Hello World", "This is a test post", "This is the content of the post");
const post2 = new Post("lol","this is test","lorem ipsum dolor sit amet");
// creting posts array
const posts:Post[] = [post1, post2];
console.log(posts);
//creting functions
function printPost(post:Post){
    return `
    <h2>${post.title}</h2>
    <p>${post.description}</p>
    <div>${post.content}</div>
    <div></div>
    `;
}
function printPosts():string[] {
    const newposts:string[] = posts.map((post) => printPost(post));
    return newposts;
}

//executing functions
const listPosts = document.getElementById("links");

listPosts.innerHTML = printPosts().join("");
