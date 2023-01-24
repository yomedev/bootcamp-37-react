import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts', 'Token'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://70.34.201.18:8080' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (params) => ({
        url: 'posts',
        params: { ...params, limit: 6 },
      }),

      providesTags: (result) => {
        console.log(result);
        return result
          ? [...result.data.map(({ id }) => ({ type: 'Post', id })), 'Posts']
          : ['Post'];
      },
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg }],
    }),
    
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery, useDeletePostMutation } = postsApi;
