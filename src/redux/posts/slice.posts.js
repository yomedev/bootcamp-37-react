import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../../constants/fetch-status';
import { postsInitialState } from './initialState.posts';
import { deletePostThunk, getPostsThunk } from './thunk.posts';

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.status = Status.Success;
      })
      .addCase(getPostsThunk.rejected, (state) => {
        state.status = Status.Error;
      })
      .addCase(deletePostThunk.pending, (state) => {
        state.status = Status.Loading
      })
      .addCase(deletePostThunk.fulfilled, (state) => {
        // state.posts.data = state.posts.data.filter(post => post.id !== payload)
        state.status = Status.Success

      })
      .addCase(deletePostThunk.rejected, (state) => {
        state.status = Status.Error
      })
  },
});


export const postsReducer = postsSlice.reducer;
