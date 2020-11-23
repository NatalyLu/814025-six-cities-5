import React, {Fragment} from "react";
import {offersPropTypes} from "../../prop-types";
import Card from "../card/card";

const Articles = (props) => {
  return (
    <Fragment>
      {props.offersSameCity.map((offer, i) => (
        <Card key={`${offer.city.name}-${i}`}
          offer={offer}
          offerImgWidth={`260`}
          offerImgHeight={`200`}
          articleClasses={`cities__place-card`}
          cardImageClasses={`cities__image-wrapper`} />
      ))}
    </Fragment>
  );
};

Articles.propTypes = {
  offersSameCity: offersPropTypes
};

export default Articles;
