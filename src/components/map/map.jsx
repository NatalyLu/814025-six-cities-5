import React, {PureComponent} from "react";
import {offersPropTypes, mapClassesPropTypes} from "../../prop-types";
import leaflet from "leaflet";
// Импорт стилей карты
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapClasses = this.props.mapClasses;
    this.offersSameCity = this.props.offersSameCity;
    this.cityLocation = this.offersSameCity[0].city.location;
    this.renderCore = this.renderCore.bind(this);
  }
  // Функция добавления маркеров на карту
  renderCore(item, icon, map) {
    const offerCords = [item.location.latitude, item.location.longitude];
    return (leaflet.marker(offerCords, icon).addTo(map));
  }

  componentDidMount() {
    const city = [this.cityLocation.latitude, this.cityLocation.longitude];
    const zoom = this.cityLocation.zoom;

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

    // Добавим на карту маркеры
    this.offersSameCity.forEach((item) => {
      this.renderCore(item, {icon}, map);
    });
  }

  render() {
    return (
      <section id="map" className={`${this.mapClasses} map`}></section>
    );
  }
}

Map.propTypes = {
  offersSameCity: offersPropTypes,
  mapClasses: mapClassesPropTypes
};

export default Map;
