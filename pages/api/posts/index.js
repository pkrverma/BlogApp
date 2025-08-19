import { postService } from "@/services/postService";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { limit = 10, skip = 0 } = req.query;
      const posts = await postService.getPosts({ limit, skip });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const post = await postService.createPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
