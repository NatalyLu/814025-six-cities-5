import React, {PureComponent} from "react";
import {offersPropTypes, mapClassesPropTypes} from "../../prop-types";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";
// Импорт стилей карты
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.map = 0;
    this.markerGroup = [];

    this.createIcon = this.createMarker.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
  }

  // Конфигурация иконки-метки на карте
  createMarker(url = `img/pin.svg`) {
    return (leaflet.icon({
      iconUrl: url,
      iconSize: [30, 30]
    }));
  }

  // Функция добавления на карту маркеров
  addMarkers(offers) {
    let markers = [];
    let marker = {};

    offers.forEach((item) => {
      if (item.id === this.props.offerId) {
        marker = this.createMarker(this.props.markerUrl);
      } else {
        marker = this.createMarker();
      }
      markers.push(leaflet.marker([item.location.latitude, item.location.longitude], {marker}));
    });
    this.markerGroup = leaflet.layerGroup(markers).addTo(this.map);
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
    this.map.removeLayer(this.markerGroup);
    this.addMarkers(offers);
  }

  render() {
    return (
      <section id="map" className={`${this.props.mapClasses} map`}></section>
    );
  }
}

const mapStateToProps = (state) => ({
  markerUrl: state.mapMarkerUrl,
  offerId: state.mapOfferId
});

Map.propTypes = {
  offers: offersPropTypes,
  mapClasses: mapClassesPropTypes,
  markerUrl: PropTypes.string,
  offerId: PropTypes.number,
};

export {Map};
export default connect(mapStateToProps)(Map);
