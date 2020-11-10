import React from "react";
import {reviewsPropTypes} from "../../prop-types";
import Review from "../review/review";

const Reviews = (props) => {
  const offerReviews = props.offerReviews;
  return (
    <ul className="reviews__list">
      {offerReviews.map((review, i) => (
        <Review key={`review-${i}`}
          review={review} />
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  offerReviews: reviewsPropTypes
};

export default Reviews;
