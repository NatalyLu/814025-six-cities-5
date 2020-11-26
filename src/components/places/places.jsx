import React from "react";
import Articles from "../articles/articles";
import {offersPropTypes} from "../../prop-types";
import {connect} from "react-redux";
import SortingOptions from "../sorting-options/sorting-options";
import {getFilteredOffers} from "../../selectors/offers/filter-selector";
import PropTypes from "prop-types";
import {ActionCreator} from "../../action";
import {Link} from "react-router-dom";

const Places = (props) => {
  const offersSameCity = props.offersSameCity;

  const handleOpenList = () => {
    props.changeOpenListFlag();
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersSameCity.length} places to stay in {props.selectedCity}</b>
      <Link to={`/favorites`}>Favorites</Link>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={handleOpenList}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <SortingOptions />
      </form>
      <div className="cities__places-list places__list tabs__content">
        <Articles offersSameCity={offersSameCity} />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  offersSameCity: getFilteredOffers(state),
  selectedCity: state.selectedCity
});

const mapDispatchToProps = (dispatch) => ({
  changeOpenListFlag() {
    dispatch(ActionCreator.changeOpenListFlag());
  }
});

Places.propTypes = {
  offersSameCity: offersPropTypes,
  selectedCity: PropTypes.string,
  changeOpenListFlag: PropTypes.func
};

export {Places};
export default connect(mapStateToProps, mapDispatchToProps)(Places);
