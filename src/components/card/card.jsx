import React from "react";
import {Link} from "react-router-dom";
import {offerPropTypes} from "../../prop-types";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Card = (props) => {
  const {offer, changeFavoriteOffersList, changeActiveItemId} = props;
  const ratingImgWidth = `${(offer.rating * 20)}%`;

  const handleChangeStatus = (item, evt) => {
    evt.preventDefault();
    changeFavoriteOffersList(item.id);
    return;
  };

  const handelHoverCard = () => {
    changeActiveItemId(offer.id);
  };

  const handelBlurCard = () => {
    changeActiveItemId(null);
  };

  return (
    <article className={`${props.articleClasses} place-card`} onMouseEnter={handelHoverCard} onMouseLeave={handelBlurCard}>
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${props.cardImageClasses} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={props.offerImgWidth} height={props.offerImgHeight} alt="Place image"/>
        </Link>
      </div>
      <div className={`${props.cardInfoClasses} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${offer.isFavorite && `place-card__bookmark-button--active`} place-card__bookmark-button ${props.bookmarkButtonClasses} button`} type="button" onClick={(evt) => handleChangeStatus(offer, evt)}>
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
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeFavoriteOffersList(id) {
    dispatch(ActionCreator.changeFavoriteOffersList(id));
  },
  changeActiveItemId(id) {
    dispatch(ActionCreator.changeActiveItemId(id));
  }
});

Card.propTypes = {
  offer: offerPropTypes,
  articleClasses: PropTypes.string,
  cardImageClasses: PropTypes.string,
  offerImgWidth: PropTypes.string,
  offerImgHeight: PropTypes.string,
  cardInfoClasses: PropTypes.string,
  bookmarkButtonClasses: PropTypes.string,
  changeFavoriteOffersList: PropTypes.func,
  changeActiveItemId: PropTypes.func,
};

export {Card};
export default connect(null, mapDispatchToProps)(Card);
