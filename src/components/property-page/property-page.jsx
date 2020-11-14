import React from "react";
import PropertyGallery from "../property-gallery/property-gallery";
import PropertyInformation from "../property-information/property-information";
import PropertyNearPlaces from "../property-near-places/property-near-places";
import Header from "../header/header";
import MainMap from "../main-map/main-map";
import {reviewsPropTypes, offersPropTypes, offerPropTypes} from "../../prop-types";

const PropertyPage = (props) => {
  const {offer, nearPlaces, offerReviews} = props;
  const cityLocation = offer.city.location;
  // Создаем новый массив, состоящий из самого места (offer) и ближайщих мест
  const offers = nearPlaces.concat(offer);

  return (
    <div className="page">
      <Header
        userName={`Oliver.conner@gmail.com`}
        userNameClasses={`header__user-name user__name`} />

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
          <MainMap
            offers={offers}
            cityLocation={cityLocation}
            mapClasses={`property__map`} />
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
  offerReviews: reviewsPropTypes,
  offer: offerPropTypes,
  nearPlaces: offersPropTypes
};


export default PropertyPage;
