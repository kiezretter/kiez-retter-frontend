import React, { useRef, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import markerIcon from '../../assets/images/marker.png';
import activeMarkerIcon from '../../assets/images/active_marker.png';
import currentLocationIcon from '../../assets/images/current-location.svg';
import { useMarkersContext } from "../../context/MarkerContext";
import { useStoreContext } from '../../context/StoreContext';
import { useHistory } from 'react-router-dom';


export const Geo = ({ google, currentLocation }) => {
  const history = useHistory();
  const mapRef = useRef(null);
  const { markers, activeMarker, setActiveMarker } = useMarkersContext();
  const { store, setPlaceId, setShowInfoCard } = useStoreContext();

  const onMarkerClick = (id) => {
    const store = markers.find(_ => _.id === id);

    setPlaceId(id);
    setShowInfoCard(true);
    setActiveMarker(id);
    // history.push(`/kiez?lat=${currentLocation.lat}&lng=${currentLocation.lng}&active=${id}`);
    history.push(`/kiez/${id}/${store.name}`);
  }

  const renderOwnMarker = () => {
    return (
      <Marker
        title="Da bist du!"
        position={currentLocation}
        icon={currentLocationIcon}
      />
    );
  }

  return (
    <Map
      ref={mapRef}
      google={google}
      containerStyle={{
        height: "calc(100vh - 83px)",
        width: "100%",
        position: "relative"
      }}
      initialCenter={currentLocation}
      zoom={13}
      disableDefaultUI={true}
    >
      {renderOwnMarker()}
      {markers && markers.map(marker => {
        return (
          <Marker
            key={marker.id}
            position={marker}
            title={marker.name}
            onClick={() => onMarkerClick(marker.id)}
            icon={activeMarker === marker.id ? activeMarkerIcon : markerIcon}
          />
        );
      })}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(Geo);