import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";

const SortingOptions = (props) => {

  const SORT_TYPES_LIST = [
    {label: `Popular`, value: `popular`},
    {label: `Price: low to high`, value: `price-low-to-high`},
    {label: `Price: high to low`, value: `price-high-to-low`},
    {label: `Top rated first`, value: `top-rated-first`},
  ];

  const handleChangeFilter = (evt, filter) => {
    props.changeFilterType(filter);
    props.changeOpenListFlag();
    return;
  };

  return (
    <ul className={`places__options places__options--custom ${props.isOpenList && `places__options--opened`}`} >
      {SORT_TYPES_LIST.map(({label, value}) => (
        <li key={`sort-by-${value}`} className={`places__option ${value === props.filterType ? `places__option--active` : ``}`} tabIndex="0" data-filter={value} onClick={(evt) => handleChangeFilter(evt, value)}>{label}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({DATA}) => ({
  isOpenList: DATA.isOpenList,
  filterType: DATA.filterType
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterType(fType) {
    dispatch(ActionCreator.changeFilterType(fType));
  },
  changeOpenListFlag() {
    dispatch(ActionCreator.changeOpenListFlag());
  }
});

SortingOptions.propTypes = {
  changeFilterType: PropTypes.func,
  isOpenList: PropTypes.bool,
  changeOpenListFlag: PropTypes.func,
  filterType: PropTypes.string
};

export {SortingOptions};
export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
