import React from "react";
import Header from "../header/header";
import Locations from "../locations/locations";
import Places from "../places/places";
import MainMap from "../main-map/main-map";
import {offersPropTypes, uniqueCitiesPropTypes} from "../../prop-types";

const IndexPage = (props) => {
  const offersSameCity = props.offersSameCity;
  const uniqueCities = props.uniqueCities;

  const logoLinkClass = `header__logo-link--active`;
  const userNameClasses = `header__user-name user__name`;
  const userName = `Oliver.conner@gmail.com`;

  const mapClasses = `cities__map`;
  const cityLocation = offersSameCity[0].city.location;

  return (
    <div className="page page--gray page--main">
      <Header
        logoLinkClass={logoLinkClass}
        userNameClasses={userNameClasses}
        userName={userName} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations uniqueCities={uniqueCities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places offersSameCity={offersSameCity} />
            <div className="cities__right-section">
              <MainMap
                offers={offersSameCity}
                cityLocation={cityLocation}
                mapClasses={mapClasses} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

IndexPage.propTypes = {
  offersSameCity: offersPropTypes,
  uniqueCities: uniqueCitiesPropTypes
};

export default IndexPage;
