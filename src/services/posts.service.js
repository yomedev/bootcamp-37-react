import axios from 'axios';

// axios.defaults.baseURL = 'http://70.34.201.18:8080';

const postsApi = axios.create({
  baseURL: 'http://70.34.201.18:8080',
});

export const getPostsService = async (params) => {
  const { data } = await postsApi.get('/posts', {
    params: { ...params, limit: 6,  },
  });
  return data;
};

// params = {
//   page: 1,
//   limit: 10,
//   search: 'javascript'
// }

// axios.defaults.baseURL = 'http://anotherUrl'

// export const getPostsContacts = async () => {
//   const { data } = await axios.get('/contacts');
//   return data
// };
