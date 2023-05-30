import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Title, List, Item } from "./home.styled";
import  getTrendingMovies  from '../servisesAPI/API';
import propTypes from 'prop-types'
import { Container } from "./home.styled";
/*const imgUrl = 'https://image.tmdb.org/t/p/w500';*/
 const Home = () => {
  const [trendMovies, setTrendMovies] = useState([])
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
              getTrendingMovies().then(setTrendMovies);
  }, []);

  
            return (
              <>
                <ul>
                  {trendMovies.map(({ trendMovie, id, title }) => (
                   <Item key={trendMovie.id}>{trendMovie.title}</Item>
                      
                      
                    
                 )) }
                </ul>
              </>
            )
          }
        /*
          Home.propTypes = {
            trendMovie: propTypes.shape({
              id: propTypes.number.isRequired,
              title: propTypes.string.isRequired,
            })
          }*/
          
          export default  Home;