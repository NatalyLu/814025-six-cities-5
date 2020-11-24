import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import PropertyPage from "../property-page/property-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/offer/:id?" component={PropertyPage} />
        {/* <PropertyPage  /> */}
        {/* </Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
