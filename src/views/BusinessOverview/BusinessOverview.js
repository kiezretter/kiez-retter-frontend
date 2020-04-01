import React, { useEffect, useState } from 'react';
import {
  useLocation,
  useParams,
} from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Geo from '../../components/Map/Map';
import InfoCard from '../../components/InfoCard/InfoCard';

import { useStoreContext } from "../../context/StoreContext";
import { useMarkerContext } from '../../context/MarkerContext';

const BusinessOverview = () => {
  const {
    setPlaceId,
    showInfoCard,
    setShowInfoCard,
    store,
  } = useStoreContext();

  const { setActiveMarker, setCurrentBounds, setCurrentLocation, currentLocation } = useMarkerContext();

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const { businessId } = useParams();

  // eslint-disable-next-line
  const [stateCurrentLocation, setStateCurrentLocation] = useState(currentLocation);


  useEffect(() => {
    const lat = query.get('lat');
    const lng = query.get('lng');
    if (lat && lng) {
      // setCurrentLocation({ lat, lng })
      localStorage.setItem('personalLocation', `${lat}|${lng}`);
    }
    setPlaceId(businessId);
    if (store && !currentLocation) {
      if (businessId) {
        setShowInfoCard(true);
        setActiveMarker(parseInt(businessId));
        setCurrentLocation({ lat: store.address.lat, lng: store.address.lng })
        setStateCurrentLocation(currentLocation);
      } else if (personalLocationPresentInStorage()) {
        const [sessionLat, sessionLng] = localStorage.getItem('personalLocation').split('|');
        setCurrentLocation({ lat: +sessionLat, lng: +sessionLng });
        setStateCurrentLocation(currentLocation);
      } else {
        setCurrentLocation(null);
        setStateCurrentLocation(currentLocation);
      }
    }
  }, [store, businessId, currentLocation, setCurrentLocation, query, setPlaceId, setShowInfoCard, setActiveMarker]);

  const personalLocationPresentInStorage = () => {
    return localStorage.getItem('personalLocation') !== null
  }

  return (
    <>
      <Navigation bordered={true} />
      <Geo
        currentLocation={currentLocation}
        onBoundsChange={(bounds) => { setCurrentBounds(bounds) }}
      />
      {showInfoCard && (
        <InfoCard />
      )
      }
    </>
  )
}

export default BusinessOverview;
