import { authService } from "@/services/authService";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { username, password } = req.body;
    const response = await authService.login({ username, password });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
