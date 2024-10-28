import { Post } from "../../model/posts/postModel";
import { User } from "../../model/users/userModel";

export async function addPost(req: any, res: any) {
    try {
        const { content } = req.body;
        console.log(content);
        const userId = req.cookies.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).send({ error: 'User not found' });
        }
        const newPost = new Post({ content, user: user._id });
        console.log(newPost);
        await newPost.save();
        res.status(200).send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create post' });
    }
}