import React from "react";
import Articles from "../articles/articles";
import {offersPropTypes} from "../../prop-types";
import {connect} from "react-redux";

const Places = (props) => {
  const offersSameCity = props.offersSameCity;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersSameCity.length} places to stay in {offersSameCity[0].city.name}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        <Articles offersSameCity={offersSameCity} />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  offersSameCity: state.offersSameCity
});

Places.propTypes = {
  offersSameCity: offersPropTypes
};

export {Places};
export default connect(mapStateToProps)(Places);


