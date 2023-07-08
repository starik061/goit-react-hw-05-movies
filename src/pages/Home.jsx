import { fetchTrendingMovies } from 'moviesAPI/fetchMoviesData';
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

const Home = props => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetchTrendingMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie?.id}>
              <a href="#">{movie?.original_title}</a>
            </li>
          ))}
      </ul>
    </>
  );
};

// Home.propTypes = {};

export default Home;
