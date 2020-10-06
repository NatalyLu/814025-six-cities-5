import React from "react";
import FavoritesLocations from "../favorites-locations/favorites-locations";

const Favorites = () => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        <FavoritesLocations />
        <FavoritesLocations />
      </ul>
    </section>
  );
};

export default Favorites;
