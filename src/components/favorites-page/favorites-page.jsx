import React from "react";
import FavoritesLocations from "../favorites-locations/favorites-locations";
import Header from "../header/header";
import {uniqueCitiesPropTypes, offersFullPropTypes} from "../../prop-types";
import {sortArrayByField} from "../../func";

const FavoritesPage = (props) => {
  const {offersFavorites, uniqueFavoriteCities} = props;
  const offersFavoritesSorted = offersFavorites.sort(sortArrayByField(`city.name`));
  const headerInfo = {
    logoLink: `main.html`,
    userName: `Oliver.conner@gmail.com`,
    headerClasses: {
      userNameClasses: `header__user-name user__name`
    }
  };

  return (
    <div className="page">
      <Header headerInfo={headerInfo} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved lisYting</h1>
            <ul className="favorites__list">
              <FavoritesLocations
                uniqueFavoriteCities={uniqueFavoriteCities}
                offersFavoritesSorted={offersFavoritesSorted} />
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  offersFavorites: offersFullPropTypes,
  uniqueFavoriteCities: uniqueCitiesPropTypes
};


export default FavoritesPage;
