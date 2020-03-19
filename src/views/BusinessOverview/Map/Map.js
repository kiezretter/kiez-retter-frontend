import React, { useRef } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import currentLocationIcon from '../../../assets/images/current-location.svg';

const markers = [
  {
    id: 1,
    title: 'Hello my darling',
    position: {
      lat: 52.50888,
      lng: 13.396647
    }
  }
]

// Get markers from API

const showInfo = (info) => {
  
}

export const Geo = ({ google, currentLocation }) => {
  const mapRef = useRef(null);
  return (
    <Map 
      ref={mapRef}
		  google={google}
		  containerStyle={{
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}
      initialCenter={currentLocation}
      zoom={16}
	  >
      <Marker 
        title='Da bist du!'
        position={currentLocation}
        icon={currentLocationIcon}
      />
      {markers.map(marker => (
        <Marker
          key={marker.id}
          position={marker.position}
          title={marker.title}
          onClick={() => showInfo(marker.info)}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(Geo);