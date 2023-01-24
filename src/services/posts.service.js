import { privateApi, publicApi } from "./tokenApi";

export const getPostsService = async (params) => {
  const { data } = await publicApi.get('/posts', { params: { ...params, limit: 6 } });
  return data;
};

export const createNewPostService = async (body) => {
  const { data } = await privateApi.post('/posts', body);
  return data;
};

export const getSinglePostService = async (id, params) => {
  const { data } = await publicApi.get(`/posts/${id}`, { params });
  return data;
};

export const deletePostService = (id) => {
  return privateApi.delete(`/posts/${id}`);
};
