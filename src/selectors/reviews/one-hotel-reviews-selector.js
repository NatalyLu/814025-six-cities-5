import {createSelector} from "reselect";

const getReviews = (state) => state.reviews;
const getIdOffer = (state, idOffer) => idOffer;

export const getOneHotelReviews = createSelector(
    [getReviews, getIdOffer],
    (reviews, idOffer) => {
      return reviews.slice(0).filter((review) => (review.id === idOffer));
    }
);
