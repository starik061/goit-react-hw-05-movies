import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const FindMovies = props => {
  return (
    <ul>
      {props.movies.map(movie => (
        <li key={movie?.id}>
          <Link to={`${movie?.id}`}>{movie?.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};

// FindMovies.propTypes = {}

export default FindMovies;
