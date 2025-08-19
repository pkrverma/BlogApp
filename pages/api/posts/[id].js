/* eslint-disable @typescript-eslint/no-unused-vars */
import { postService } from "@/services/postService";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const post = await postService.getPost(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: "Post not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
