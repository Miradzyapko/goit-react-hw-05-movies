import axios from "axios";
const MOVIES_API_KEY = '9386514e4340ac496b95fab8e8f53d01';
const URL = 'https://api.themoviedb.org/3/';
 const getTrendingMovies = async () => {
 
  const res = await axios.get(`${URL}trending/movie/day?api_key=${MOVIES_API_KEY}`);
return res.data;
};

export default getTrendingMovies;