import React from 'react'

export const Review = ({review}) => (
  <div className="review">
    <h3>{review.headline}</h3>
    <h4>By: {review.byline}</h4>
    <img src={review.multimedia.src}></img>
    <p>{review["summary_short"]}</p>
    <a href={review.link}>See Full Review</a>
  </div>
);

export const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => <Review review={review} />)}
    </div>
  )
};
