import React, { useState, useEffect, useContext } from "react";

import ApiHelper from "../api/BackendApi";

const MarktersContext = React.createContext();
const { Provider } = MarktersContext;

const Markers = ({
  children,
}) => {
  const [markers, setMarkers] = useState();

  useEffect(() => {
    (async () => setMarkers(await ApiHelper.loadAllMarker()))();
  }, [])

  useEffect(() => {
    console.log("markers ", markers);
  }, [markers])

  return (
    <Provider value={{
      markers
    }}>
      {children}
    </Provider>
  )
}

const useMarkersContext = () => useContext(MarktersContext);

export { Markers, useMarkersContext };
