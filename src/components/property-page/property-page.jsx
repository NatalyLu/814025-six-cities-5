import React from "react";
import PropertyGallery from "../property-gallery/property-gallery";
import PropertyInformation from "../property-information/property-information";
import PropertyNearPlace from "../property-near-place/property-near-place";
import {Towns} from "../../const";
import PropTypes from "prop-types";

const PropertyPage = (props) => {
  const offer = props.offer;
  const reviews = props.reviews;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery
              imgs={offer.hotels[0].imgs} />
          </div>
          <div className="property__container container">
            <PropertyInformation
              hotel={offer.hotels[0]}
              hotelReviews={reviews[0].hotels[0].hotelReviews} />
          </div>
          <section className="property__map map"></section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PropertyNearPlace />
              <PropertyNearPlace />
              <PropertyNearPlace />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyPage.propTypes = {
  reviews: PropTypes.shape({
    town: PropTypes.oneOf([Towns.AMSTERDAM, Towns.BRUSSELS, Towns.COLOGNE, Towns.PARIS, Towns.HAMBURG, Towns.DUSSELDORF]).isRequired,
    hotels: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      hotelReviews: PropTypes.array.isRequired
    })).isRequired
  }).isRequired,

  offer: PropTypes.shape({
    town: PropTypes.oneOf([Towns.AMSTERDAM, Towns.BRUSSELS, Towns.COLOGNE, Towns.PARIS, Towns.HAMBURG, Towns.DUSSELDORF]).isRequired,
    hotels: PropTypes.array.isRequired
  }).isRequired
};


export default PropertyPage;
