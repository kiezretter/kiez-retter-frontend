import React, { useContext, useState, useEffect } from "react";

const StoreContext = React.createContext();
const { Provider } = StoreContext;

const titleElement = document.querySelector('title');
const metaTitleElements = [...document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]')];
const setTitles = (title) => {
  titleElement.innerText = title.trim();
  metaTitleElements.forEach(e => e.setAttribute('content', title.trim()));
}

const metaDescriptionElements = [...document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]')];
const setDescriptions = (description) => {
  metaDescriptionElements.forEach(e => e.setAttribute('content', description.trim()));
}

const Store = ({
  children,
}) => {
  const [store, setStore] = useState();
  const [placeId, setPlaceId] = useState();
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [pageData, setPageData] = useState();

  useEffect(() => {
    const loadInformation = async () => {
      if (!placeId) {
        setPageData();
        return;
      }

      const dataUrl = `${process.env.REACT_APP_ROOT_URL}/api/businesses/${placeId}`;

      try {
        const store = await fetch(dataUrl);
        const storeJSON = await store.json();
        setStore(storeJSON.business);
        setPageData(storeJSON.business);
      } catch (error) {
        console.error(`something went wrong by calling ${dataUrl}, error: ${error}`);
      }
    }
    loadInformation();
  }, [placeId]);

  useEffect(() => {
    const changePageData = async () => {
      const mainpageTile = document.querySelector('title').innerText.split('|').pop();

      if (!pageData) {
        setTitles(mainpageTile);
        setDescriptions('Unterstütze deinen Kiez in Zeiten der Corona-Krise');
        return;
      }

      setTitles(`${pageData.name} | ${mainpageTile}`);
      setDescriptions(`${pageData.name} in ${pageData.address.city} braucht unsere Hilfe! Werde jetzt #kiezretter!`);
    }

    changePageData();
  }, [pageData]);

  return (
    <Provider value={{
      store,
      setPlaceId,
      showInfoCard,
      setShowInfoCard,
      pageData,
      setPageData,
    }}>
      {children}
    </Provider>
  )
}

const useStoreContext = () => useContext(StoreContext)

export { Store, StoreContext, useStoreContext }