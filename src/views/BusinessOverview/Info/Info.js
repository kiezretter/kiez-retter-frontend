import React from 'react';
import './info.scss';
import { useStoreContext } from "../../../context/StoreContext";

const Info = () => {
  const {
    store,
  } = useStoreContext();
  let obj = (
    <>
      Es konnte leider keine Informationen geladen werden.
    </>
  );

  console.log("store ", store);

  if (store) {
    obj = (
      <>
        name: { store.name}
        address: { store.address}
        shopImages: { store.shop_images}
        verified: { store.verified}
        text: { store.text}
        image: { store.profile_image}
      </>
    );
  }

  return (
    <div className="info-window">
      {obj}
      <button>Spenden</button>
    </div>
  )
}

export default Info;
