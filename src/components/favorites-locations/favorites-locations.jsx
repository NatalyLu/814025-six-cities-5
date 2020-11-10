import React, {Fragment} from "react";
import Card from "../card/card";
import {offersPropTypes, uniqueCitiesPropTypes} from "../../prop-types";

const FavoritesLocations = (props) => {
  const {offersFavoritesSorted, uniqueFavoriteCities} = props;

  const offerImgWidth = `150`;
  const offerImgHeight = `110`;
  const articleClasses = `favorites__card`;
  const cardImageClasses = `favorites__image-wrapper`;
  const cardInfoClasses = `favorites__card-info `;
  const bookmarkButtonClasses = `place-card__bookmark-button--active`;

  return (
    <Fragment>
      {uniqueFavoriteCities.map((favCity, i) => (
        <li key={`favorite-city-${i}`} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{favCity}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersFavoritesSorted.filter((offerFavorite) => (offerFavorite.city.name) === favCity).map((favHotel, j) => (
              <Card key={`favorite-hotel-${j}`}
                offer={favHotel}
                offerImgWidth={offerImgWidth}
                offerImgHeight={offerImgHeight}
                articleClasses={articleClasses}
                cardImageClasses={cardImageClasses}
                cardInfoClasses={cardInfoClasses}
                bookmarkButtonClasses={bookmarkButtonClasses} />
            ))}
          </div>
        </li>
      ))}
    </Fragment>
  );
};

FavoritesLocations.propTypes = {
  offersFavoritesSorted: offersPropTypes,
  uniqueFavoriteCities: uniqueCitiesPropTypes
};

export default FavoritesLocations;
