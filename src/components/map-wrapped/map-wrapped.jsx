import React from "react";
import {mapClassesPropTypes} from "../../prop-types";
import {withMap} from "../../hocs/with-map";
import {connect} from "react-redux";

const Map = (props) => {
  return (
    <section id="map" className={`${props.mapClasses} map`}></section>
  );
};

const MapWrapped = withMap(Map);

const mapStateToProps = (state) => ({
  offerId: state.targetHoverItemId
});

Map.propTypes = {
  mapClasses: mapClassesPropTypes
};

export {Map};
export default connect(mapStateToProps)(MapWrapped);
