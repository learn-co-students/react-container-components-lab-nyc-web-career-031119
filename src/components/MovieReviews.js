// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  const reviewsArray = props.reviews.map((review, idx) => {
    return (
      <div className="review" key={idx}>
        <h5>{review.headline}</h5>
      </div>
    )
  });
  return (
    <div className="review-list">
      {reviewsArray}
    </div>
  )
}

export default MovieReviews;
