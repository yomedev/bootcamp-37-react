import axios from "axios";

const moviesApi = axios.create({
  baseURL: 'url',
  params: {
    key: 'key'
  }
})

export const getTrendingMovies = async () => {
  const {data} = moviesApi.get('/trending/get-trending', {
    params: {
      
    }
  })
  return data
}