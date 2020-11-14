import React, {Fragment} from "react";
import Card from "../card/card";
import {offersPropTypes, uniqueCitiesPropTypes} from "../../prop-types";

const FavoritesLocations = (props) => {
  const {offersFavoritesSorted, uniqueFavoriteCities} = props;

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
                offerImgWidth={`150`}
                offerImgHeight={`110`}
                articleClasses={`favorites__card`}
                cardImageClasses={`favorites__image-wrapper`}
                cardInfoClasses={`favorites__card-info`}
                bookmarkButtonClasses={`place-card__bookmark-button--active`} />
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
