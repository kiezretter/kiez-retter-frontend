import React, { useState, useEffect, useContext } from "react";

const MarkerContext = React.createContext();
const { Provider } = MarkerContext;

const Markers = ({
  children,
}) => {
  const [markers, setMarkers] = useState();
  const [activeMarker, setActiveMarker] = useState();
  const [currentLocation, setCurrentLocation] = useState();

  const loadAllMarkers = async () => {
    await fetch(`${process.env.REACT_APP_ROOT_URL}/api/businesses`)
      .then(res => res.json())
      .then(data => setMarkers(data.businesses))
      .catch((error) => {
        console.log(`something went wrong by calling ${URL}, error: ${error}`);
      });
  }

  useEffect(() => {
    loadAllMarkers();
  }, [])

  return (
    <Provider value={{ markers, activeMarker, setActiveMarker, currentLocation, setCurrentLocation }}>
      {children}
    </Provider>
  )
}

const useMarkerContext = () => useContext(MarkerContext);

export { Markers, MarkerContext, useMarkerContext };
