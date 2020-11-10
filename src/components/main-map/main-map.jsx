import React, {Fragment, PureComponent} from "react";
import leaflet from "leaflet";
// Импорт стилей карты
import "leaflet/dist/leaflet.css";
import {offersPropTypes} from "../../prop-types";

class MainMap extends PureComponent {
  constructor(props) {
    super(props);

    this.offers = this.props.offersSameCity;
    this.offer = this.props.offersSameCity[0];
    this.renderCore = this.renderCore.bind(this);
  }

  // Функция добавления маркеров на карту
  renderCore(item, icon, map) {
    const offerCords = [item.location.latitude, item.location.longitude];
    return (leaflet.marker(offerCords, icon).addTo(map));
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

    // Добавим на карту маркеры
    this.offers.map((offerForMap, i) => (
      <Fragment key={`hotel-map-${i}`}>
        {this.renderCore(offerForMap, {icon}, map)}
      </Fragment>
    ));
  }

  render() {
    return (
      <section id="map" className="cities__map map"></section>
    );
  }
}

MainMap.propTypes = {
  offersSameCity: offersPropTypes
};

export default MainMap;
