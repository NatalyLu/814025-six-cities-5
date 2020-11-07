import React from "react";
import {Link} from "react-router-dom";
import {offerPropTypes, infoForCardPropTypes, renderStatusPropTypes} from "../../prop-types";

const Card = (props) => {
  const {infoForCard, renderStatus} = props;
  const {imgWidth = `80%`} = props.infoForCard.imgWidth;
  const offer = props.offer;

  return (
    <article className={`${infoForCard.classes.articleClasses} place-card`}>
      {renderStatus()}
      <div className={`${infoForCard.classes.cardImageClasses} place-card__image-wrapper`}>
        <Link to={infoForCard.offerLink}>
          <img className="place-card__image" src={offer.previewImage} width={infoForCard.offerImgWidth} height={infoForCard.offerImgHeight} alt="Place image"/>
        </Link>
      </div>
      <div className={`${infoForCard.classes.cardInfoClasses} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${infoForCard.classes.bookmarkButtonClasses} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${imgWidth}`}}></span>
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
  infoForCard: infoForCardPropTypes,
  renderStatus: renderStatusPropTypes
};

Card.defaultProps = {
  renderStatus: () => {},
  infoForCard: {}
};

export default Card;
