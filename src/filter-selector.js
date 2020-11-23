import {createSelector} from "reselect";
import {sortArrayByFieldLowToHigh, sortArrayByFieldHighToLow} from "./func";

export const FilterType = {
  POPULAR: `popular`,
  PRICE_LOW_TO_HIGH: `price-low-to-high`,
  PRICE_HIGH_TO_LOW: `price-high-to-low`,
  TOP_RATED_FIRST: `top-rated-first`
};

const getFilter = (state) => state.filterType;
const getOffers = (state) => state.offersSameCity;

export const getFilteredOffers = createSelector(
    [getFilter, getOffers],
    (filterType, offersSameCityList) => {

      const offers = offersSameCityList.slice(0);
      switch (filterType) {
        case FilterType.POPULAR:
          return offersSameCityList;
        case FilterType.PRICE_LOW_TO_HIGH:
          return offers.sort(sortArrayByFieldLowToHigh(`price`));
        case FilterType.PRICE_HIGH_TO_LOW:
          return offers.sort(sortArrayByFieldHighToLow(`price`));
        case FilterType.TOP_RATED_FIRST:
          return offers.sort(sortArrayByFieldHighToLow(`rating`));
        default:
          return offersSameCityList;
      }
    }
);
