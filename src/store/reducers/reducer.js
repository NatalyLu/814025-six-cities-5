// import offersCities from "./mocks/offers";
// import offerReviewsList from "./mocks/reviews";
import {extend} from "../../func";
import {ActionType} from "../action";

const initionalState = {
  selectedCity: `Amsterdam`,
  offers: [],
  offersFavorites: [],
  reviews: [],


  // selectedCity: offersCities[0].city.name,
  // offers: offersCities,
  changedFavorite: false,
  // offersFavorites: offersCities.filter((favOffer) => (favOffer.isFavorite)),
  filterType: `popular`,
  targetHoverItemId: 0,
  isOpenList: false,

  // reviews: offerReviewsList,
};

const reducer = (state = initionalState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        selectedCity: action.selectedCity
      });

    case ActionType.CHANGE_FAVORITE_OFFERS_LIST:
      const offersFav = state.offers.map((item) => (item.id === action.favoriteId ? extend(item, {isFavorite: !item.isFavorite}) : item));
      return extend(state, {
        offersFavorites: offersFav.filter((Offerfav) => (Offerfav.isFavorite)),
        offers: offersFav
      });

    case ActionType.CHANGE_FILTER_TYPE:
      return extend(state, {
        filterType: action.filterType
      });

    case ActionType.CHANGE_ACTIVE_ITEM_ID:
      return extend(state, {
        targetHoverItemId: action.offerId
      });

    case ActionType.ADD_NEW_REVIEW:
      return extend(state, {
        reviews: [...state.reviews, action.newReview]
      });

    case ActionType.CHANGE_OPEN_LIST_FLAG:
      return extend(state, {
        isOpenList: !state.isOpenList
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });
  }
  return state;
};

export {reducer};
