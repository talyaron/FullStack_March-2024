import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

let posts: Post[] = [];  // Store posts in-memory

// Post class definition
class Post {
  id: number;
  content: string;
  author: string;
  timestamp: Date;

  constructor(id: number, content: string, author: string) {
    this.id = id;
    this.content = content;
    this.author = author;
    this.timestamp = new Date();
  }
}

// Get all posts (Retrieve all posts from the server)
app.get('/posts', (req: Request, res: Response) => {
  res.json(posts);  // Return all posts in JSON format
});

// Add a new post (Create a new post)
app.post('/posts', (req: Request, res: Response) => {
  const { content, author } = req.body;
  if (!content || !author) {
    return res.status(400).json({ message: 'Content and author are required.' });
  }
  
  const newPost = new Post(posts.length + 1, content, author);
  posts.push(newPost);  // Push the new post into the posts array
  res.status(201).json(newPost);  // Return the newly created post with status 201
});

// Delete a post by id (Remove a post from the server)
app.delete('/posts/:id', (req: Request, res: Response) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter(post => post.id !== postId);  // Filter out the post to be deleted
  res.status(200).json({ message: 'Post deleted' });
});

// Edit a post by id (Update an existing post)
app.put('/posts/:id', (req: Request, res: Response) => {
  const postId = parseInt(req.params.id);
  const { content } = req.body;
  
  const post = posts.find(post => post.id === postId);  // Find the post to edit

  if (post) {
    post.content = content;
    post.timestamp = new Date();  // Update the timestamp to current time
    res.status(200).json(post);  // Return the updated post
  } else {
    res.status(404).json({ message: 'Post not found' });  // If post doesn't exist, return 404
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
