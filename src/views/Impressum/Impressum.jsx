import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import {
    Container,
    Typography
} from '@material-ui/core';

import './Impressum.scss';

export default class ImpressumView extends React.Component {
    render() {
        return (
            <Container maxWidth="sm" className="kr-impressum">
                <Navigation />

                <Typography variant="h2" gutterBottom>Impressum</Typography>

                <Footer />
            </Container>
        );
    }
}
