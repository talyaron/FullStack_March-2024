import { Comment } from '../models/Comment';    
import { Post } from '../models/Post';
import { Like } from '../models/Like';


export const createPost = async (req:any, res:any) => {
  try {
    const post = new Post({
      userId: req.user.id,
      content: req.body.content,
      image: req.file ? req.file.path : null
    });
    await post.save();
    res.status(201).json(post);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getPosts = async (req:any, res:any) => {
  try {
    const posts = await Post.find().populate('userId').exec();
    res.json(posts);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const likePost = async (req:any, res:any) => {
  try {
    const like = new Like({
      postId: req.params.postId,
      userId: req.user.id
    });
    await like.save();
    res.status(201).json(like);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const commentOnPost = async (req:any, res:any) => {
  try {
    const comment = new Comment({
      postId: req.params.postId,
      userId: req.user.id,
      content: req.body.content
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};