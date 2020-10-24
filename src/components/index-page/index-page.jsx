import React from "react";
import Header from "../header/header";
import Locations from "../locations/locations";
import Places from "../places/places";
import PropTypes from "prop-types";

const IndexPage = (props) => {
  const offersCount = props.offersCount;
  const offers = props.offers;
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
              offers={offers} />
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
  offers: PropTypes.array.isRequired
};

export default IndexPage;
