import React from "react";
import FavoritesPlace from "../favorites-place/favorites-place";

const FavoritesLocations = () => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <FavoritesPlace />
        <FavoritesPlace />
      </div>
    </li>
  );
};

export default FavoritesLocations;
