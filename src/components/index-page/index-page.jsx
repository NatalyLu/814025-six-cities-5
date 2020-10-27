import React from "react";
import Header from "../header/header";
import Locations from "../locations/locations";
import Places from "../places/places";
import PropTypes from "prop-types";

const IndexPage = (props) => {
  const {offersCount, offer} = props;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places
              offersCount={offersCount}
              offer={offer} />
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

IndexPage.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offer: PropTypes.shape({
    town: PropTypes.string.isRequired,
    hotels: PropTypes.array.isRequired
  }).isRequired
};

export default IndexPage;
