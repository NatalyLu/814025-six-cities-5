import React from "react";
import Reviews from "../reviews/reviews";
import ReviewForm from "../review-form/review-form";
import PropTypes from "prop-types";

const PropertyInformation = (props) => {
  const {hotel, hotelReviews} = props;

  return (
    <div className="property__wrapper">
      <div className="property__mark">
        <span>{hotel.status}</span>
      </div>
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {hotel.name}
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
          <span style={{width: `80%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{hotel.stars}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {hotel.type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {hotel.rooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {hotel.maxCountOfPeople} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{hotel.price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {hotel.inside.map((inside, i) =>(
            <li key={`inside-${i}`} className="property__inside-item">
              {inside}
            </li>
          ))}
        </ul>
      </div>
      <div className="property__host">
        <h2 className="property__host-title">Meet the host</h2>
        <div className="property__host-user user">
          <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
            <img className="property__avatar user__avatar" src={hotel.host.avatar} width="74" height="74" alt="Host avatar" />
          </div>
          <span className="property__user-name">
            {hotel.host.name}
          </span>
        </div>
        <div className="property__description">
          <p className="property__text">
            {hotel.host.description}
            A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
          </p>
          <p className="property__text">
            An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
          </p>
        </div>
      </div>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>

        <Reviews hotelReviews={hotelReviews} />
        {/* onNewReview={onNewReview}/> */}

        <ReviewForm />
      </section>
    </div>
  );
};

PropertyInformation.propTypes = {
  hotelReviews: PropTypes.array,
  // onNewReview: PropTypes.func.isRequired,

  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    imgs: PropTypes.array.isRequired,
    rooms: PropTypes.number.isRequired,
    maxCountOfPeople: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    inside: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired
};

export default PropertyInformation;
