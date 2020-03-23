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
      await fetch(`${process.env.REACT_APP_ROOT_URL}/api/businesses/${placeId}`)
        .then(res => res.json())
        .then(data => {
          setStore(data.business)
        })
        .catch((error) => {
          console.log(`something went wrong by calling ${URL}, error: ${error}`);
        });
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

export { Store, useStoreContext }