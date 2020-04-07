import React, { useState, useEffect, useContext } from "react";

const MarkerContext = React.createContext();
const { Provider } = MarkerContext;

const Markers = ({
  children,
}) => {
  const [markers, setMarkers] = useState();
  const [activeMarkerId, setActiveMarkerId] = useState();
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    async function loadMarkers() {
      await fetch(`${process.env.REACT_APP_ROOT_URL}/api/businesses`)
        .then(res => res.json())
        .then(data => setMarkers(data.businesses))
        .catch((error) => {
          console.log(`something went wrong by calling ${URL}, error: ${error}`);
        });
    }
    loadMarkers();
  }, []);

  return (
    <Provider value={{ markers, activeMarkerId, setActiveMarkerId, currentLocation, setCurrentLocation }}>
      {children}
    </Provider>
  )
}

const useMarkerContext = () => useContext(MarkerContext);

export { Markers, MarkerContext, useMarkerContext };
