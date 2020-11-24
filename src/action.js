export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FAVORITE_OFFERS_LIST: `CHANGE_FAVORITE_OFFERS_LIST`,
  CHANGE_FILTER_TYPE: `CHANGE_FILTER_TYPE`,
  SORTING_OFFERS: `SORTING_OFFERS`,
  CHANGE_MAP_MARKER_URL: `CHANGE_MAP_MARKER_URL`,
  ADD_NEW_REVIEW: `ADD_NEW_REVIEW`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    selectedCity: city
  }),
  changeFavoriteOffersList: (id) => ({
    type: ActionType.CHANGE_FAVORITE_OFFERS_LIST,
    favoriteId: id
  }),
  changeFilterType: (fType) => ({
    type: ActionType.CHANGE_FILTER_TYPE,
    filterType: fType
  }),
  sortingOffers: (arrayNameForSorting) => ({
    type: ActionType.SORTING_OFFERS,
    array: arrayNameForSorting
  }),
  changeMapMarkerUrl: (url, id) => ({
    type: ActionType.CHANGE_MAP_MARKER_URL,
    markerUrl: url,
    offerId: id
  }),

  addNewReview: (review) => ({
    type: ActionType.ADD_NEW_REVIEW,
    newReview: review
  })
};
