import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import IndexPage from "../index-page/index-page";
import FavoritesPage from "../favorites-page/favorites-page";
import LoginPage from "../login-page/login-page";
import PropertyPage from "../property-page/property-page";
import {offersShortPropTypes, reviewsShortPropTypes} from "../../prop-types";
import {capitalizeFirstLetter} from "../../func";

const App = (props) => {
  const {offers, reviews} = props;
  const offersSameCity = offers.filter((offer) => (offer.city.name === `amsterdam`));
  const offer = offersSameCity[0];

  const allCities = [];
  // Создаём массив из всех городов (с повторами)
  offers.map((item) => (allCities.push(item.city.name)));
  // Превращаем созданный массив в set, тем самым исключая одинаковые элементы массива
  const uniqueCities = [...new Set(allCities)];
  // Сделаем первые буквы заглавными
  uniqueCities.map((city, i) => (uniqueCities[i] = capitalizeFirstLetter(city)));

  const offerReviews = reviews.filter((review) => (review.id === offer.id));

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage offersSameCity={offersSameCity} uniqueCities={uniqueCities} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
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
