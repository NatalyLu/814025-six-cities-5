import React from "react";
import Header from "./header/Header";
import Locations from "./locations/Locations";
import Places from "./places/Places";
import PropTypes from "prop-types";

const Index = (props) => {
  const {offersCount} = props;
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <Header />
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places offersCount={offersCount} />
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Index.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default Index;
