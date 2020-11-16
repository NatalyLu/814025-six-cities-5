export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_SAME_CITY_OFFERS_LIST: `GET_SAME_CITY_OFFERS_LIST`,
  GET_ALL_OFFERS_LIST: `GET_ALL_OFFERS_LIST`
};

export const ActionCreator = {
  selectCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    selectedCity: city
  }),
  getSameCityOffersList: () => ({
    type: ActionType.GET_SAME_CITY_OFFERS_LIST,
  }),
  getAllOffersList: () => ({
    type: ActionType.GET_ALL_OFFERS_LIST
  })
};
