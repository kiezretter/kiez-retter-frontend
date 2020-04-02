import React, { useState, useEffect } from 'react';
import { Map } from './GoogleMap';
import { useMarkerContext } from "../../context/MarkerContext";
import { useStoreContext } from '../../context/StoreContext';
import { useCustomStyleContext } from '../../context/CustomStyleContext';
import { useHistory } from 'react-router-dom';


export const Geo = ({ currentLocation, onBoundsChange }) => {

  const history = useHistory();
  const { markers, activeMarker, setActiveMarker } = useMarkerContext();
  const { setPlaceId, setShowInfoCard } = useStoreContext();
  const { screenHeight } = useCustomStyleContext();

  const [stateMarkers, setStateMarkers] = useState(markers);
  const [stateCurrentLocation, setStateCurrentLocation] = useState(currentLocation);

  useEffect(() => {
    setStateMarkers(markers);
    setStateCurrentLocation(currentLocation);
  }, [markers, currentLocation]);

  const onMarkerClick = (id, name) => {
    const escapedName = encodeURIComponent(name.replace('/', '-'))
    history.push(`/kiez/${id}/${escapedName}`);
    setPlaceId(id);
    setShowInfoCard(true);
    setActiveMarker(id);
  }

  return (
    <Map
      id={'map'}
      containerStyle={{
        height: `calc(${screenHeight}px - 7em)`,
        width: "100%",
        position: "relative"
      }}
      initialCenter={stateCurrentLocation}
      zoom={14}
      disableDefaultUI
      zoomControl={true}
      onIdle={(map) => onBoundsChange(map.getBounds().toJSON())}
      onMarkerClick={onMarkerClick}
      markers={stateMarkers}
      activeMarker={activeMarker}
    />
  );
};

export default Geo;