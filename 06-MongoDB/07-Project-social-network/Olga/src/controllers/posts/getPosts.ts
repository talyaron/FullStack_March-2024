import { Post } from "../../model/posts/postModel";

export async function getAllPosts(req: any, res: any) {
    try {
        const posts = await Post.find({});
        res.status(200).send({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}