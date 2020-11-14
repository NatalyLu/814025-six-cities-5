import React from "react";
import {Link} from "react-router-dom";
import {offerPropTypes} from "../../prop-types";
import PropTypes from "prop-types";

const Card = (props) => {
  const offer = props.offer;
  const ratingImgWidth = `${(offer.rating * 20)}%`;
  const offerLink = `/offer`;

  return (
    <article className={`${props.articleClasses} place-card`}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${props.cardImageClasses} place-card__image-wrapper`}>
        <Link to={offerLink}>
          <img className="place-card__image" src={offer.previewImage} width={props.offerImgWidth} height={props.offerImgHeight} alt="Place image"/>
        </Link>
      </div>
      <div className={`${props.cardInfoClasses} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${props.bookmarkButtonClasses} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingImgWidth}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: offerPropTypes,
  articleClasses: PropTypes.string,
  cardImageClasses: PropTypes.string,
  offerImgWidth: PropTypes.string,
  offerImgHeight: PropTypes.string,
  cardInfoClasses: PropTypes.string,
  bookmarkButtonClasses: PropTypes.string,
};

export default Card;
