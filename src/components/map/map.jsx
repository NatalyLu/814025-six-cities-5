import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {offersPropTypes, mapClassesPropTypes} from "../../prop-types";
import leaflet from "leaflet";
// Импорт стилей карты
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offersSameCity: props.offersSameCity,
      city: [props.offersSameCity[0].city.location.latitude, props.offersSameCity[0].city.location.longitude],
      zoom: props.offersSameCity[0].city.location.zoom
    };

    this.mapClasses = props.mapClasses;
    this.addMarkers = this.addMarkers.bind(this);
    this.map = 0;

    // Конфигурация иконки-метки на карте
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  // Функция добавления на карту маркеров
  addMarkers(offersSameCity) {
    // map.removeLayer(layerGroup());
    let markers = [];
    const icon = this.icon;
    offersSameCity.forEach((item) => {
      markers.push(leaflet.marker([item.location.latitude, item.location.longitude], {icon}));
    });
    leaflet.layerGroup(markers).addTo(this.map);
  }


  componentDidMount() {
    // Инициализация карты и установка фокуса на определённый город
    this.map = leaflet.map(`map`, {
      center: this.state.city,
      zoom: this.state.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.state.city, this.state.zoom);

    // Подключаем слой карты (voyager)
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    this.addMarkers(this.state.offersSameCity);
  }


  componentDidUpdate() {
    // this.setState({offersSameCity: this.props.offersSameCity});
    // this.setState({city: [this.props.offersSameCity[0].city.location.latitude, this.props.offersSameCity[0].city.location.longitude]});
    // this.setState({zoom: this.props.offersSameCity[0].city.location.zoom});

    // this.map.setView(this.state.city, this.state.zoom);
    // this.addMarkers(this.state.offersSameCity);
    this.map.setView([this.props.offersSameCity[0].city.location.latitude, this.props.offersSameCity[0].city.location.longitude], this.state.zoom);
    this.addMarkers(this.props.offersSameCity);
  }

  render() {
    return (
      <section id="map" className={`${this.mapClasses} map`}></section>
    );
  }
}

const mapStateToProps = (state) => ({
  offersSameCity: state.offersSameCity,
});

Map.propTypes = {
  offersSameCity: offersPropTypes,
  mapClasses: mapClassesPropTypes
};

export {Map};
export default connect(mapStateToProps)(Map);
