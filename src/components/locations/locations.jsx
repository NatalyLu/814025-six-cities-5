import React from "react";
import {getArrayOfCities} from "../../func";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../action";
import {offersPropTypes} from "../../prop-types";

// Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf
const Locations = (props) => {
  const {selectedCity, changeCity, changeSameCityOffersList, offers} = props;

  const handleChangeCity = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.innerText);
    changeSameCityOffersList();
    return;
  };

  const uniqueCities = getArrayOfCities(offers);

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
  selectedCity: state.selectedCity,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  changeSameCityOffersList() {
    dispatch(ActionCreator.changeSameCityOffersList());
  }
});

Locations.propTypes = {
  selectedCity: PropTypes.string,
  changeCity: PropTypes.func,
  changeSameCityOffersList: PropTypes.func,
  offers: offersPropTypes
};

export {Locations};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
