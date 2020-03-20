import React, { useContext, useState, useEffect } from "react";
import ApiHelper from "../api/FakeApi";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const Store = ({
  children,
}) => {
  const [store, setStore] = useState();
  const [placeId, setPlaceId] = useState();

  useEffect(() => {
    if (placeId)  (async () => setStore(await ApiHelper.loadInformation(placeId)))()
  }, placeId);

  useEffect(() => {
    console.log("store ", store);
  }, store);

  return (
    <Provider value={{
      store,
      setPlaceId,
    }}>
      {children}
    </Provider>
  )
}

const useStoreContext = () => useContext(StoreContext)

export { Store, useStoreContext }