import offersCities from "./mocks/offers";
import {extend} from "./func";
import {ActionType} from "./action";

const initionalState = {
  selectedCity: offersCities[0].city.name,
  offers: offersCities,
  offersSameCity: offersCities.filter((offer) => (offer.city.name === offersCities[0].city.name))
};

const reducer = (state = initionalState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: action.selectedCity
      });
    case ActionType.GET_SAME_CITY_OFFERS_LIST:
      return extend(state, {
        offersSameCity: state.offers.filter((offer) => (offer.city.name === state.selectedCity))
      });
    case ActionType.GET_ALL_OFFERS_LIST:
      return state.offers;
  }
  return state;
};

export {reducer};
