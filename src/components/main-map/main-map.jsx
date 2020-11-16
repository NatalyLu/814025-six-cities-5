import React from "react";
import {connect} from "react-redux";
import Map from "../map/map";
import {offersPropTypes, mapClassesPropTypes} from "../../prop-types";

const MainMap = (props) => {
  const mapClasses = props.mapClasses;
  const offersSameCity = props.offersSameCity;

  return (
    <Map
      mapClasses={mapClasses}
      offersSameCity={offersSameCity} />
  );
};

const mapStateToProps = (state) => ({
  offersSameCity: state.offersSameCity
});

MainMap.propTypes = {
  offersSameCity: offersPropTypes,
  mapClasses: mapClassesPropTypes
};

export {MainMap};
export default connect(mapStateToProps)(MainMap);
