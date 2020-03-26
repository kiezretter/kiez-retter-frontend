import React, { useState, useEffect, useContext } from "react";

const MarktersContext = React.createContext();
const { Provider } = MarktersContext;

const Markers = ({
  children,
}) => {
  const [markers, setMarkers] = useState();
  const [activeMarker, setActiveMarker] = useState();

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
    <Provider value={{ markers, activeMarker, setActiveMarker }}>
      {children}
    </Provider>
  )
}

const useMarkersContext = () => useContext(MarktersContext);

export { Markers, useMarkersContext };
