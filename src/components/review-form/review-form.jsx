import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {withReviewForm} from "../../hocs/with-review-form";

const ReviewForm = (props) => {
  const {handleSubmit, handleFieldChange, review} = props;

  let titles = [`perfect`, `good`, `not bad`, `badly`, `terribly`];
  let titlesLength = titles.length;

  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {(titles.map((title, i) => (
          <Fragment key={`stars-${titlesLength - i}`}>
            <input onChange={handleFieldChange} className="form__rating-input visually-hidden" name="rating" value={titlesLength - i} id={`${titlesLength - i}-stars`} type="radio" />
            <label htmlFor={`${titlesLength - i}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        )))}
      </div>
      <textarea onChange={props.handleFieldChange} value={review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addNewReview(city) {
//     dispatch(ActionCreator.addNewReview(city));
//   }
// });

ReviewForm.propTypes = {
  // addNewReview: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  review: PropTypes.string
};

export default withReviewForm(ReviewForm);
// export default connect(null, mapDispatchToProps)(ReviewForm);
