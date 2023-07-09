import { fetchMovieCast } from 'moviesAPI/fetchMoviesData';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const castData = await fetchMovieCast(movieId);

      setCast(castData.cast.slice(0, 5));
    };

    fetchData();
  }, [movieId]);

  if (cast) {
    return (
      <div style={{ display: 'flex', gap: '5px' }}>
        {cast.map(actor => {
          const { profile_path, name, character, id } = actor;
          return (
            <div key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                width="100"
                alt=""
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Cast;
