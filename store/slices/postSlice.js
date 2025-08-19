import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  currentPost: null,
  isLoading: false,
  error: null,
  pagination: {
    limit: 10,
    skip: 0,
    total: 0,
  },
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPostsSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.posts;
      state.pagination = {
        limit: action.payload.limit,
        skip: action.payload.skip,
        total: action.payload.total,
      };
    },
    fetchPostsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchPostStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchPostSuccess: (state, action) => {
      state.isLoading = false;
      state.currentPost = action.payload;
    },
    fetchPostFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    createPostStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createPostSuccess: (state, action) => {
      state.isLoading = false;
      state.posts.unshift(action.payload);
    },
    createPostFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPostStart,
  fetchPostSuccess,
  fetchPostFailure,
  createPostStart,
  createPostSuccess,
  createPostFailure,
} = postSlice.actions;

export default postSlice.reducer;
