import React, {Fragment, PureComponent} from "react";
import {offersPropTypes} from "../../prop-types";
import Card from "../card/card";

class Articles extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  render() {
    const offersSameCity = this.props.offersSameCity;
    return (
      <Fragment>
        {offersSameCity.map((offer, i) => (
          <Card key={`${offer.city.name}-${i}`}
            onMouseOver={() =>{
              this.setState({hover: true});
            }}
            onMouseOut={() => {
              this.setState({hover: false});
            }}
            offer={offer}
            offerImgWidth={`260`}
            offerImgHeight={`200`}
            articleClasses={`cities__place-card`}
            cardImageClasses={`cities__image-wrapper`} />
        ))}
      </Fragment>
    );
  }
}

Articles.propTypes = {
  offersSameCity: offersPropTypes
};

export default Articles;
