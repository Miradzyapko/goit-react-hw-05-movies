import axios from "axios";
const MOVIES_API_KEY = '9386514e4340ac496b95fab8e8f53d01';
const URL = 'https://api.themoviedb.org/3/';
export const getTrendingMovies = () => {
 
  return axios.get(`${URL}movie/550?api_key=${MOVIES_API_KEY}`);

};

