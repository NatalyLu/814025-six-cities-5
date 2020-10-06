import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import PropertyPage from "../property-page/property-page";
import PropTypes from "prop-types";

const App = (props) => {
  const offersCount = props.offersCount;

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
        <Route exact path="/offer/:id?" component={PropertyPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default App;
