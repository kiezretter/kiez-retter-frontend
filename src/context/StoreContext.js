import React, { useContext, useState, useEffect } from "react";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const Store = ({
  children,
}) => {
  const [store, setStore] = useState();
  const [googleDetails, setGoogleDetails] = useState();
  const [placeId, setPlaceId] = useState();
  const [showInfoCard, setShowInfoCard] = useState(false);

  useEffect(() => {
    const loadInformation = async () => {
      const dataUrl = `${process.env.REACT_APP_ROOT_URL}/api/businesses/${placeId}`;

      try {
        const store = await fetch(dataUrl);
        const storeJSON = await store.json();
        setStore(storeJSON.business);
      } catch (error) {
        console.error(`something went wrong by calling ${dataUrl}, error: ${error}`);
      }

    }
    if (placeId) loadInformation();
  }, [placeId]);

  return (
    <Provider value={{
      store,
      googleDetails,
      setPlaceId,
      showInfoCard,
      setShowInfoCard
    }}>
      {children}
    </Provider>
  )
}

const useStoreContext = () => useContext(StoreContext)

export { Store, StoreContext, useStoreContext }