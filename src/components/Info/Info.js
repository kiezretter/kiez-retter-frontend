import React, { useState } from 'react';
import './info.scss';
import { useStoreContext } from "../../context/StoreContext";
import verifiedIcon from '../../assets/images/correct.svg';
import notVerifiedIcon from '../../assets/images/check.svg';
import shareIcon from '../../assets/images/share.svg';

const Info = () => {
  const [showInfo, setShowInfo] = useState(false);
  const {
    store,
    googleDatails,
  } = useStoreContext();

  let placeholder = (
    <div className="info__prompt">
      Klicken sie eine Lokation in ihrem Kiez an.
    </div>
  );

  return (
    <>
      {!store && !googleDatails && placeholder}
      {store && (
        <div className="row">
          <div className="info__wrapper">
            <div className="info__img">
              <img
                src="https://images.unsplash.com/photo-1582317361770-c0b3040d8d0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60"
                alt="store"
                className="info__img-store"
              />
              <img
                src="https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60"
                alt="human"
                className="info__img-human"
              />
            </div>
            <div className="info__box">
              <div className="info__box-name__wrapper">
                <div className="info__box-name__wrapper-name">{store.name}</div>
                <div className="info__box-name__wrapper-icon">
                  <img
                    src={shareIcon}
                    alt="share"
                    className="info__box-name__wrapper-icon__share"
                  />
                  <img
                    src={store.verified ? verifiedIcon : notVerifiedIcon}
                    alt="verified"
                  />
                </div>
              </div>
              <div className="info__box-address">{store.address}</div>
              <div
                className={
                  showInfo ? "info__box-intro" : "info__box-intro hide"
                }
              >
                Beste Laden wo gibt, ohne mich könnt ihr Euch keinen mehr
                reinlöten und auch sonst wird's schwer. ALso lasst nen Taler da,
                ich weiss es zu schäten!
              </div>
              <div
                className="info__box-info-btn"
                onClick={() => setShowInfo(!showInfo)}
              >
                {showInfo ? (
                  <span>&#8592; less</span>
                ) : (
                  <span>mehr &#8594;</span>
                )}
              </div>
              <button className="info__box-button">Spenden</button>
            </div>
          </div>
        </div>
      )}
      {googleDatails && <>Hier kommen die Informationen von Google hin.</>}
      {store && googleDatails && <button>Spenden</button>}
    </>
  );
}

export default Info;
