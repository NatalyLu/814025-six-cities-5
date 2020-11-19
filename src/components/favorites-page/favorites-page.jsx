import React from "react";
import FavoritesLocations from "../favorites-locations/favorites-locations";
import Header from "../header/header";

const FavoritesPage = () => {
  return (
    <div className="page">
      <Header
        userName={`Oliver.conner@gmail.com`}
        userNameClasses={`header__user-name user__name`} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved lisYting</h1>
            <ul className="favorites__list">
              <FavoritesLocations />
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

export default FavoritesPage;
