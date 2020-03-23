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
            <>
                <Navigation />
                    
                <Container maxWidth="md" className="kr-agb">
                    <Typography variant="h2" gutterBottom>AGB</Typography>
                </Container>

                <Footer />
            </>
        );
    }
}
