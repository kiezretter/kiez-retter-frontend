import React, { useEffect, useState } from 'react';
import { 
  useLocation,
  useParams,
} from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation.jsx';
import GoogleApiWrapper from '../../components/Map/Map';
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

  const { setActiveMarker, setCurrentLocation, currentLocation } = useMarkerContext();

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const { businessId } = useParams();

  useEffect(() => {
    setPlaceId(businessId);
    if (store && !currentLocation) {
      getCurrentLocation();
    }
  }, [store, businessId]);

  const getCurrentLocation = () => {
    const lat = query.get('lat');
    const lng = query.get('lng');
    if (lat && lng) {
      setCurrentLocation({lat, lng})
      sessionStorage.setItem('personalLocation', `${lat}|${lng}`);
    } else if (businessId) {
      setShowInfoCard(true);
      setActiveMarker(parseInt(businessId));
      setCurrentLocation({lat: store.address.lat, lng: store.address.lng})
    } else if (personalLocationPresentInStorage()) {
      const [sessionLat, sessionLng] = sessionStorage.getItem('personalLocation').split('|');
      setCurrentLocation({sessionLat, sessionLng});
    } else {
      setCurrentLocation(null);
    }
  }

  const personalLocationPresentInStorage = () => {
    return sessionStorage.getItem('personalLocation') !== null
  }

  return (
    <>
      <Navigation bordered={true} />
      <GoogleApiWrapper
        currentLocation={currentLocation}
      />
      {showInfoCard && (
        <InfoCard />
      )
      }
    </>
  )
}

export default BusinessOverview;
