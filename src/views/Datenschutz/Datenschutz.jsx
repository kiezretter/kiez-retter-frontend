import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import {
    Container,
    Typography,
} from '@material-ui/core';

import './Datenschutz.scss';

export default class DatenschutzView extends React.Component {
    render() {
        return (
            <Container maxWidth="sm" className="kr-datenschutz">
                <Navigation />

                <Typography variant="h2" gutterBottom>Datenschutz</Typography>

                <Footer />
            </Container>
        );
    }
}
