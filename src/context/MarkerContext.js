import React, { useState, useEffect, useContext } from "react";

const MarkerContext = React.createContext();
const { Provider } = MarkerContext;

const Markers = ({
  children,
}) => {
  const [markers, setMarkers] = useState();
  const [activeMarker, setActiveMarker] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const [currentBounds, setCurrentBounds] = useState();

  useEffect(() => {
    async function loadMarkers() {
      let params = ''
      if (currentBounds) {
        params = `?north=${currentBounds.north}&east=${currentBounds.east}&south=${currentBounds.south}&west=${currentBounds.west}`

        await fetch(`${process.env.REACT_APP_ROOT_URL}/api/businesses${params}`)
          .then(res => res.json())
          .then(data => setMarkers(data.businesses))
          .catch((error) => {
            console.log(`something went wrong by calling ${URL}, error: ${error}`);
          });
      }
    }
    loadMarkers();
  }, [currentBounds])

  return (
    <Provider value={{ markers, activeMarker, setActiveMarker, setCurrentBounds, currentLocation, setCurrentLocation }}>
      {children}
    </Provider>
  )
}

const useMarkerContext = () => useContext(MarkerContext);

export { Markers, MarkerContext, useMarkerContext };
