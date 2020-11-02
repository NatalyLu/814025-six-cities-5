import React from "react";
import Header from "../header/header";
import Locations from "../locations/locations";
import Places from "../places/places";
import {offersShortPropTypes, uniqueCitiesPropTypes} from "../../prop-types";

const IndexPage = (props) => {
  const offersSameCity = props.offersSameCity;
  const uniqueCities = props.uniqueCities;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations uniqueCities={uniqueCities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places offersSameCity={offersSameCity} />
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
  offersSameCity: offersShortPropTypes,
  uniqueCities: uniqueCitiesPropTypes
};

export default IndexPage;
