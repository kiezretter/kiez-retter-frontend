import React, { useContext, useState, useEffect } from "react";
import ApiHelper from "../api/BackendApi";
import GoogleApi from "../api/GoogleApi";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const Store = ({
  children,
}) => {
  const [store, setStore] = useState();
  const [googleDatails, setGoogleDetails] = useState();
  const [placeId, setPlaceId] = useState();

  useEffect(() => {
    console.log("placeId ", placeId);
    const loadAllInformation = async () => {
      const backendPromise = ApiHelper.loadInformation(placeId);
      // TODO: use Promise handling with google api
      // const googlePromise = GoogleApi.loadDetails(placeId);
      const [backend] = await Promise.all([backendPromise]);
      setStore(backend);
      // setGoogleDetails(google);
    };
    if (placeId) loadAllInformation();
  }, placeId);

  useEffect(() => {
    console.log("store ", store);
    console.log("googleDatails ", googleDatails);
  }, [store, googleDatails]);

  return (
    <Provider value={{
      store,
      googleDatails,
      setPlaceId,
    }}>
      {children}
    </Provider>
  )
}

const useStoreContext = () => useContext(StoreContext)

export { Store, useStoreContext }