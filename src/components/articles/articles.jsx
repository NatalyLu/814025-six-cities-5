import React, {Fragment, PureComponent} from "react";
import {offersPropTypes} from "../../prop-types";
import Card from "../card/card";

class Articles extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.infoForCard = {
      offerLink: `/offer`,
      offerImgWidth: `260`,
      offerImgHeight: `200`,
      imgWidth: `80%`,
      classes: {
        articleClasses: `cities__place-card`,
        cardImageClasses: `cities__image-wrapper`
      }
    };

    this.renderStatus = this.renderStatus.bind(this);
  }

  renderStatus(isPremium) {
    if (isPremium) {
      return (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      );
    }
    return (null);
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
            infoForCard={this.infoForCard}
            renderStatus={() => (this.renderStatus(offer.isPremium))} />
        ))}
      </Fragment>
    );
  }
}

Articles.propTypes = {
  offersSameCity: offersPropTypes
};

export default Articles;
