import React, { useRef } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import currentLocationIcon from '../../assets/images/current-location.svg';
import { useMarkersContext } from "../../context/MarkerContext";
import { useStoreContext } from '../../context/StoreContext';


export const Geo = ({ google, currentLocation, infoHeight }) => {
  const mapRef = useRef(null);
  const { markers } = useMarkersContext();
  const { setPlaceId } = useStoreContext();

  return (
    <Map
      ref={mapRef}
      google={google}
      containerStyle={{
        height: '100%',
        width: "100%",
        position: "relative"
      }}
      initialCenter={currentLocation}
      zoom={16}
      >
      <Marker
        title="Da bist du!"
        position={currentLocation}
        icon={currentLocationIcon}
        />
      {markers.map(marker => {
        return (
          <Marker
          key={marker.id}
          position={marker.position}
          title={marker.title}
          onClick={() => setPlaceId(marker.place_id)}
          />
        );
      })}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(Geo);