import React from 'react';
import GoogleApiWrapper from './Map/Map';
import Info from './Info/Info';
import { useLocation } from 'react-router-dom';


const BusinessOverview = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const lat = query.get('lat');
  const lng = query.get('lng');
  return (
    <>
      <GoogleApiWrapper
        currentLocation={{
          lat,
          lng,
        }}
      />
      <Info />
    </>
  )
}

export default BusinessOverview;
