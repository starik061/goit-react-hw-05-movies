import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import SearchMovieForm from '../components/SearchMovieForm/SearchMovieForm';
import { fetchMovieByQuery } from 'moviesAPI/fetchMoviesData';
import FindMovies from 'components/FindMovies/FindMovies';

const Movies = props => {
  const [findMovies, setFindMovies] = useState([]);
  const [isFound, setIsFound] = useState(true);

  const searchMovie = async query => {
    try {
      const findMoviesArray = await fetchMovieByQuery(query);

      setFindMovies(findMoviesArray);

      if (findMoviesArray.length > 0) {
        setIsFound(false);
      }

      console.log(findMovies);
    } catch (error) {}
  };
  return (
    <>
      <SearchMovieForm searchMovie={searchMovie} />
      {findMovies.length > 0 && <FindMovies movies={findMovies} />}
      {findMovies.length === 0 && !isFound && <div>Not found</div>}
    </>
  );
};

// Movies.propTypes = {};

export default Movies;
