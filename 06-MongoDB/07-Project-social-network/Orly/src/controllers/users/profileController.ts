import { Request, Response } from 'express';
import { User } from '../../model/users/userModel';
import { Post } from '../../model/posts/postModel';

export async function updateProfileImage(req: Request, res: Response) {
    try {
        const { userId } = req.cookies;
        const { imageUrl } = req.body;

        if (!userId || !imageUrl) {
            return res.status(400).json({ error: 'Invalid request' });
        }

        // Update the user's profile image with the provided URL
        await User.findByIdAndUpdate(userId, { profileImage: '../images/Profile.jpg' });
        
        res.status(200).json({ ok: true, profileImage: imageUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}
export async function updateProfile(req: Request, res: Response) {
    try {
        const { userId } = req.cookies;
        const { name, bio } = req.body;

        const user = await User.findByIdAndUpdate(
            userId,
            { name, bio },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ ok: true, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

export async function getUserPosts(req: Request, res: Response) {
    try {
        const { userId } = req.cookies;
        
        const posts = await Post.find({ user: userId })
            .sort({ createdAt: -1 });

        res.status(200).json({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}