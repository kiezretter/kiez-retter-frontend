import React, { useState } from 'react';
import './info.scss';
import { Input, withStyles } from '@material-ui/core';
import { useStoreContext } from "../../context/StoreContext";
import verifiedIcon from '../../assets/images/correct.svg';
import notVerifiedIcon from '../../assets/images/check.svg';
import shareIcon from '../../assets/images/share.svg';
import PrettoSlider from "../DonateSlider/DonateSlider";
import pub1 from '../../assets/images/pub1.png';
import pub2 from '../../assets/images/pub2.png';
import pub3 from '../../assets/images/pub3.png';

const StyledInput = withStyles({
  root: {
    width: '100px',
    padding: "0 15px",
    color: '#1A73E8',
    fontSize: 24,
    fontWeight: '500',
  },
  input: {
    textAlign: 'center'
  }
})(Input);

const Info = ({ userName }) => {
  const [showStoreInfo, setShowStoreInfo] = useState(false);
  const [donatedValue, setDonatedValue] = useState(10);
  const {
    store,
    googleDatails,
    showInfoCard,
    setShowInfoCard
  } = useStoreContext();

  const handleSliderChange = (event, newValue) => {
    setDonatedValue(newValue);
  }

  const handleSliderInputChange = event => {
    setDonatedValue(event.target.value)
  }

  let placeholder = (
    <div className="info__prompt">
      Klicken sie eine Lokation in ihrem Kiez an.
    </div>
  );

  return (
    <>
      {(store && showInfoCard) ? (
        <div className="info__wrapper">
          <div className="info__close-btn" onClick={() =>setShowInfoCard(false)}>&times;</div>
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
                showStoreInfo ? "info__box-intro" : "info__box-intro hide"
              }
            >
              Beste Laden wo gibt, ohne mich könnt ihr Euch keinen mehr
              reinlöten und auch sonst wird's schwer. ALso lasst nen Taler da,
              ich weiss es zu schäten!
            </div>
            <div
              className="info__box-info-btn"
              onClick={() => setShowStoreInfo(!showStoreInfo)}
            >
              {showStoreInfo ? (
                <span>&#8592; less</span>
              ) : (
                <span>mehr &#8594;</span>
              )}
            </div>
            <div className="info__box-icons">
              <img src={pub1} alt="beer" className="info__box-icon" />
              <img src={pub2} alt="beers" className="info__box-icon" />
              <img src={pub3} alt="party" className="info__box-icon" />
            </div>
            <PrettoSlider
              aria-label="pretto slider"
              defaultValue={10}
              aria-labelledby="discrete-slider"
              value={donatedValue}
              onChange={handleSliderChange}
              min={0}
              max={100}
            />
            <div className="info__box-amount">
              <StyledInput
                type="text"
                placeholder={donatedValue.toString()}
                value={donatedValue}
                onChange={handleSliderInputChange}
                classes={{ root: "my-class-name" }}
              />
              <span>EUR</span>
            </div>
            <a
              href={`https://www.paypal.me/${userName}/${donatedValue}EUR`}
              target="_blank"
              rel="noopener noreferrer"
              className="info__box-button"
            >
              Spenden
            </a>
          </div>
        </div>
      ) : placeholder }
      {googleDatails && <>Hier kommen die Informationen von Google hin.</>}
      {store && googleDatails && <button>Spenden</button>}
    </>
  );
}

export default Info;
