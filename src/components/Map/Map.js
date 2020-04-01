import React from 'react';
import { Map } from './GoogleMap';
import { useMarkerContext } from "../../context/MarkerContext";
import { useStoreContext } from '../../context/StoreContext';
import { useCustomStyleContext } from '../../context/CustomStyleContext';
import { useHistory } from 'react-router-dom';


export const Geo = ({ google, currentLocation, onBoundsChange }) => {

  const history = useHistory();
  const { markers, activeMarker, setActiveMarker } = useMarkerContext();
  const { setPlaceId, setShowInfoCard } = useStoreContext();
  const { screenHeight } = useCustomStyleContext();

  const berlin = {
    lat: 52.50888,
    lng: 13.396647
  }

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
      google={google}
      containerStyle={{
        height: `calc(${screenHeight}px - 7em)`,
        width: "100%",
        position: "relative"
      }}
      initialCenter={currentLocation ? currentLocation : berlin}
      zoom={12}
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