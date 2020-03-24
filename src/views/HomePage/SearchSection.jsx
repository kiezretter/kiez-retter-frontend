import React from 'react';

import LocationSearchInput from '../../components/LocationSearchInput/LocationSearchInput';

import KiezheroImage from '../../assets/images/kiezhero.png';
import KiezSkylineImage from '../../assets/images/landingpage_kiez.png';

import {
    Container,
    Typography,
} from '@material-ui/core';

export default class SearchSection extends React.Component {
    render() {
        return (
            <Container maxWidth="sm" className="kr-homepage--search-container">
                <div 
                    className={`kr-homepage--kiez ${!this.props.showKiez && 'kr-homepage--kiez__hidden'}`} 
                    style={({ backgroundImage: `url(${KiezSkylineImage})` })}
                />
                <img src={KiezheroImage} className="kr-homepage--kiezhero" alt="Kiez Hero" />
                <LocationSearchInput onSearchEnd={this.props.onSearchEnd} onSearch={this.props.onSearch} />
                <Typography variant="body2" className="kr-homepage--search-subline">
                    Hilf Läden in deiner Nachbarschaft die Coronnakrise zu überstehen. Wenn du selbst Inhaber:in bist, dann registriere dich und lass dich finden!
                </Typography>
            </Container>
        );
    }
}