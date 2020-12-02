import React, {Fragment} from "react";
import Card from "../card/card";
import {offersPropTypes} from "../../prop-types";
import {getArrayOfCities} from "../../func";
import {connect} from "react-redux";
import {getOffersSortedList} from "../../selectors/offers/favorites-sorted-list-selector";

const FavoritesLocations = (props) => {
  const offersFavoritesSorted = props.offersFavoritesSorted;
  const uniqueFavoriteCities = getArrayOfCities(offersFavoritesSorted);

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

const mapStateToProps = ({DATA}, sortingParam = `city.name`) => ({
  offersFavoritesSorted: getOffersSortedList(DATA, sortingParam)
});


FavoritesLocations.propTypes = {
  offersFavoritesSorted: offersPropTypes,
};

export {FavoritesLocations};
export default connect(mapStateToProps)(FavoritesLocations);
