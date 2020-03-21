import React from 'react';
import GoogleApiWrapper from '../../components/Map/Map';
import Info from '../../components/Info/Info';
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
        cardIn={200}
      />
      <Info userName='marcuszierke' />
    </>
  )
}

export default BusinessOverview;
