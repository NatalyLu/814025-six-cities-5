import React from "react";
import {getArrayOfCities} from "../../func";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";

// Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf
const Locations = (props) => {
  const {selectedCity, selectCity, getSameCityOffersList, getAllOffersList} = props;

  const handleSelectCity = (evt) => {
    evt.preventDefault();
    const city = selectCity(evt.target.innerText);
    getSameCityOffersList();
    return city;
  };

  const uniqueCities = getArrayOfCities(getAllOffersList());

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {uniqueCities.map((city, i) => (
          <li key={`city-${i}`} className="locations__item">
            <Link className={`locations__item-link tabs__item ${city === selectedCity && `tabs__item--active`}`} to="#" onClick={(item) => {
              handleSelectCity(item);
            }}>
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity
});

const mapDispatchToProps = (dispatch) => ({
  selectCity(city) {
    dispatch(ActionCreator.selectCity(city));
  },
  getSameCityOffersList() {
    dispatch(ActionCreator.getSameCityOffersList());
  },
  getAllOffersList() {
    dispatch(ActionCreator.getAllOffersList());
  }
});

Locations.propTypes = {
  selectedCity: PropTypes.string,
  selectCity: PropTypes.func,
  getSameCityOffersList: PropTypes.func,
  getAllOffersList: PropTypes.func
};

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
