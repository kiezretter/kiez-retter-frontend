import React, { useState, useContext } from 'react';

import {
    Input,
    Button,
    Card,
    CardContent,
    CardMedia,
    withStyles,
    InputAdornment,
    Grid,
} from '@material-ui/core';

import { StoreContext } from "../../context/StoreContext";
import { MarkerContext } from "../../context/MarkerContext";

import PrettoSlider from "../DonateSlider/DonateSlider";
import * as IconProvider from './IconProvider';

import './InfoCard.scss';

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
    const store = useContext(StoreContext);
    const business = store.store;
    const markers = useContext(MarkerContext);

    const handleSliderChange = (event, newValue) => {
        console.log('value', newValue);
        setDonatedValue(newValue);
    }

    const handleSliderInputChange = (event) => {
        setDonatedValue(event.target.value);
    }

    const handleSendDonation = async () => {
        const data = {
            business_id: business.business_id,
            amount_cents: donatedValue * 100,
        };

        let response;

        try {
            response = await fetch(`${process.env.REACT_APP_ROOT_URL}/api/donations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            });
    
            if (response.ok) {
                console.log('Danke fürs Spenden!')
            } else {
                console.error(`HTTP-Error: ${response.status}`);
            }
        } catch(e) {
            console.error(`HTTP-Error (2): ${response.status}`);
        }
    }

    const handleClose = () => {
        markers.setActiveMarker(null);
        store.setPlaceId(null);
        store.setShowInfoCard(false);

        if (sessionStorage.getItem('personalLocation')) {
            const [lat, lng] = sessionStorage.getItem('personalLocation').split('|');
            window.history.pushState(null, null, `/kiez?lat=${lat}&lng=${lng}`);
        }
    }

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
        if (!business.verified) return 'Solange dein Lieblingsladen nicht verifiziert ist, kannst du leider nicht für ihn spenden. Schau doch einfach später nochmal vorbei!';

        return (
            <Button
                variant="contained"
                color="primary"
                disableElevation
                href={`https://www.paypal.me/${business.owner.paypal}/${donatedValue}EUR`}
                target="_blank"
                rel="noopener noreferrer"
                className="info__box-button"
                onClick={() => handleSendDonation()}
            >
                <img src={IconProvider.payPalIcon} alt="paypal-icon" className="paypal-icon" />
                Jetzt Retten
            </Button>
        );
    }

    const renderFundingButton = () => {
        // if (!this.props.store.store.funding) return null;

        let text = 'Gutschein kaufen';

        // if (this.props.store.store.funding.funding_type === 'voucher') text = 'Gutschein kaufen';
        // if (this.props.store.store.funding.funding_type === 'crowd_funding') text = 'Zum Crowdfunding';

        // if (!text) return null;

        return (
            <>
                <Button
                    variant="contained"
                    disableElevation
                    // href={this.props.store.store.funding.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info__box-button"
                    // onClick={() => this.handleSendDonation()}
                >
                    {text}
                </Button>
                Mit Klick wirst auf die Seite eines externen Anbieters weitergeleitet.
            </>
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
                title="store"
                className="info__img info__img-store"
            />
        );
    }

    const renderPlaceImage = () => {
        let image = IconProvider.shopPlaceholder;
        
        if (business.favorite_place_image) image = `${business.favorite_place_image}&w=300`;
        if (business.image_references) {
            console.log('business', business)
            image = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${business.image_references[1].google_reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        }

        return (
            <CardMedia
                image={image}
                title={business.name}
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
        return (
            <div className="info__box">
                <div className="info__box-name__wrapper">
                    <div className="info__box-name__wrapper-name">
                        {business.name}
                        {renderVerifiedIcon()}
                    </div>
                    {/* <div className="info__box-name__wrapper-icon">
                        <img
                            src={IconProvider.shareIcon}
                            alt="share"
                            className="info__box-name__wrapper-icon__share"
                        />
                    </div> */}
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
            <div>
                {renderStoreMessage()}
                {renderStoreMessageLink()}
            </div>
        );
    }

        console.log('re-reder triggered ######################', store);
        if (!business || !store.showInfoCard) return renderPlaceholder();

    return (
        <Card className="info__wrapper">
            <div className="info__close-btn" onClick={() => handleClose()}>&times;</div>
            {renderOwnerImage()}
            {renderPlaceImage()}

            <CardContent>
                {renderInfoBox()}
                {renderAddressContainer()}
                {renderStoreMessageSwitcher()}
                {renderSliderIcons()}
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
                <Grid container spacing={2} className="info__box-buttons">
                    <Grid item xs={12} sm={6}>
                        {renderDonateButton()}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {renderFundingButton()}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default InfoCard;