import { fetchMovieReview } from 'moviesAPI/fetchMoviesData';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const reviewsData = await fetchMovieReview(movieId);

      setReviews(reviewsData.slice(0, 4));
      console.log(reviewsData);
    };

    fetchData();
  }, [movieId]);

  if (reviews && reviews.length > 0) {
    return (
      <div>
        {reviews.map(actor => {
          const { author, content, id } = actor;
          return (
            <div key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>We don't have any reviews for this film</div>;
};

export default Reviews;
