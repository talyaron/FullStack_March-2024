import express, { Request, Response } from 'express';
import {Post} from '../../model/postsModel';
import { User } from '../../model/userModel';
export async function addPost(req: any, res: any) {
    try {
        const { content } = req.body;
        const userId = req.cookies.userId; // Assuming user is authenticated using cookies

        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).send({ error: 'User not authenticated' });
        }

        const newPost = new Post({
            content,
            user: userId,
            createdAt: new Date(),
        });
        await newPost.save();
        res.status(200).send({ ok: true });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send({ error: 'Failed to create post' });
    }
};
