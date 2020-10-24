import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PropertyGallery extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const imgs = this.props.imgs;
    return (
      <div className="property__gallery">
        {imgs.map((img, i) => (
          <div key={`img-${i}`} className="property__image-wrapper">
            <img className="property__image" src={img} alt="Photo studio" />
          </div>
        ))}
      </div>
    );
  }
}

PropertyGallery.propTypes = {
  imgs: PropTypes.array.isRequired
};


export default PropertyGallery;
