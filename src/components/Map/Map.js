import React, { useRef } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Map } from './GoogleMap';
// import markerIcon from '../../assets/images/marker.png';
// import activeMarkerIcon from '../../assets/images/active_marker.png';
// import currentLocationIcon from '../../assets/images/current-location.svg';
import { useMarkerContext } from "../../context/MarkerContext";
import { useStoreContext } from '../../context/StoreContext';
import { useCustomStyleContext } from '../../context/CustomStyleContext';
import { useHistory } from 'react-router-dom';


export const Geo = ({ google, currentLocation, onBoundsChange }) => {
  console.log('CL: Geo -> currentLocation', currentLocation)
  const history = useHistory();
  const mapRef = useRef(null);
  const { markers, activeMarker, setActiveMarker } = useMarkerContext();
  const { setPlaceId, setShowInfoCard } = useStoreContext();
  const { screenHeight } = useCustomStyleContext();

  const berlin = {
    lat: 52.50888,
    lng: 13.396647
  }

  const onMarkerClick = (id, name) => {
    const escapedName = name.replace('/', '-')
    history.push(`/kiez/${id}/${escapedName}`);
    setPlaceId(id);
    setShowInfoCard(true);
    setActiveMarker(id);
  }

  return (
    <Map
      id={'map'}
      google={google}
      containerStyle={{
        height: `calc(${screenHeight}px - 7em)`,
        width: "100%",
        position: "relative"
      }}
      initialCenter={currentLocation ? currentLocation : berlin}
      zoom={14}
      disableDefaultUI
      zoomControl={true}
      onIdle={(_, map) => onBoundsChange(map.getBounds().toJSON())}
      onMarkerClick={onMarkerClick}
      markers={markers}
      activeMarker={activeMarker}
    />
  );
};

export default Geo;