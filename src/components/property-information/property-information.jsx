import React from "react";
import Reviews from "../reviews/reviews";
import ReviewForm from "../review-form/review-form";
import {offerPropTypes, reviewsPropTypes} from "../../prop-types";
import {connect} from "react-redux";
import {getOneHotelReviews} from "../../selectors/reviews/one-hotel-reviews-selector";
// import {withReviewForm} from "../../hocs/with-review-form";

// const ReviewFormWrapped = withReviewForm(ReviewForm);

const PropertyInformation = (props) => {
  const {offer, offerReviews} = props;

  return (
    <div className="property__wrapper">
      {offer.isPremium &&
        <div className="property__mark">
          <span>Premium</span>
        </div>
      }
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {offer.title}
        </h1>
        <button className="property__bookmark-button button" type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${(offer.rating * 20)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{offer.rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {offer.type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {offer.bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {offer.maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{offer.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {offer.inside.map((inside, i) =>(
            <li key={`inside-${i}`} className="property__inside-item">
              {inside}
            </li>
          ))}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className={`property__avatar-wrapper ${offer.host.isPro && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
            <img className="property__avatar user__avatar" src={offer.host.avatar} width="74" height="74" alt="Host avatar" />
          </div>
          <span className="property__user-name">
            {offer.host.name}
          </span>
        </div>
        <div className="property__description">
          <p className="property__text">
            {offer.description}
          </p>
          <p className="property__text">
            An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
          </p>
        </div>
      </div>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>

        <Reviews offerReviews={offerReviews} />
        {/* <ReviewFormWrapped /> */}
        <ReviewForm />
      </section>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  offerReviews: getOneHotelReviews(state, ownProps.offer.id)
});

PropertyInformation.propTypes = {
  offerReviews: reviewsPropTypes,
  offer: offerPropTypes,
};

export {PropertyInformation};
export default connect(mapStateToProps)(PropertyInformation);
