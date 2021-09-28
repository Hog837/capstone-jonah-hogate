import React from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.scss";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zdW5zaGluZTEwIiwiYSI6ImNrdG5pcDBhMTAzYnEyb3J1czhjaDkweGkifQ.s5pz1UjmELiAJUsEPMQyNQ";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 38.913],
      },
      properties: {
        title: "Mapbox",
        description: "Post #1.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.414, 37.776],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
  ],
};

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: -94.2151,
      lat: 36.3982,
      zoom: 9,
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    // add markers to map
    for (const { geometry, properties } of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = "map__marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${properties.title}</h3><p>${properties.description}</p>`
            )
        )
        .addTo(map);
    }
  }

  render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div className="map">
        <div className="map__sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={this.mapContainer} className="map__container" />
      </div>
    );
  }
}
export default Map;
