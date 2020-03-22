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
            <>
                <Navigation />

                <Container maxWidth="md" className="kr-impressum">
                    <Typography variant="h2" gutterBottom>Impressum</Typography>
                </Container>

                <Footer />
            </>
        );
    }
}
