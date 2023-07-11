import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types'

import { fetchMovieDetails } from 'moviesAPI/fetchMoviesData';

const MovieDetails = props => {
  const { movieId } = useParams();

  const navigate = useNavigate();

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await fetchMovieDetails(movieId);
      setMovieDetails(movieData);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const poster_path = movieDetails?.poster_path || '';
  const title = movieDetails?.title || '';
  const genres = movieDetails?.genres || [];
  const release_date = movieDetails?.release_date || '';
  const vote_average = movieDetails?.vote_average || 0;
  const overview = movieDetails?.overview || '';

  const getReleaseYear = release_date => {
    return release_date.split('-')[0];
  };
  const getGenres = genres => {
    return genres.map(genre => genre.name).join(', ');
  };
  const getRating = ratingData => {
    ratingData = ratingData.toFixed(1);
    return `${ratingData * 10}%`;
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  if (movieDetails) {
    return (
      <>
        <button onClick={handleGoBack}>Go back</button>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        <h2>{`${title}(${getReleaseYear(release_date)})`}</h2>
        <p>User Score: {getRating(vote_average)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>{getGenres(genres)}</h4>
        <hr />
        <p>Additional information</p>
        <ul>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>

          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </ul>
        <hr />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
  }
};

// MovieDetails.propTypes = {}

export default MovieDetails;
