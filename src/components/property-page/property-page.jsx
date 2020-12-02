import React from "react";
import PropertyGallery from "../property-gallery/property-gallery";
import PropertyInformation from "../property-information/property-information";
import PropertyNearPlaces from "../property-near-places/property-near-places";
import Header from "../header/header";
import Map from "../map/map";
import {connect} from "react-redux";
import {offersPropTypes, offerPropTypes} from "../../prop-types";
import {getOfferById} from "../../selectors/offers/offer-by-id-selector";

const PropertyPage = (props) => {
  const nearPlaces = props.offers.slice(0, 3);

  return (
    <div className="page">
      <Header
        userName={`Oliver.conner@gmail.com`}
        userNameClasses={`header__user-name user__name`} />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery imgs={props.offer.images} />
          </div>
          <div className="property__container container">
            <PropertyInformation
              offer={props.offer} />
          </div>
          <Map
            offers={nearPlaces}
            targetOffer={props.offer}
            mapClasses={`property__map`} />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PropertyNearPlaces nearPlaces={nearPlaces} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = ({DATA}, ownProps) => ({
  offers: DATA.offers,
  offer: getOfferById(DATA, ownProps.match.params.id)
});

PropertyPage.propTypes = {
  offers: offersPropTypes,
  offer: offerPropTypes
};

export {PropertyPage};
export default connect(mapStateToProps)(PropertyPage);
