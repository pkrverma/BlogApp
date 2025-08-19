import { api } from "../utils/api";

export const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", {
      username: credentials.username,
      password: credentials.password,
    });
    return response.data;
  },

  signup: async (userData) => {
    const response = await api.post("/auth/signup", userData);
    return response.data;
  },

  me: async (token) => {
    const response = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
