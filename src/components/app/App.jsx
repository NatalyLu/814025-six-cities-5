import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import PropertyPage from "../property-page/property-page";
import {offersPropTypes, reviewsPropTypes} from "../../prop-types";
import {getArrayOfCities} from "../../func";
import {connect} from "react-redux";

const App = (props) => {
  const {offers, reviews} = props;
  const offersSameCity = offers.filter((offer) => (offer.city.name === `Amsterdam`));
  const offer = offersSameCity[0];
  const uniqueCities = getArrayOfCities(offers);

  const offersFavorites = offers.filter((favOffer) => (favOffer.isFavorite));
  const uniqueFavoriteCities = getArrayOfCities(offersFavorites);

  const offerReviews = reviews.filter((review) => (review.id === offer.id));

  const nearPlaces = [];
  nearPlaces.push(offers[1], offers[2], offers[3]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage
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

const mapStateToProps = (state) => ({
  offers: state.offers
});

App.propTypes = {
  reviews: reviewsPropTypes,
  offers: offersPropTypes,
};

export {App};
export default connect(mapStateToProps)(App);
