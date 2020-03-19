import React, { useRef } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export const Geo = ({ google }) => {
  const mapRef = useRef(null);
  return (
    <Map 
      ref={mapRef}
		  google={google}
		  containerStyle={{
        height: '40vh',
        width: '100%',
        position: 'relative',
      }}
      center={{
          lat: 40.854885,
          lng: -88.081807
      }}
      zoom={15}
	  />
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries: [],
})(Geo);