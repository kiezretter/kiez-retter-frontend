import React from 'react';
import './info.scss';
import { useStoreContext } from "../../../context/StoreContext";

const Info = () => {
  const {
    store,
    googleDatails,
  } = useStoreContext();

  let placeholder = (
    <>
      Klicken sie eine Lokation in ihrem Kiez an.
    </>
  );

  return (
    <div className="info-window">
      {!store && !googleDatails && placeholder}
      {store && (
        <>
          name: { store.name}
          address: { store.address}
          shopImages: { store.shop_images}
          verified: { store.verified}
          text: { store.text}
          image: { store.profile_image}
        </>
      )}
      {googleDatails && (
        <>
          Hier kommen die Informationen von Google hin.
        </>
      )}
      {store && googleDatails && <button>Spenden</button>}
    </div>
  )
}

export default Info;
