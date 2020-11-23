import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";
import PropTypes from "prop-types";

const SortingOptions = (props) => {
  const {changeFilterType} = props;

  const handleChangeFilter = (evt) => {
    changeFilterType(evt.target.dataset[`filter`]);
    return;
  };

  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex="0" data-filter="popular" onClick={handleChangeFilter}>Popular</li>
      <li className="places__option" tabIndex="0" data-filter="price-low-to-high" onClick={handleChangeFilter}>Price: low to high</li>
      <li className="places__option" tabIndex="0" data-filter="price-high-to-low" onClick={handleChangeFilter}>Price: high to low</li>
      <li className="places__option" tabIndex="0" data-filter="top-rated-first" onClick={handleChangeFilter}>Top rated first</li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeFilterType(fType) {
    dispatch(ActionCreator.changeFilterType(fType));
  },
});

SortingOptions.propTypes = {
  changeFilterType: PropTypes.func
};

export {SortingOptions};
export default connect(null, mapDispatchToProps)(SortingOptions);
