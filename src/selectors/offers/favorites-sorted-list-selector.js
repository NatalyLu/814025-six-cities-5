import {createSelector} from "reselect";
import {sortArrayByFieldHighToLow} from "../../func";

const getOffers = (state) => state.offersFavorites;
const getSortingParam = (state, props) => props;

export const getOffersSortedList = createSelector(
    [getOffers, getSortingParam],
    (offers, sortingParam) => {
      return offers.slice(0).sort(sortArrayByFieldHighToLow(sortingParam));
    }
);
