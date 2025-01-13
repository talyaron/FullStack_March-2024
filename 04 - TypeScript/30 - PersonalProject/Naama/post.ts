const id=window.location.search.split('=')[1]!;

function commentfinder(){
    const comments= JSON.parse(localStorage.getItem('comments')!);
    return comments.filter((comment:any)=>comment.postId===id);
}
const comments = commentfinder();
function displaypost():string{
    const posts= JSON.parse(localStorage.getItem('posts')!);
    const post= posts.find((post:any)=>post.id===id);
    return `
    <div>
    <h1>${post.title}</h1>
    <h2>${post.description}</h2>
    <p>${post.content}</p>
    <button onclick="editPost('${post.id}')">Edit</button>
    <button onclick="deletePost('${post.id}')">Delete</button>
    </div>
    <div>
    <h2>Comments</h2>
    <button onclick="addCommnet('${post.id}')">add comment</button>
    <div id="commentform"></div>
    <div id="comments">${comments.map((comment:any)=>`<p>${comment.author}</p><p>${comment.content}</p>`).join('')}</div>
    </div>
    `
}

function addCommnet(id:string){
    console.log(id);
    const commentform = document.getElementById("commentform");
    
    const form = document.createElement("form");
    form.innerHTML = `
    <input type="text" id="author" placeholder="Author" required>
    <input type="text" id="content" placeholder="Content" required>
    <button type="submit" onclick="submitComment(event,'${id}')">Submit</button>
    `;
    commentform?.appendChild(form);
}
function submitComment(e,postId:string){
    e.preventDefault();
    const author = document.getElementById("author")?.value;
    const content = document.getElementById("content")?.value;
    const comment = {author, content, postId};
    const comments = JSON.parse(localStorage.getItem('comments')!);
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    document.getElementById("commentform")?.innerHTML = "";
    document.getElementById("comments")?.innerHTML = `${comments.map((comment:any)=>`<p>${comment.author}</p><p>${comment.content}</p>`).join('')}`;
}

const fullPost = document.getElementById("fullPost");

fullPost.innerHTML = displaypost();