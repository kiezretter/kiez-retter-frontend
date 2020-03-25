import React from 'react';
import { 
  useLocation,
  useParams,
} from 'react-router-dom';

import Navigation from '../../components/Navigation/Navigation.jsx';
import GoogleApiWrapper from '../../components/Map/Map';
import Info from '../../components/Info/Info';

import { useStoreContext } from "../../context/StoreContext";
import { useMarkersContext } from "../../context/MarkerContext";

const BusinessOverview = () => {
  const {
    setPlaceId,
    setShowInfoCard
  } = useStoreContext();

  const { markers } = useMarkersContext();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  let lat = query.get('lat');
  let lng = query.get('lng');

  const { businessId } = useParams();

  if (businessId) {
    setPlaceId(businessId);
    setShowInfoCard(true);

    if (markers) {
      const storeMarker = markers.find(_ => _.id === +businessId);

      if (storeMarker) {
        lat = storeMarker.lat;
        lng = storeMarker.lng;
      }
    }
  }

  if (!lat || !lng) return null;

  return (
    <>
      <Navigation bordered={true} />
      <GoogleApiWrapper
        currentLocation={{
          lat,
          lng,
        }}
        cardIn={200}
      />
      <Info
        currentLocation={{
          lat,
          lng,
        }}
      />
    </>
  )
}

export default BusinessOverview;
