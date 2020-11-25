import React from "react";
import {getOffersCitiesList} from "../../func";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";

// Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf
const Locations = (props) => {
  const {selectedCity, changeCity} = props;

  const handleChangeCity = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.innerText);
    return;
  };

  const uniqueCities = getOffersCitiesList();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {uniqueCities.map((city, i) => (
          <li key={`city-${i}`} className="locations__item">
            <Link className={`locations__item-link tabs__item ${city === selectedCity && `tabs__item--active`}`} to="#" onClick={(item) => {
              handleChangeCity(item);
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
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

Locations.propTypes = {
  selectedCity: PropTypes.string,
  changeCity: PropTypes.func
};

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
