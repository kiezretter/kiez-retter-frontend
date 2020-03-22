import React, {useEffect, useState} from 'react';
import './index.scss';
import Routes from './Routes';
import { Store } from "./context/StoreContext";
import { Markers } from "./context/MarkerContext";

import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, Arial',
    // fontSize: 16,
    // htmlFontSize: 10,
  },
  palette: {
    primary: {
      main: 'rgb(30, 80, 145)', // brand-blue
    },
    secondary: {
      main: 'rgb(222, 58, 66)', // brand-red
    },
  },
});

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
    <ThemeProvider theme={theme}>
      {gmapsLoaded && (
        <Markers>
          <Store>
            <Routes />
          </Store>
        </Markers>
      )}
    </ThemeProvider>
  )
}

export default App;
