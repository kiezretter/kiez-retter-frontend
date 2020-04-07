import React, { useState, useEffect } from 'react';
import Map from './GoogleMap';
import { useMarkerContext } from "../../context/MarkerContext";
import { useStoreContext } from '../../context/StoreContext';
import { useCustomStyleContext } from '../../context/CustomStyleContext';
import { useHistory } from 'react-router-dom';


export const Geo = ({ currentLocation }) => {

  const history = useHistory();
  const { activeMarkerId, setActiveMarkerId } = useMarkerContext();
  const { setPlaceId, setShowInfoCard } = useStoreContext();
  const { screenHeight } = useCustomStyleContext();
  const [stateCurrentLocation, setStateCurrentLocation] = useState(currentLocation);

  useEffect(() => {
    setStateCurrentLocation(currentLocation);
    if (!currentLocation) getCurrentLocation();
  }, [currentLocation]);

  const onMarkerClick = (id, name) => {
    const escapedName = encodeURIComponent(name.replace(/\/|%/, '-'));
    history.push(`/kiez/${id}/${escapedName}`);
    setPlaceId(id);
    setShowInfoCard(true);
    setActiveMarkerId(id);
  }

  const getCurrentLocation = () => {
    if (sessionStorage.getItem('personalLocation') !== null) {
      const [sessionLat, sessionLng] = sessionStorage.getItem('personalLocation').split('|');
      setStateCurrentLocation({ lat: +sessionLat, lng: +sessionLng });
      return { lat: +sessionLat, lng: +sessionLng };
    }
  }

  return (
    <Map
      id={'map'}
      containerStyle={{
        height: `calc(${screenHeight}px - 7em)`,
        width: "100%",
        position: "relative"
      }}
      center={ stateCurrentLocation || { lat: 52.50888, lng: 13.396647 } }
      zoom={14}
      maxZoom={17}
      onMarkerClick={onMarkerClick}
      activeMarkerId={activeMarkerId}
    />
  );
};

export default Geo;