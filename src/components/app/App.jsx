import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import PropertyPage from "../property-page/property-page";
import {Towns} from "../../const";
import PropTypes from "prop-types";

const App = (props) => {
  const offersCount = props.offersCount;
  const offers = props.offers;
  const reviews = props.reviews;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage
            offer = {offers[0]}
            offersCount={offersCount} />
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
            hotel={offers[0].hotels[0]}
            hotelsReviews={reviews[0].hotels[0]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    town: PropTypes.oneOf([Towns.AMSTERDAM, Towns.BRUSSELS, Towns.COLOGNE, Towns.PARIS, Towns.HAMBURG, Towns.DUSSELDORF]).isRequired,
    hotels: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      hotelReviews: PropTypes.array.isRequired
    })).isRequired
  }).isRequired).isRequired,

  offers: PropTypes.arrayOf(PropTypes.shape({
    town: PropTypes.oneOf([Towns.AMSTERDAM, Towns.BRUSSELS, Towns.COLOGNE, Towns.PARIS, Towns.HAMBURG, Towns.DUSSELDORF]).isRequired,
    hotels: PropTypes.array.isRequired
  }).isRequired).isRequired
};

export default App;
