import React, { Component, createRef } from 'react'
import markerIcon from '../../assets/images/marker.png';
import activeMarkerIcon from '../../assets/images/active_marker.png';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = createRef()
    this.googleMap = null;
    this.markerCluster = null;
    this.marker = [];
    this.state = {
      dataLoaded: false,
      stateCurrentLocation: null,
      markers: [],
    }
    this.updateTimer = null;
  }

  componentDidMount() {
    this.getCurrentLocation();
    this.googleMap = this.createGoogleMap();
    this.marker = this.createMarker();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.markers !== this.props.markers) {
      this.setState({ dataLoaded: !!this.props.markers })
      this.marker = this.createMarker();
    }
    if (prevProps.initialCenter !== this.props.initialCenter) {
      this.setState({ dataLoaded: !!this.props.initialCenter })
      this.googleMap = this.createGoogleMap();
    }
  }

  createGoogleMap = () => {

    const map = new window.google.maps.Map(this.googleMapRef.current, {
      zoom: this.props.zoom,
      center: this.props.initialCenter || this.getCurrentLocation() || { lat: 52.50888, lng: 13.396647 },
      disableDefaultUI: true,
      zoomControl: this.props.zoomControl,
    })
    map.addListener('idle', () => {
      this.props.onIdle(map)
    })
    return map;
  }

  createMarker = () => {
    return this.props.markers && this.props.markers.map(marker => {
      const newMarker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(marker.lat, marker.lng),
        icon: this.props.activeMarker === marker.id ? activeMarkerIcon : markerIcon,
        // animation: window.google.maps.Animation.BOUNCE,
        clickable: true,
      })
      window.google.maps.event.addListener(newMarker, 'click', () => {
        this.props.onMarkerClick(marker.id, marker.name);
      });
      return newMarker;
    })
  }

  getCurrentLocation() {
    if (localStorage.getItem('personalLocation') !== null) {
      const [sessionLat, sessionLng] = localStorage.getItem('personalLocation').split('|');
      this.setState({ stateCurrentLocation: { lat: +sessionLat, lng: +sessionLng } })
      return { lat: +sessionLat, lng: +sessionLng };
    }
  }

  render() {
    // eslint-disable-next-line
    this.markerCluster = new MarkerClusterer(this.googleMap, this.marker,
      { imagePath: '/marker-cluster-img/m' });
    return (
      <div
        style={this.props.containerStyle}
        id={this.props.id}
        ref={this.googleMapRef}
      ></div>
    )
  }
}



export {
  GoogleMap as Map
};