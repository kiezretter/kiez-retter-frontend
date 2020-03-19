import React, {useEffect, useState} from 'react';
import './default.scss';
import Routes from './Routes';

const App = () => {
  const [gmapsLoaded, setGmapsLoaded] = useState(false);

  const initMap = () => {
    setGmapsLoaded(true);
  }

  useEffect(() => {
    const initializeGoogleMapsApi = () => {
      window.initMap = initMap;
      const gmapScriptEl = document.createElement(`script`)
      gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`
      document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
    }
    initializeGoogleMapsApi();
  }, []);
  return (
    <>
      {gmapsLoaded && (
        <Routes />
      )}
    </>
  )
}

export default App;
