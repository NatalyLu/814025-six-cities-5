import React, {Fragment, PureComponent} from "react";
import {offersPropTypes} from "../../prop-types";
import Card from "../card/card";

class Articles extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.offerImgWidth = `260`;
    this.offerImgHeight = `200`;
    this.articleClasses = `cities__place-card`;
    this.cardImageClasses = `cities__image-wrapper`;
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
            offerImgWidth={this.offerImgWidth}
            offerImgHeight={this.offerImgHeight}
            articleClasses={this.articleClasses}
            cardImageClasses={this.cardImageClasses} />
        ))}
      </Fragment>
    );
  }
}

Articles.propTypes = {
  offersSameCity: offersPropTypes
};

export default Articles;
