import express from 'express';
import crypto from 'crypto';

const app = express()
const port = 3000;
app.use(express.json());

class Post {
  id: string;
  image: string = '';
  description: string;
  location: string;
  constructor(image: string, description: string, location: string) {
      this.id = `id-${crypto.randomUUID()}`;
      this.image = image;
      this.description = description;
      this.location = location;
  }
}

const posts: Post[] = [];
app.use(express.static('public'))
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Add a new post
app.post('/posts/add-post', (req, res) => {
  const { image, description, location } = req.body;
  const post = new Post(image, description, location);
  posts.push(post);
  res.status(201).json(post); 
});

// Delete a post by ID
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const postIndex = posts.findIndex((post: Post) => post.id === id);

  if (postIndex !== -1) {
    posts.splice(postIndex, 1); // Remove post from the array
    res.status(200).json({ message: 'Post deleted' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Update a post by ID
app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { image, description, location } = req.body;
  const post = posts.find((post: Post) => post.id === id);

  if (post) {
    post.image = image || post.image; // Update image if provided
    post.description = description || post.description; // Update description if provided
    post.location = location || post.location; // Update location if provided
    res.status(200).json(post); // Return the updated post
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})