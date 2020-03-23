import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import RegistrationForm from '../../components/Form/RegistrationForm';

import {
    Container,
    Typography,
} from '@material-ui/core';

import './Inhaber.scss';

export default class Inhaber extends React.Component {
    render() {
        return (
            <>
                <Navigation />

                <Container maxWidth="md" className="kr-inhaber">
                    <Typography style={{ wordWrap: "break-word" }} variant="h3" gutterBottom>Registrierung</Typography>
                    <RegistrationForm />
                </Container>
                
                <Footer />
            </>
        );
    }
}
