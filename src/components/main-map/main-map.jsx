import React, {PureComponent} from "react";
import leaflet from "leaflet";
// Импорт стилей карты
import "leaflet/dist/leaflet.css";
import {offersFullPropTypes} from "../../prop-types";

class MainMap extends PureComponent {
  constructor(props) {
    super(props);

    // this.offers = this.props.offers;
    this.offer = this.props.offersSameCity[0];
  }

  componentDidMount() {
    const city = [this.offer.city.location.latitude, this.offer.city.location.longitude];
    const zoom = this.offer.city.location.zoom;

    // Конфигурация иконки-метки на карте
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    // Инициализация карты и установка фокуса на определённый город
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    // Подключаем слой карты (voyager)
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    // Добавим на карту один маркер
    const offerCords = [this.offer.location.latitude, this.offer.location.longitude];
    leaflet
    .marker(offerCords, {icon})
    .addTo(map);
  }


  render() {

    return (
      <section id="map" className="cities__map map"></section>
    );
  }
}


MainMap.propTypes = {
  offersSameCity: offersFullPropTypes
};

export default MainMap;
