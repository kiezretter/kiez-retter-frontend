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
      markers: [],
    }
  }

  componentDidMount() {


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

    this.setState({
      markers: this.marker
    })
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