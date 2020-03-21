import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import {
    Container,
    Typography,
} from '@material-ui/core';

import './UeberUns.scss';

export default class UeberUnsView extends React.Component {
    render() {
        return (
            <Container maxWidth="sm" className="kr-ueberuns">
                <Navigation />

                <Typography variant="h2" gutterBottom>Über uns</Typography>

                <Footer />
            </Container>
        );
    }
}
