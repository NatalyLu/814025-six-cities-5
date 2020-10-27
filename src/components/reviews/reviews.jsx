import React from "react";
import PropTypes from "prop-types";

const Reviews = (props) => {
  const hotelReviews = props.hotelReviews;
  return (
    <ul className="reviews__list">
      {hotelReviews.map((review, i) => (
        <li key={`review-${i}`} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {review.nik}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `80%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.review}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{review.month} {review.year}</time>
          </div>
        </li>
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  // onNewReview: PropTypes.func.isRequired,
  hotelReviews: PropTypes.arrayOf(PropTypes.shape({
    nik: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    data: PropTypes.shape({
      month: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    }).isRequired,
    starts: PropTypes.number.isRequired,
  }))
};

export default Reviews;
