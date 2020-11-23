import offersCities from "./mocks/offers";
import offerReviewsList from "./mocks/reviews";
import {extend} from "./func";
import {ActionType} from "./action";

const initionalState = {
  selectedCity: offersCities[0].city.name,
  offers: offersCities,
  offersSameCity: offersCities.filter((offer) => (offer.city.name === offersCities[0].city.name)),
  changedFavorite: false,
  offersFavorites: offersCities.filter((favOffer) => (favOffer.isFavorite)),
  reviews: offerReviewsList,
  offerReviews: [offerReviewsList[0]],
  filterType: `popular`
};

const reducer = (state = initionalState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: action.selectedCity
      });

    case ActionType.CHANGE_SAME_CITY_OFFERS_LIST:
      return extend(state, {
        offersSameCity: state.offers.filter((offer) => (offer.city.name === state.selectedCity))
      });

    case ActionType.CHANGE_FAVORITE_OFFERS_LIST:
      const offersFav = state.offers.map((item) => (item.id === action.favoriteId ? extend(item, {isFavorite: !item.isFavorite}) : item));
      return extend(state, {
        offersFavorites: offersFav.filter((Offerfav) => (Offerfav.isFavorite)),
        offers: offersFav,
        offersSameCity: offersFav.filter((offer) => (offer.city.name === state.selectedCity))
      });

    case ActionType.CHANGE_OFFER_REVIEWS_LIST:
      return extend(state, {
        offerReviews: state.reviews.filter((review) => (review.id === action.offerId))
      });

    case ActionType.CHANGE_FILTER_TYPE:
      return extend(state, {
        filterType: action.filterType
      });
  }
  return state;
};

export {reducer};
