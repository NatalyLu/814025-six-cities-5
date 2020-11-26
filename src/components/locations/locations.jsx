import React from "react";
import {getOffersCitiesList} from "../../selectors/offers/cities-list-selector";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";

const Locations = (props) => {
  const {selectedCity, changeCity} = props;

  const handleChangeCity = (currentCity) => {
    changeCity(currentCity);
    return;
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {props.uniqueCities.map((city, i) => (
          <li key={`city-${i}`} className="locations__item">
            <a className={`locations__item-link tabs__item ${city === selectedCity && `tabs__item--active`}`} href="#" onClick={(evt) => {
              evt.preventDefault();
              handleChangeCity(city);
            }}>
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  uniqueCities: getOffersCitiesList()
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

Locations.propTypes = {
  selectedCity: PropTypes.string,
  changeCity: PropTypes.func,
  uniqueCities: PropTypes.arrayOf(PropTypes.string)
};

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
