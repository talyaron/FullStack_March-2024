import { Request, Response } from 'express';
import { Post } from '../../model/posts/postModel';

// Create a new post
export async function createPost(req: Request, res: Response) {
    try {
        const { userId } = req.cookies;
        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const { caption, image } = req.body;

        const post = new Post({
            user: userId,
            image, 
            caption
        });

        await post.save();
        res.status(200).json({ ok: true, post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

// Get all posts
export async function getAllPosts(req: Request, res: Response) {
    try {
        const posts = await Post.find()
            .populate('user', 'name profileImage')
            .populate('comments.user', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

// Like or unlike a post
export async function likePost(req: Request, res: Response) {
    try {
        const { userId } = req.cookies;
        const { postId } = req.params;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        const likeIndex = post.likes.indexOf(userId);
        if (likeIndex > -1) {
            post.likes.splice(likeIndex, 1); // Unlike
        } else {
            post.likes.push(userId); // Like
        }

        await post.save();
        res.status(200).json({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

// Add a comment to a post
export async function addComment(req: Request, res: Response) {
    try {
        const { userId } = req.cookies;
        const { postId } = req.params;
        const { text } = req.body;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        post.comments.push({
            user: userId,
            text
        });

        await post.save();
        res.status(200).json({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}
