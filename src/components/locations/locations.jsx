import React from "react";
import {uniqueCitiesPropTypes} from "../../prop-types";

// Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf
const Locations = (props) => {
  const uniqueCities = props.uniqueCities;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {uniqueCities.map((city, i) => (
          <li key={`city-${i}`} className="locations__item">
            <a className={`locations__item-link tabs__item ${city === `Amsterdam` && `tabs__item--active`}`} href="#">
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

Locations.propTypes = {
  uniqueCities: uniqueCitiesPropTypes
};

export default Locations;
