import { Post } from "../../models/Post";
import { Request, Response } from 'express';

export async function getPosts(req: any, res: any) {
    try {
        console.log("now im here");
        const posts = await Post.find().populate('userId', 'image').sort({ createdAt: -1 });

        
        res.status(200).json({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}
