import React from "react";
import {connect} from "react-redux";
import {offersPropTypes} from "../../prop-types";
import Header from "../header/header";
import Locations from "../locations/locations";
import Places from "../places/places";
import MapWrapped from "../map-wrapped/map-wrapped";
import {getSameCityOffersList} from "../../selectors/offers/same-cities-list-selector";

const IndexPage = (props) => {

  return (
    <div className="page page--gray page--main">
      <Header
        logoLinkClass={`header__logo-link--active`}
        userNameClasses={`header__user-name user__name`}
        userName={`Oliver.conner@gmail.com`} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Places />
            <div className="cities__right-section">
              <MapWrapped
                offers={props.offersSameCity}
                mapClasses={`cities__map`} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offersSameCity: getSameCityOffersList(state, state.offers)
});

IndexPage.propTypes = {
  offersSameCity: offersPropTypes,
};

export {IndexPage};
export default connect(mapStateToProps)(IndexPage);
