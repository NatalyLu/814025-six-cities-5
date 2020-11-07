import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import PropertyPage from "../property-page/property-page";
import {offersShortPropTypes, reviewsShortPropTypes} from "../../prop-types";
import {getArrayOfCities} from "../../func";

const App = (props) => {
  const {offers, reviews} = props;
  const offersSameCity = offers.filter((offer) => (offer.city.name === `amsterdam`));
  const offer = offersSameCity[0];
  const uniqueCities = getArrayOfCities(offers);

  const offersFavorites = offers.filter((favOffer) => (favOffer.isFavorite));
  const uniqueFavoriteCities = getArrayOfCities(offersFavorites);

  const offerReviews = reviews.filter((review) => (review.id === offer.id));

  const nearPlaces = [];
  nearPlaces.push(offers[1], offers[2], offers[0]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage
            offersSameCity={offersSameCity}
            uniqueCities={uniqueCities} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage
            offersFavorites={offersFavorites}
            uniqueFavoriteCities={uniqueFavoriteCities} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/offer/:id?">
          <PropertyPage
            nearPlaces={nearPlaces}
            offer={offer}
            offerReviews={offerReviews} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: reviewsShortPropTypes,
  offers: offersShortPropTypes,
};

export default App;
