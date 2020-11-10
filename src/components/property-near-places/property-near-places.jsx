import React, {Fragment} from "react";
import {offersPropTypes} from "../../prop-types";
import Card from "../card/card";

const PropertyNearPlaces = (props) => {
  const nearPlaces = props.nearPlaces;

  const offerImgWidth = `260`;
  const offerImgHeight = `200`;
  const articleClasses = `near-places__card`;
  const cardImageClasses = `near-places__image-wrapper`;
  const bookmarkButtonClasses = `place-card__bookmark-button--active`;

  return (
    <Fragment>
      {nearPlaces.map((nearPlace, i) => (
        <Card key={`near-place-${i}`}
          offer={nearPlace}
          offerImgWidth={offerImgWidth}
          offerImgHeight={offerImgHeight}
          articleClasses={articleClasses}
          cardImageClasses={cardImageClasses}
          bookmarkButtonClasses={bookmarkButtonClasses} />
      ))}
    </Fragment>
  );
};

PropertyNearPlaces.propTypes = {
  nearPlaces: offersPropTypes
};

export default PropertyNearPlaces;
