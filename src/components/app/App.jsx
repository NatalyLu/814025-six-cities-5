import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import PropertyPage from "../property-page/property-page";
import {offersShortPropTypes, reviewsShortPropTypes} from "../../prop-types";

const App = (props) => {
  const {offers, reviews} = props;
  const offersSameCity = offers.filter((offer) => (offer.city.name === `amsterdam`));
  const offer = offersSameCity[0];
  const offerReviews = reviews.filter((review) => (review.id === offer.id));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage offersSameCity={offersSameCity} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        {/* <Route exact path="/offer/:id?" component={PropertyPage} /> */}
        <Route exact path="/offer/:id?">
          <PropertyPage
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
