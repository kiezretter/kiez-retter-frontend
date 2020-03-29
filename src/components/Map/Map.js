import React, { useRef } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import markerIcon from '../../assets/images/marker.png';
import activeMarkerIcon from '../../assets/images/active_marker.png';
import currentLocationIcon from '../../assets/images/current-location.svg';
import { useMarkerContext } from "../../context/MarkerContext";
import { useStoreContext } from '../../context/StoreContext';
import { useHistory } from 'react-router-dom';


export const Geo = ({ google, currentLocation, onBoundsChange }) => {
  const history = useHistory();
  const mapRef = useRef(null);
  const { markers, activeMarker, setActiveMarker } = useMarkerContext();
  const { setPlaceId, setShowInfoCard } = useStoreContext();
  const berlin = {
    lat: 52.50888,
    lng: 13.396647
  }

  const onMarkerClick = (id, name) => {
    history.push(`/kiez/${id}/${name}`);
    setPlaceId(id);
    setShowInfoCard(true);
    setActiveMarker(id);
  }

  const renderOwnMarker = () => {
    if (currentLocation) {
      return (
        <Marker
          title="Da bist du!"
          position={currentLocation}
          icon={currentLocationIcon}
        />
      );
    }
    return null;
  }

  return (
    <Map
      ref={mapRef}
      google={google}
      containerStyle={{
        height: "calc(100vh - 70px)",
        width: "100%",
        position: "relative"
      }}
      initialCenter={currentLocation ? currentLocation : berlin}
      zoom={13}
      disableDefaultUI={true}
      onIdle={(_, map) => onBoundsChange(map.getBounds().toJSON())}
    >
      {renderOwnMarker()}
      {markers && markers.map(marker => {
        return (
          <Marker
            key={marker.id}
            position={marker}
            title={marker.name}
            onClick={() => onMarkerClick(marker.id, marker.name)}
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
