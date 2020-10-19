import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import PropertyPage from "../property-page/property-page";
import PropTypes from "prop-types";

const App = (props) => {
  const offersCount = props.offersCount;
  const offers = props.offers;
  const reviews = props.reviews;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage offersCount={offersCount} />
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
            offers = {offers}
            reviews = {reviews}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
