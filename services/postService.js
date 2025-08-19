import { api } from "../utils/api";

export const postService = {
  getPosts: async (params = {}) => {
    const { limit = 10, skip = 0 } = params;
    const response = await api.get(`/posts?limit=${limit}&skip=${skip}`);
    return response.data;
  },

  getPost: async (id) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  createPost: async (postData) => {
    const response = await api.post("/posts/add", postData);
    return response.data;
  },

  updatePost: async (id, postData) => {
    const response = await api.put(`/posts/${id}`, postData);
    return response.data;
  },

  deletePost: async (id) => {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  },
};
