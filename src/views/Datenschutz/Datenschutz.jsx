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
            <>
                <Navigation />

                <Container maxWidth="md" className="kr-datenschutz">
                    <Typography variant="h2" gutterBottom>Datenschutz</Typography>
                </Container>

                <Footer />
            </>
        );
    }
}
