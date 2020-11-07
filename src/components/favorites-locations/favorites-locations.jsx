import React, {Fragment} from "react";
import Card from "../card/card";
import {offersFavoritesPropTypes, uniqueCitiesPropTypes} from "../../prop-types";
import {capitalizeFirstLetter} from "../../func";

const FavoritesLocations = (props) => {
  const {offersFavoritesSorted, uniqueFavoriteCities} = props;
  const infoForCard = {
    offerLink: `/offer`,
    offerImgWidth: `150`,
    offerImgHeight: `110`,
    imgWidth: `100%`,
    classes: {
      articleClasses: `favorites__card`,
      cardImageClasses: `favorites__image-wrapper`,
      cardInfoClasses: `favorites__card-info `,
      bookmarkButtonClasses: `place-card__bookmark-button--active`
    }
  };

  return (
    <Fragment>
      {uniqueFavoriteCities.map((favCity, i) => (
        <li key={`favorite-city-${i}`} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{capitalizeFirstLetter(favCity)}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersFavoritesSorted.filter((offerFavorite) => (capitalizeFirstLetter(offerFavorite.city.name) === favCity)).map((favHotel, j) => (
              <Card key={`favorite-hotel-${j}`}
                offer={favHotel}
                infoForCard={infoForCard} />
            ))}
          </div>
        </li>
      ))}
    </Fragment>
  );
};

FavoritesLocations.propTypes = {
  offersFavoritesSorted: offersFavoritesPropTypes,
  uniqueFavoriteCities: uniqueCitiesPropTypes
};

export default FavoritesLocations;
