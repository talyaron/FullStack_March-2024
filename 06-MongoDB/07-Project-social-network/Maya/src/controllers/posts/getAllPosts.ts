import { Request, Response } from 'express';
import { Post } from '../../model/postsModel';

export async function getAllPosts(req: Request, res: Response) {
    try {
        const posts = await Post.find().populate("user", "name");
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send({ error: "Failed to fetch posts" });
    }
}
