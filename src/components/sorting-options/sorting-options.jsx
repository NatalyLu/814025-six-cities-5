import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";
import PropTypes from "prop-types";

const SortingOptions = (props) => {
  const {changeFilterType} = props;

  const handleChangeActiveClass = (evt, activeClass) => {
    const tarClasses = evt.target.classList;
    const childrens = evt.currentTarget.children;

    for (let length = 0; length < childrens.length; length++) {
      if (childrens[length].classList.contains(activeClass)) {
        childrens[length].classList.remove(activeClass);
      }
    }
    tarClasses.add(activeClass);
  };

  const handleChangeFilter = (evt) => {
    changeFilterType(evt.target.dataset[`filter`]);
    return;
  };

  return (
    <ul className={`places__options places__options--custom ${props.isOpenList && `places__options--opened`}`} onClick={(evt) => (handleChangeActiveClass(evt, `places__option--active`))}>
      <li className="places__option places__option--active" tabIndex="0" data-filter="popular" onClick={handleChangeFilter}>Popular</li>
      <li className="places__option" tabIndex="0" data-filter="price-low-to-high" onClick={handleChangeFilter}>Price: low to high</li>
      <li className="places__option" tabIndex="0" data-filter="price-high-to-low" onClick={handleChangeFilter}>Price: high to low</li>
      <li className="places__option" tabIndex="0" data-filter="top-rated-first" onClick={handleChangeFilter}>Top rated first</li>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isOpenList: state.isOpenList
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterType(fType) {
    dispatch(ActionCreator.changeFilterType(fType));
  },
});

SortingOptions.propTypes = {
  changeFilterType: PropTypes.func,
  isOpenList: PropTypes.bool
};

export {SortingOptions};
export default connect(mapStateToProps, mapDispatchToProps)(SortingOptions);
