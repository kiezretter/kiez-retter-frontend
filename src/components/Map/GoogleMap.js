import React, { Component, createRef } from 'react'
import markerIcon from '../../assets/images/marker.png';
import activeMarkerIcon from '../../assets/images/active_marker.png';
import currentLocationIcon from '../../assets/images/current-location.svg';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = createRef()
    this.googleMap = null;
    this.markerCluster = null;
    this.marker = [];
    this.state = {
      currentLocation: { lat: 50.9846618, lng: 7.1069379999999995 },
      updated: false,
      markers: []
    }
  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition((position) => {
      //   // const coords = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude)
      //   console.log('CL: GoogleMap -> position.coords', position.coords)
      this.setState({
        currentLocation: {
          lat: +position.coords.latitude,
          lng: +position.coords.longitude
        }
      })
    }, (err) => { console.log('error', err) })

    this.googleMap = this.createGoogleMap();
    this.marker = this.props.markers && this.props.markers.map(marker => {
      const newMarker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(marker.lat, marker.lng),
        icon: this.props.activeMarker === marker.id ? activeMarkerIcon : markerIcon,
        animation: window.google.maps.Animation.DROP,
        clickable: true,
      })
      window.google.maps.event.addListener(newMarker, 'click', () => {
        this.props.onMarkerClick(marker.id, marker.name);
      });
      return newMarker;
    })
    console.log('CL: GoogleMap -> componentDidMount -> this.props.markers', this.props.markers)
    this.setState({
      markers: this.marker
    })
    // this.state.markers[0].addEventListener('click', this.props.onMarkerClick)
  }

  createGoogleMap = () => {
    return new window.google.maps.Map(this.googleMapRef.current, {
      zoom: this.props.zoom,
      center: this.props.initialCenter,
      disableDefaultUI: true,
      zoomControl: this.props.zoomControl,
      idle: this.props.onIdle
    })
  }


  render() {
    // eslint-disable-next-line
    this.markerCluster = new MarkerClusterer(this.googleMap, this.state.markers,
      { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    return (
      <div
        style={this.props.containerStyle}
        id={this.props.id}
        ref={this.googleMapRef}
      // style={{ width: '600px', height: '500px' }}
      >
        {/* {this.props.children} */}
      </div>
    )
  }
}

// class Marker extends Component {
//   constructor(props) {
//     super(props);
//     this.marker = null;
//   }

//   componentDidMount() {
//     this.marker = this.createMarker();
//   }

//   createMarker = () => {
//     const sizeX = 100;
//     const sizeY = 100;
//     var markerIconNew = {
//       url: this.props.icon, // 'http://image.flaticon.com/icons/svg/252/252025.svg',
//       size: new window.google.maps.Size(sizeX, sizeY),
//       origin: new window.google.maps.Point(0, 0),
//       anchor: new window.google.maps.Point(sizeX / 2, sizeY / 2)
//       // scaledSize: new window.google.maps.Size(60, 60),
//       // origin: new window.google.maps.Point(0, 0),
//       // anchor: new window.google.maps.Point(20, 40),
//       // labelOrigin: new window.google.maps.Point(40, 33),
//     }
//     new window.google.maps.Marker({
//       position: this.props.position, // new window.google.maps.LatLng(50.9846618, 7.1069379999999995), // this.state.currentLocation,
//       animation: window.google.maps.Animation.DROP,
//       map: this.props.map,
//       // map: this.googleMap,
//       icon: markerIconNew,
//       label: {
//         text: 'Go!',
//         color: "#eb3a44",
//         fontSize: "160px",
//         fontWeight: "bold"
//       },
//     })
//   }

//   render() {
//     return null;
//   }

// }


export {
  GoogleMap as Map
};