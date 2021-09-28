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
        coordinates: [-94.24877325780768, 36.461850569595036],
      },
      properties: {
        title: "Post #1",
        type: "Smallmouth Bass",
        weight: "1.68Lbs",
        bait: "Pink Jig",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-94.248723, 36.462695],
      },
      properties: {
        title: "Post #2",
        type: "Long-ear Sunfish",
        weight: "0.02Lbs",
        bait: "Blue Jig",
        
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-94.24694932588447, 36.46117955530073],
      },
      properties: {
        title: "Post #3",
        type: "Smallmouth Bass",
        weight: "1.83Lbs",
        bait: "Pink Jig",
        
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-94.79554075748129, 36.64168707752944],
      },
      properties: {
        title: "Post #4",
        type: "Largemouth Bass",
        weight: "1.21Lbs",
        bait: "Fenness Worm",
        
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-94.24755338144303, 36.46391681169143],
      },
      properties: {
        title: "Post #5",
        type: "Green Sunfish",
        weight: "0.06Lbs",
        bait: "Purple Jig",
        
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-94.79573947240516, 36.6414551931436],
      },
      properties: {
        title: "Post #6",
        type: "Grey Drum",
        weight: "1.84Lbs",
        bait: "Plastic Shad",
        
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-65.98850411961074, 18.429038994596088],
      },
      properties: {
        title: "Post #7",
        type: "Tarpon",
        weight: "34Lbs, 38Lbs",
        bait: "Live shad",
        
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-94.24536084208067,36.45953945522524],
      },
      properties: {
        title: "Post #8",
        type: "Sucker-Fish",
        weight: "1.6Lbs",
        bait: "Pink jig",
        
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
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
  .setLngLat(geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups with description
      .setHTML(
      `<h3>${properties.title}</h3>
      <p>${properties.type}</p>
      <p>${properties.bait}</p>
      <p>${properties.weight}</p>
      `)
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