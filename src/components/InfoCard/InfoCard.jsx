import React from 'react';

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

import { useHistory } from 'react-router-dom';

import { StoreContext } from "../../context/StoreContext";
import { MarkersContext } from "../../context/MarkerContext";

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

class InfoCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            donatedValue: 8.5,
            showStoreInfo: false,
        };
    }

    handleSliderChange(event, value) {
        this.setState({
            donatedValue: +value,
        })
    }

    handleSliderInputChange(event, value) {
        this.setState({
            donatedValue: +event.target.value,
        })
    }

    async handleSendDonation() {
        const data = {
            business_id: this.props.store.business_id,
            amount_cents: this.state.donatedValue * 100,
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

    handleClose(event) {
        this.props.markers.setActiveMarker(null);
        this.props.store.setPlaceId(null);
        this.props.store.setShowInfoCard(false);

        console.log()

        if (sessionStorage.getItem('personalLocation')) {
            const [lat, lng] = sessionStorage.getItem('personalLocation').split('|');
            window.history.pushState(null, null, `/kiez?lat=${lat}&lng=${lng}`);
        }
    }

    renderPlaceholder() {
        return (
            <div className="info__prompt">
                Klick eine Location in deinem Kiez an.
            </div>
        );
    }

    renderSliderIcons() {
        const icons = IconProvider.icons(this.props.store.business_type);

        return (
            <div className="info__box-icons">
                <img src={icons[0]} alt="beer" className="info__box-icon" />
                <img src={icons[1]} alt="beers" className="info__box-icon" />
                <img src={icons[2]} alt="party" className="info__box-icon" />
            </div>
        );
    }

    renderDonateButton() {
        if (!this.props.store.store.verified) return 'Solange dein Lieblingsladen nicht verifiziert ist, kannst du leider nicht für ihn spenden. Schau doch einfach später nochmal vorbei!';

        return (
            <Button
                variant="contained"
                color="primary"
                disableElevation
                href={`https://www.paypal.me/${this.props.store.store.owner.paypal}/${this.state.donatedValue}EUR`}
                target="_blank"
                rel="noopener noreferrer"
                className="info__box-button"
                onClick={() => this.handleSendDonation()}
            >
                <img src={IconProvider.payPalIcon} alt="paypal-icon" className="paypal-icon" />
                Jetzt Retten
            </Button>
        );
    }

    renderFundingButton() {
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

    renderOwnerImage() {
        let image = IconProvider.ownerPlaceholder;

        if (this.props.store.store.owner.image) image = `${this.props.store.store.owner.image}&w=300`;

        return (
            <CardMedia
                image={image}
                title="store"
                className="info__img info__img-store"
            />
        );
    }

    renderPlaceImage() {
        let image = IconProvider.shopPlaceholder;
        
        if (this.props.store.store.favorite_place_image) image = `${this.props.store.store.favorite_place_image}&w=300`;
        if (this.props.store.store.image_references) {
            image = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${this.props.store.store.image_references[0]}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        }

        return (
            <CardMedia
                image={image}
                title={this.props.store.store.name}
                className="info__img info__img-human"
            />
        );
    }

    renderAddressContainer() {
        if (!this.props.store.store.address) return null;

        return (
            <div className="info__box-address">
                <div>{this.props.store.store.address.street_address}</div>
                <div>
                    {this.props.store.store.address.postcode} {this.props.store.store.address.city}
                </div>
            </div>
        );
    }

    renderVerifiedIcon() {
        if (!this.props.store.store.verified) return null;
        
        return (
            <img
                src={IconProvider.verifiedIcon}
                alt="verified"
                className="info__verified-icon info__verified-icon--verified"
            />
        );
    }

    renderInfoBox() {
        return (
            <div className="info__box">
                <div className="info__box-name__wrapper">
                    <div className="info__box-name__wrapper-name">
                        {this.props.store.store.name}
                        {this.renderVerifiedIcon()}
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

    renderStoreMessage() {
        if (!this.state.showStoreInfo) return null;

        return (
            <div className="info__box-intro">
                {this.props.store.store.message}
            </div>
        );
    }

    renderStoreMessageLink() {
        let text = 'mehr anzeigen &#8594;';

        if (this.state.showStoreInfo) text = '&#8592; weniger anzeigen';

        return (
            <button
                className="info__box-info-btn"
                onClick={() => this.setState(prev => ({ ...prev, showStoreInfo: !prev.showStoreInfo }))}
                dangerouslySetInnerHTML={{ __html: text }}
            ></button>
        );
    }

    renderStoreMessageSwitcher() {
        if (!this.props.store.store.message) return null;

        return (
            <div>
                {this.renderStoreMessage()}
                {this.renderStoreMessageLink()}
            </div>
        );
    }

    render() {
        console.log('re-reder triggered ######################', this.props.store);
        if (!this.props.store.store || !this.props.store.showInfoCard) return this.renderPlaceholder();

        return (
            <Card className="info__wrapper">
                <div className="info__close-btn" onClick={() => this.handleClose()}>&times;</div>
                {this.renderOwnerImage()}
                {this.renderPlaceImage()}

                <CardContent>
                    {this.renderInfoBox()}
                    {this.renderAddressContainer()}
                    {this.renderStoreMessageSwitcher()}
                    {this.renderSliderIcons()}
                    <PrettoSlider
                        aria-label="pretto slider"
                        aria-labelledby="discrete-slider"
                        value={this.state.donatedValue}
                        onChange={this.handleSliderChange.bind(this)}
                        min={0.00}
                        max={20.00}
                        step={0.50}
                    />
                    <div className="info__box-amount">
                        <StyledInput
                            type="text"
                            value={this.state.donatedValue}
                            onChange={this.handleSliderInputChange.bind(this)}
                            classes={{ root: "my-class-name" }}
                            endAdornment={<InputAdornment position="end">‎€</InputAdornment>}
                        />
                    </div>
                    <Grid container spacing={2} className="info__box-buttons">
                        <Grid item xs={12} sm={6}>
                            {this.renderDonateButton()}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {this.renderFundingButton()}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default class Wrapper extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {store => (
                    <MarkersContext.Consumer>
                        {markers => (
                            <InfoCard store={store} markers={markers} />
                        )}
                    </MarkersContext.Consumer>
                )}
            </StoreContext.Consumer>
        )
    }
}