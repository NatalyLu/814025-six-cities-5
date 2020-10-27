import React from "react";
import PropertyGallery from "../property-gallery/property-gallery";
import PropertyInformation from "../property-information/property-information";
import PropertyNearPlace from "../property-near-place/property-near-place";
import PropTypes from "prop-types";

const PropertyPage = (props) => {
  const {hotel, hotelsReviews} = props;

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
              imgs={hotel.imgs} />
          </div>
          <div className="property__container container">
            <PropertyInformation
              hotel={hotel}
              hotelReviews={hotelsReviews.hotelReviews} />
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
  hotelsReviews: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hotelReviews: PropTypes.array.isRequired
  }).isRequired,

  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    imgs: PropTypes.array.isRequired,
    rooms: PropTypes.number.isRequired,
    maxCountOfPeople: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    inside: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired
};


export default PropertyPage;
