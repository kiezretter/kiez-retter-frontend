import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import {
    Container,
    Typography,
} from '@material-ui/core';

import './AGB.scss';

export default class AGBView extends React.Component {
    render() {
        return (
            <Container maxWidth="sm" className="kr-agb">
                <Navigation />
                
                <Typography variant="h2" gutterBottom>AGB</Typography>

                <Footer />
            </Container>
        );
    }
}
