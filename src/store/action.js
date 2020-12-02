export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FAVORITE_OFFERS_LIST: `CHANGE_FAVORITE_OFFERS_LIST`,
  CHANGE_FILTER_TYPE: `CHANGE_FILTER_TYPE`,
  SORTING_OFFERS: `SORTING_OFFERS`,
  CHANGE_ACTIVE_ITEM_ID: `CHANGE_ACTIVE_ITEM_ID`,
  ADD_NEW_REVIEW: `ADD_NEW_REVIEW`,
  CHANGE_OPEN_LIST_FLAG: `CHANGE_OPEN_LIST_FLAG`,

  LOAD_OFFERS: `LOAD_OFFERS`,
  ADAPTER_OFFERS_LIST: `ADAPTER_OFFERS_LIST`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
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
  changeActiveItemId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_ITEM_ID,
    offerId: id
  }),

  addNewReview: (review) => ({
    type: ActionType.ADD_NEW_REVIEW,
    newReview: review
  }),

  changeOpenListFlag: () => ({
    type: ActionType.CHANGE_OPEN_LIST_FLAG
  })
};

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const adapterOffersList = () => ({
  type: ActionType.ADAPTER_OFFERS_LIST
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  typr: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});
