import {createSelector} from "reselect";

const getId = (state, offerid) => offerid;
const getOffers = (state) => state.offers;

export const getOfferById = createSelector(
    [getOffers, getId],
    (offers, id) => {
      return offers.find((offer) => (offer.id === Number(id)));
    }
);
