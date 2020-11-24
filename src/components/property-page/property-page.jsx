import React from "react";
import PropertyGallery from "../property-gallery/property-gallery";
import PropertyInformation from "../property-information/property-information";
import PropertyNearPlaces from "../property-near-places/property-near-places";
import Header from "../header/header";
import Map from "../map/map";
import {connect} from "react-redux";
import {offersPropTypes} from "../../prop-types";

const PropertyPage = (props) => {
  const offers = props.offers;
  const offer = offers[0];
  const nearPlaces = offers.slice(0, 3);

  return (
    <div className="page">
      <Header
        userName={`Oliver.conner@gmail.com`}
        userNameClasses={`header__user-name user__name`} />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <PropertyGallery imgs={offer.imgs} />
          </div>
          <div className="property__container container">
            <PropertyInformation
              offer={offer} />
          </div>
          <Map
            offers={nearPlaces}
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

const mapStateToProps = (state, ownProps) => ({
  offers: state.offers,
  id: ownProps.match.params.id,
});

PropertyPage.propTypes = {
  offers: offersPropTypes,
};

export {PropertyPage};
export default connect(mapStateToProps)(PropertyPage);
