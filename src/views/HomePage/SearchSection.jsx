import React from 'react';

import LocationSearchInput from '../../components/LocationSearchInput/LocationSearchInput';

import KiezheroImage from '../../assets/images/kiezhero.png';

import {
    Container,
} from '@material-ui/core';

export default class SearchSection extends React.Component {
    render() {
        return (
            <Container maxWidth="sm" className="kr-homepage--search-container">
                <img src={KiezheroImage} className="kr-homepage--kiezhero" alt="Kiez Hero" />
                <LocationSearchInput onSearchEnd={this.props.onSearchEnd} onSearch={this.props.onSearch} />
            </Container>
        );
    }
}