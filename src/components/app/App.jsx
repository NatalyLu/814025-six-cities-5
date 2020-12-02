import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import PropertyPage from "../property-page/property-page";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import {RouteConsts} from "../../const";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={RouteConsts.ROOT}>
          <IndexPage />
        </Route>
        {/* <Route exact path="/favorites">
          <FavoritesPage />
        </Route> */}
        <Route exact path={RouteConsts.LOGIN}>
          <LoginPage />
        </Route>
        {/* <Route exact path="/login"
          render={({history}) => (
            <LoginPage onReplayButnClick={() => history.push(`/`)} />
          )}
        /> */}
        <PrivateRoute exact path={RouteConsts.FAVORITES}
          render={() => {
            return (
              <FavoritesPage />
            );
          }}
        />
        <Route path={`${RouteConsts.OFFER}/:id?`} component={PropertyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
