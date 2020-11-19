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
  offerReviews: [offerReviewsList[0]]
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
      const newFav = state.offers.filter((item) => (item.id === action.favoriteId));
      // не знаю, как это записать без присваивания
      const result = newFav[0].isFavorite ? (newFav[0].isFavorite = false) : (newFav[0].isFavorite = true);

      return extend(state, {
        offersFavorites: state.offers.filter((Offerfav) => (Offerfav.isFavorite))
      });
    case ActionType.CHANGE_OFFER_REVIEWS_LIST:
      return extend(state, {
        offerReviews: state.reviews.filter((review) => (review.id === action.offerId))
      });
  }
  return state;
};

export {reducer};
