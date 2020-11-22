import React, {PureComponent} from "react";
import PropertyGallery from "../property-gallery/property-gallery";
import PropertyInformation from "../property-information/property-information";
import PropertyNearPlaces from "../property-near-places/property-near-places";
import Header from "../header/header";
import Map from "../map/map";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";
import {offersPropTypes, reviewsPropTypes} from "../../prop-types";
import PropTypes from "prop-types";

class PropertyPage extends PureComponent {
  constructor(props) {
    super(props);

    this.offers = props.offers;
    this.changeOfferReviewsList = props.changeOfferReviewsList;
    this.offer = this.offers[0];
  }

  componentDidMount() {
    this.props.changeOfferReviewsList(this.offer.id);
  }

  render() {
    const nearPlaces = this.offers.slice(0, 4);

    return (
      <div className="page">
        <Header
          userName={`Oliver.conner@gmail.com`}
          userNameClasses={`header__user-name user__name`} />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <PropertyGallery imgs={this.offer.imgs} />
            </div>
            <div className="property__container container">
              <PropertyInformation
                offer={this.offer}
                offerReviews={this.props.offerReviews} />
            </div>
            <Map mapClasses={`property__map`} />
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
  }
}

const mapStateToProps = (state) => ({
  offers: state.offers,
  offerReviews: state.offerReviews
});

const mapDispatchToProps = (dispatch) => ({
  changeOfferReviewsList(idOffer) {
    dispatch(ActionCreator.changeOfferReviewsList(idOffer));
  }
});

PropertyPage.propTypes = {
  offers: offersPropTypes,
  offerReviews: reviewsPropTypes,
  changeOfferReviewsList: PropTypes.func
};

export {PropertyPage};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyPage);
