/*global MarkerClusterer google*/

import React, { useRef, useState, useEffect } from 'react';
import markerIcon from '../../assets/images/marker.png';
import activeMarkerIcon from '../../assets/images/active_marker.png';
import { useMarkerContext } from "../../context/MarkerContext";

const Map = ({center, zoom, maxZoom, activeMarkerId, onMarkerClick, containerStyle, id}) => {
  const googleMapRef = useRef();
  const cluster = useRef();
  const previousActiveMarkerId = useRef();
  const { markers } = useMarkerContext();
  const [currentMarkers, setCurrentMarkers] = useState(null);
  const [map, setMap] = useState(null);

  const mapStyles = [
    {
      "featureType": "poi.business",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "poi.medical",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "poi.school",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "poi.sports_complex",
      "stylers": [{ "visibility": "off" }]
    }
  ];

  useEffect(() => {
    setCurrentMarkers(createMarkers());
  }, [markers])

  useEffect(() => {
    updateMarkers(previousActiveMarkerId.current);
  }, [activeMarkerId])

  useEffect(() => {
    if (cluster.current) {
      resetCluster();
    }
  }, [currentMarkers, map])

  useEffect(() => {
    const createGoogleMap = () => {
      const map = new window.google.maps.Map(googleMapRef.current, {
        zoom: zoom,
        maxZoom: maxZoom,
        center: center,
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        }
      });
      return map;
    }
    setMap(createGoogleMap());
    createCluster();
  }, [center, zoom]);

  const createMarkers = () => {
    return markers && markers.map(marker => {
      const newMarker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(marker.lat, marker.lng),
        icon: {
          url: activeMarkerId === marker.id ? activeMarkerIcon : markerIcon,
          labelOrigin: { x: 14, y: - 6 },
        },
        id: marker.id,
        clickable: true,
        label: {
          text: marker.name,
          color: activeMarkerId === marker.id ? '#de3a42' : '#4a7fb9',
          fontWeight: '700',
        },
      })
      window.google.maps.event.addListener(newMarker, 'click', () => {
        onMarkerClick(marker.id, marker.name);
      });
      return newMarker;
    })
  }

  const updateMarkers = (prevMarkerId) => {
    if (currentMarkers && prevMarkerId) changeMarkerAppearance(prevMarkerId, '#4a7fb9', markerIcon);
    if (!activeMarkerId) return;
    if (currentMarkers) changeMarkerAppearance(activeMarkerId, '#de3a42', activeMarkerIcon);
    previousActiveMarkerId.current = activeMarkerId;
  }

  const changeMarkerAppearance = (markerId, color, iconImage) => {
    const marker = currentMarkers.find(el => el.id === markerId);
    const icon = marker.getIcon()
    const label = marker.getLabel();
    icon.url = iconImage;
    label.color = color;
    marker.setIcon(icon);
    marker.setLabel(label);
  }

  const createCluster = () => {
    cluster.current = new MarkerClusterer(
      map,
      currentMarkers,
      { imagePath: '/marker-cluster-img/m', maxZoom: 16 }
    );
  }

  const resetCluster = () => {
    cluster.current.clearMarkers();
    createCluster();
  }

  return (
    <div
      style={containerStyle}
      id={id}
      ref={googleMapRef}
    />
  );
}

export default Map;