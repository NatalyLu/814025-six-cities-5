import React, {PureComponent} from "react";
import {offersPropTypes, mapClassesPropTypes} from "../../prop-types";
import leaflet from "leaflet";
// Импорт стилей карты
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.addMarkers = this.addMarkers.bind(this);
    this.map = 0;
    this.markGroup = [];

    // Конфигурация иконки-метки на карте
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  // Функция добавления на карту маркеров
  addMarkers(offers) {
    let markers = [];
    const icon = this.icon;
    offers.forEach((item) => {
      markers.push(leaflet.marker([item.location.latitude, item.location.longitude], {icon}));
    });
    this.markGroup = leaflet.layerGroup(markers).addTo(this.map);
  }


  componentDidMount() {
    const {offers = []} = this.props;
    const [{city: {location}}] = offers;
    const zoom = location.zoom;

    // Инициализация карты и установка фокуса на определённый город
    this.map = leaflet.map(`map`, {
      center: [location.latitude, location.longitude],
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView([location.latitude, location.longitude], location.zoom);

    // Подключаем слой карты (voyager)
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    this.addMarkers(offers);
  }


  componentDidUpdate() {
    const {offers = []} = this.props;
    const [{city: {location}}] = offers;

    this.map.setView([location.latitude, location.longitude], location.zoom);
    this.map.removeLayer(this.markGroup);
    this.addMarkers(offers);
  }

  render() {
    return (
      <section id="map" className={`${this.props.mapClasses} map`}></section>
    );
  }
}

Map.propTypes = {
  offers: offersPropTypes,
  mapClasses: mapClassesPropTypes
};

export default Map;
