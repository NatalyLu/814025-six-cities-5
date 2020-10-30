import React, {Fragment, PureComponent} from "react";
import {offersFullPropTypes} from "../../prop-types";
import Article from "../article/article";

class Articles extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
    // this.updateHoverState = this.updateHoverState.bind(this);
  }

  // updateHoverState(hover) {
  //   this.setState({hover: hover});
  // }
  // <article updateHoverState={this.updateHoverState}

  render() {
    const offersSameCity = this.props.offersSameCity;
    return (
      <Fragment>
        {offersSameCity.map((offer, i) => (
          <Article key={`${offer.city.name}-${i}`}
            onMouseOver={() =>{
              // const element = evt.target.onMouseOver;
              this.setState({hover: true});
            }}
            onMouseOut={() => {
              this.setState({hover: false});
            }}
            offer={offer} />
        ))}
      </Fragment>
    );
  }
}

Articles.propTypes = {
  offersSameCity: offersFullPropTypes
};

export default Articles;
