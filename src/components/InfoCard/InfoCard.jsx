import React, { useState, useContext, useEffect } from 'react';
import EventEmitter from 'events';

import {
    Input,
    Button,
    Card,
    CardContent,
    CardMedia,
    withStyles,
    InputAdornment,
    Icon,
} from '@material-ui/core';

import { StoreContext } from "../../context/StoreContext";
import { MarkerContext } from "../../context/MarkerContext";
import { useCustomStyleContext } from '../../context/CustomStyleContext';
import TrackingApi from '../../api/TrackingApi';
import PrettoSlider from "../DonateSlider/DonateSlider";
import * as IconProvider from './IconProvider';
import ShareSheet from './ShareSheet.jsx';

import './InfoCard.scss';

const EventBus = new EventEmitter();

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

const InfoCard = () => {
    const [donatedValue, setDonatedValue] = useState(8.5);
    const [showInfoStore, setShowInfoStore] = useState(false);
    const [showShareSheet, setShowShareSheet] = useState(false);
    const store = useContext(StoreContext);
    const business = store.store;
    const markers = useContext(MarkerContext);
    const { screenHeight } = useCustomStyleContext();

    const handleSliderChange = (event, newValue) => {
        setDonatedValue(newValue);
    }

    const handleSliderInputChange = (event) => {
        setDonatedValue(event.target.value);
    }

    const handleClose = () => {
        markers.setActiveMarkerId(null);
        store.setPlaceId(null);
        store.setShowInfoCard(false);

        if (sessionStorage.getItem('personalLocation')) {
            const [lat, lng] = sessionStorage.getItem('personalLocation').split('|');
            window.history.pushState(null, null, `/kiez?lat=${lat}&lng=${lng}`);
        }
    }

    const toggleShareSheet = () => {
        EventBus.emit('changeShareSheetState', !showShareSheet);
    }

    useEffect(() => {
        EventBus.on('shareSheetShown', state => setShowShareSheet(state));

        return () => {
            EventBus.removeAllListeners('shareSheetShown');
        }
    }, [])


    const renderPlaceholder = () => {
        return (
            <div className="info__prompt">
                Klick eine Location in deinem Kiez an.
            </div>
        );
    }

    const renderSliderIcons = () => {
        const icons = IconProvider.icons(business.business_type);

        return (
            <div className="info__box-icons">
                <img src={icons[0]} alt="beer" className="info__box-icon" />
                <img src={icons[1]} alt="beers" className="info__box-icon" />
                <img src={icons[2]} alt="party" className="info__box-icon" />
            </div>
        );
    }

    const renderDonateButton = () => {
        if (!business.owner.paypal) return null;
        if (business.funding && !business.verified) return null;
        if (!business.verified) return <p>Solange dein Lieblingsladen nicht verifiziert ist, kannst du leider nicht für ihn spenden. Schau doch einfach später vorbei.</p>

        return (
            <div className="info__button-cta">
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    href={`https://www.paypal.me/${business.owner.paypal}/${donatedValue}EUR`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => TrackingApi.sendDonation(business.business_id, donatedValue * 100)}
                    style={{width: '300px'}}
                >
                    <img src={IconProvider.payPalIcon} alt="paypal-icon" className="paypal-icon" />
                    Jetzt Spenden
                </Button>
            </div>
        );
    }

    const renderFundingButton = () => {
        if (!business.funding) return null;

        const text = () => {
            if (business.funding.funding_type === 'voucher') return 'Gutschein kaufen';
            if (business.funding.funding_type === 'crowd_funding') return 'Zum Crowdfunding';
            return null;
        }

        const action = () => {
            return business.funding.funding_type;
        }

        return (
            <div className="info__button-cta info__button-cta-funding">
                <Button
                    variant="contained"
                    disableElevation
                    href={business.funding.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{width: '300px', backgroundColor: '#00a8cc', color: 'white'}}
                    onClick={() => TrackingApi.sendTracking(business.business_id, action())}
                >
                    {text()}
                </Button>
                <p style={{width: '300px'}}>Mit Klick wirst auf die Seite eines externen Anbieters weitergeleitet.</p>
            </div>
        );
    };

    const renderOwnerImage = () => {
        const image = () => {
            if (business.owner.image) return `${business.owner.image}&w=300`;

            if (business.image_references) {
                return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${business.image_references[0].google_reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
            }
            return IconProvider.ownerPlaceholder;
        }

        return (
            <CardMedia
                image={image()}
                title={`${business.name}-image1`}
                className="info__img info__img-store"
            />
        );
    }

    const renderPlaceImage = () => {
        const image = () => {
            if (business.favorite_place_image) return `${business.favorite_place_image}&w=300`;

            if (business.image_references && business.image_references[1]) {
                return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${business.image_references[1].google_reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
            }
            return IconProvider.shopPlaceholder;
        }

        return (
            <CardMedia
                image={image()}
                title={`${business.name}-image2`}
                className="info__img info__img-human"
            />
        );
    }

    const renderAddressContainer = () => {
        if (!business.address) return null;

        return (
            <div className="info__box-address">
                <div>{business.address.street_address}</div>
                <div>
                    {business.address.postcode} {business.address.city}
                </div>
            </div>
        );
    }

    const renderVerifiedIcon = () => {
        if (!business.verified) return null;
        
        return (
            <img
                src={IconProvider.verifiedIcon}
                alt="verified"
                className="info__verified-icon info__verified-icon--verified"
            />
        );
    }

    const renderInfoBox = () => {
        let shareButton = <img
            src={IconProvider.shareIcon}
            onClick={toggleShareSheet.bind(this)}
            alt="share"
            className="info__box__icon_share"
        />;

        return (
            <div className="info__box">
                <div className="info__box-name__wrapper">
                    <div className="info__box-name__wrapper-name">
                        {business.name}
                        {renderVerifiedIcon()}
                    </div>
                    {shareButton}
                </div>
            </div>
        )
    }

    const renderStoreMessage = () => {
        if (!showInfoStore) return null;

        return (
            <div className="info__box-intro">
                {business.message}
            </div>
        );
    }

    const renderStoreMessageLink = () => {
        let text = 'mehr anzeigen &#8594;';

        if (showInfoStore) text = '&#8592; weniger anzeigen';

        return (
            <button
                className="info__box-info-btn"
                onClick={() => setShowInfoStore(!showInfoStore)}
                dangerouslySetInnerHTML={{ __html: text }}
            ></button>
        );
    }

    const renderStoreMessageSwitcher = () => {
        if (!business.message) return null;

        return (
            <div style={{paddingBottom: '20px'}}>
                {renderStoreMessage()}
                {renderStoreMessageLink()}
            </div>
        );
    }

    const renderSlider = () => {
        if (!business.owner.paypal || !business.verified) return null;
        return (
            <div>
                {renderSliderIcons()}
                    <PrettoSlider
                        style={{color: '#1f5092'}}
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
            </div>
        )
    }

        if (!business || !store.showInfoCard) return renderPlaceholder();

    return (
        <Card className="info__wrapper" style={{overflowY: 'scroll', maxHeight: `calc(${screenHeight}px - 7em)`}}>
            <div className="info__close-btn" onClick={() => handleClose()}><Icon>close</Icon></div>
            {renderOwnerImage()}
            {renderPlaceImage()}

            <CardContent>
                {renderInfoBox()}
                {renderAddressContainer()}
                {renderStoreMessageSwitcher()}
                {renderSlider()}
                <>
                    {renderDonateButton()}
                    {renderFundingButton()}
                </>
                <ShareSheet 
                    eventBus={EventBus} 
                    title={business.name} 
                    text={`${business.name} in ${business.address.city} braucht unsere Hilfe! Werde jetzt #kiezretter!`}
                    hashtag="#kiezretter"
                />
            </CardContent>
        </Card>
    )
}

export default InfoCard;