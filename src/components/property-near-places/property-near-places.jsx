import React, {Fragment} from "react";
import {nearPlacesPropTypes} from "../../prop-types";
import Card from "../card/card";

const PropertyNearPlaces = (props) => {
  const nearPlaces = props.nearPlaces;
  const infoForCard = {
    offerLink: `/offer`,
    offerImgWidth: `260`,
    offerImgHeight: `200`,
    imgWidth: `80%`,
    classes: {
      articleClasses: `near-places__card`,
      cardImageClasses: `near-places__image-wrapper`,
      bookmarkButtonClasses: `place-card__bookmark-button--active`
    }
  };

  return (
    <Fragment>
      {nearPlaces.map((nearPlace, i) => (
        <Card key={`near-place-${i}`}
          offer={nearPlace}
          infoForCard={infoForCard} />
      ))}
    </Fragment>
  );
};

PropertyNearPlaces.propTypes = {
  nearPlaces: nearPlacesPropTypes
};

export default PropertyNearPlaces;
