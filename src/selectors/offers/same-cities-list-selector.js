import {createSelector} from "reselect";

const getOffers = (state) => state.offers;
const getselectedCity = (state) => state.selectedCity;

export const getSameCityOffersList = createSelector(
    [getOffers, getselectedCity],
    (offers, selectedCity) => {
      return offers.slice(0).filter((offer) => (offer.city.name === selectedCity));
    }
);
