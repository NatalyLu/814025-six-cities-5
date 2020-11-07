import React from "react";
import PropertyGallery from "../property-gallery/property-gallery";
import PropertyInformation from "../property-information/property-information";
import PropertyNearPlaces from "../property-near-places/property-near-places";
import Header from "../header/header";
import {reviewsShortPropTypes, nearPlacesPropTypes, offerPropTypes} from "../../prop-types";

const PropertyPage = (props) => {
  const {offer, nearPlaces, offerReviews} = props;
  const headerInfo = {
    logoLink: `main.html`,
    userName: `Oliver.conner@gmail.com`,
    headerClasses: {
      userNameClasses: `header__user-name user__name`
    }
  };

  return (
    <div className="page">
      <Header headerInfo={headerInfo} />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery
              imgs={offer.imgs} />
          </div>
          <div className="property__container container">
            <PropertyInformation
              offer={offer}
              offerReviews={offerReviews} />
          </div>
          <section className="property__map map"></section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PropertyNearPlaces
                nearPlaces={nearPlaces} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyPage.propTypes = {
  offerReviews: reviewsShortPropTypes,
  offer: offerPropTypes,
  nearPlaces: nearPlacesPropTypes
};


export default PropertyPage;
