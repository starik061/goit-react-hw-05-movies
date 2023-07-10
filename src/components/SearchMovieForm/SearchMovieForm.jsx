import React, { useState } from 'react';
// import PropTypes from 'prop-types'

const SearchMovieForm = props => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.searchMovie(inputValue);
    setInputValue('');
  };
  const handleInput = event => {
    setInputValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInput}
        type="text"
        placeholder="Film for search"
        value={inputValue}
      />
      <button type="submit">Search</button>
    </form>
  );
};

// SearchMovieForm.propTypes = {};

export default SearchMovieForm;
