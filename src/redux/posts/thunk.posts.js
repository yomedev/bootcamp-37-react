import { createAsyncThunk } from '@reduxjs/toolkit';
import { deletePostService, getPostsService } from '../../services/posts.service';

export const getPostsThunk = createAsyncThunk('posts/getPosts', (params) => {
  return getPostsService(params);
});

export const deletePostThunk = createAsyncThunk('posts/deletePost', async ({postId, params}, {rejectWithValue, dispatch}) => {
  try {
    await deletePostService(postId);
    dispatch(getPostsThunk(params))
  } catch (error) {
    if (error.code === '401') {
      return rejectWithValue({message: "This post doesn't exist"})
    }
  }
});
