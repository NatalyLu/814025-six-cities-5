export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SAME_CITY_OFFERS_LIST: `CHANGE_SAME_CITY_OFFERS_LIST`,
  CHANGE_FAVORITE_OFFERS_LIST: `CHANGE_FAVORITE_OFFERS_LIST`,
  CHANGE_OFFER_REVIEWS_LIST: `CHANGE_OFFER_REVIEWS_LIST`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    selectedCity: city
  }),
  changeSameCityOffersList: () => ({
    type: ActionType.CHANGE_SAME_CITY_OFFERS_LIST
  }),
  changeFavoriteOffersList: (id) => ({
    type: ActionType.CHANGE_FAVORITE_OFFERS_LIST,
    favoriteId: id
  }),
  changeOfferReviewsList: (idOffer) => ({
    type: ActionType.CHANGE_OFFER_REVIEWS_LIST,
    offerId: idOffer
  })
};
