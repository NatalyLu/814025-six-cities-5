import React, {Fragment} from "react";
import {offersPropTypes} from "../../prop-types";
import Card from "../card/card";

const PropertyNearPlaces = (props) => {
  const nearPlaces = props.nearPlaces;

  return (
    <Fragment>
      {nearPlaces.map((nearPlace, i) => (
        <Card key={`near-place-${i}`}
          offer={nearPlace}
          offerImgWidth={`260`}
          offerImgHeight={`200`}
          articleClasses={`near-places__card`}
          cardImageClasses={`near-places__image-wrapper`}
          bookmarkButtonClasses={`place-card__bookmark-button--active`} />
      ))}
    </Fragment>
  );
};

PropertyNearPlaces.propTypes = {
  nearPlaces: offersPropTypes
};

export default PropertyNearPlaces;
