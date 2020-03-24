import React, { useState } from 'react';
import './info.scss';

import { 
  Input,
  Button,
  Card,
  CardContent,
  CardMedia,
  withStyles,
  InputAdornment,
} from '@material-ui/core';

import { useStoreContext } from "../../context/StoreContext";

import verifiedIcon from '../../assets/images/verifiziert.png';
// import shareIcon from '../../assets/images/share.svg';
import PrettoSlider from "../DonateSlider/DonateSlider";
import bar1 from '../../assets/images/bar1.png';
import bar2 from '../../assets/images/bar2.png';
import bar3 from '../../assets/images/bar3.png';
import club1 from '../../assets/images/club1.png';
import club2 from '../../assets/images/club2.png';
import club3 from '../../assets/images/club3.png';
import late_shop1 from '../../assets/images/late_shop1.png';
import late_shop2 from '../../assets/images/late_shop2.png';
import late_shop3 from '../../assets/images/late_shop3.png';
import restaurant1 from '../../assets/images/restaurant1.png';
import restaurant2 from '../../assets/images/restaurant2.png';
import restaurant3 from '../../assets/images/restaurant3.png';
import cafe1 from '../../assets/images/cafe1.png';
import cafe2 from '../../assets/images/cafe2.png';
import cafe3 from '../../assets/images/cafe3.png';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import ownerPlaceholder from '../../assets/images/owner_placeholder.png';
import shopPlaceholder from '../../assets/images/shop_placeholder.png';
import payPalIcon from '../../assets/images/paypal_icon.svg';

const StyledInput = withStyles({
  root: {
    width: '100px',
    padding: "0 15px",
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
  },
  input: {
    textAlign: 'center'
  }
})(Input);

const Info = () => {
  const [showStoreInfo, setShowStoreInfo] = useState(false);
  const [donatedValue, setDonatedValue] = useState(8.5);
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

  const icons = () => {
    switch(store.business_type) {
      case 'bar':
        return [bar1, bar2, bar3];
      case 'club':
        return [club1, club2, club3];
      case 'late_shop':
        return [late_shop1, late_shop2, late_shop3];
      case 'restaurant':
        return [restaurant1, restaurant2, restaurant3];
      case 'cafe':
        return [cafe1, cafe2, cafe3];
      default:
        return [service1, service2, service3];
    }
  }

  let placeholder = (
    <div className="info__prompt">
      Klick eine Location in deinem Kiez an.
    </div>
  );

  const owner_image = () => store.owner.image ? `${store.owner.image}&w=300` : ownerPlaceholder;
  const place_image = () => store.favorite_place_image ? `${store.favorite_place_image}&w=300` : shopPlaceholder;

  const renderDonateButton = () => {
    if (!store.verified) return 'Solange dein Lieblingsladen nicht verifiziert ist, kannst du leider nicht für ihn spenden. Schau doch einfach später nochmal vorbei!';

    return (
      <Button
        variant="contained"
        color="primary"
        disableElevation
        href={`https://www.paypal.me/${store.owner.paypal}/${donatedValue}EUR`}
        target="_blank"
        rel="noopener noreferrer"
        className="info__box-button"
        onClick={() => sendDonation()}
      >
        <img src={payPalIcon} alt="paypal-icon" className="paypal-icon" />
                Jetzt Retten
      </Button>
    );
  };

  const sendDonation = async () => {
    const data = {
      business_id: store.business_id,
      amount_cents: donatedValue * 100,
    }
    let response = await fetch(`${process.env.REACT_APP_ROOT_URL}/api/donations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      console.log('Danke fürs Spenden!')
    } else {
      console.error("HTTP-Error: " + response.status);
    }
  }

  return (
    <>
      {(store && showInfoCard) ? (
        <Card className="info__wrapper">
          <div className="info__close-btn" onClick={() => setShowInfoCard(false)}>&times;</div>
          <CardMedia
            image={store && owner_image()}
            title="store"
            className="info__img info__img-store"
          />
          <CardMedia
            image={store && place_image()}
            title="human"
            className="info__img info__img-human"
          />
          <CardContent>
            <div className="info__box">
              <div className="info__box-name__wrapper">
                <div className="info__box-name__wrapper-name">
                  {store.name}
                  {store.verified && (
                    <img
                      src={verifiedIcon}
                      alt="verified"
                      className="info__verified-icon info__verified-icon--verified"
                    />
                  )}
                </div>
                {/* <div className="info__box-name__wrapper-icon">
                  <img
                    src={shareIcon}
                    alt="share"
                    className="info__box-name__wrapper-icon__share"
                  />
                </div> */}
              </div>
            </div>
            <div className="info__box-address">
              <div>{store.address.street_address}</div>
              <div>
                {store.address.postcode} {store.address.city}
              </div>
            </div>
            {store.message && (
              <div>
                {showStoreInfo && (
                  <div className="info__box-intro">
                    {store.message}
                  </div>
                )}
                <div
                  className="info__box-info-btn"
                  onClick={() => setShowStoreInfo(!showStoreInfo)}
                >
                  {showStoreInfo ? (
                    <div>&#8592; weniger anzeigen</div>
                  ) : (
                    <div>mehr anzeigen &#8594;</div>
                  )}
                </div>
              </div>
            )}
            <div className="info__box-icons">
              <img src={icons()[0]} alt="beer" className="info__box-icon" />
              <img src={icons()[1]} alt="beers" className="info__box-icon" />
              <img src={icons()[2]} alt="party" className="info__box-icon" />
            </div>
            <PrettoSlider
              aria-label="pretto slider"
              aria-labelledby="discrete-slider"
              value={donatedValue}
              onChange={handleSliderChange}
              min={0.00}
              max={20.00}
              step={0.50}
            />
              <div className="info__box-amount">
                <StyledInput
                  type="text"
                  value={donatedValue}
                  onChange={handleSliderInputChange}
                  classes={{ root: "my-class-name" }}
                  endAdornment={<InputAdornment position="end">‎€</InputAdornment>}
                />
              </div>
              {renderDonateButton()}
          </CardContent>
        </Card>
      ) : placeholder }
      {googleDatails && <>Hier kommen die Informationen von Google hin.</>}
      {store && googleDatails && <button>Spenden</button>}
    </>
  );
}

export default Info;
