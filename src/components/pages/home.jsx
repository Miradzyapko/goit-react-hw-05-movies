
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Title, List, Item } from "./home.styled";
import { getTrendingMovies } from '../servisesAPI/API';

import { Container } from "./home.styled";
/*const imgUrl = 'https://image.tmdb.org/t/p/w500';*/
 const Home = () => {
  const [trendMovie, setTrendMovie] = useState([])
  /*
    class App extends Component {
        state = {
          articles: [],
          isLoading: false,
          error: null,
        };
        useMovieSearch = (apiFunction, id) => {
            const [movieArr, setMovieArr] = useState([]);
            const [error, setError] = useState('');
            const [isLoading, setIsLoading] = useState(false);*/
            useEffect(() => {
              getTrendingMovies().then(res => setTrendMovie(res.data.results.json()));
  }, []);

     
            return (
              <Container>
                <List>
                  {trendMovie.map(({ id, title }) => {
                   return <Item key={trendMovie.id}>
                      <Link to={`/movies/${trendMovie.id}`}>
                     
                            <Title>{trendMovie.title}</Title>
                       </Link>
                    </Item>
                  })}
                </List>
              </Container>
            )
          }
          
       
          export default  Home;