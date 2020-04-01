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

                    <Typography variant="h4" component="h3" gutterBottom>Diensteanbieter</Typography>
                    <Typography>
                        kiezretter Verein<br />
                        Am Berlin Museum 8<br />
                        10969 Berlin
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom>Kontaktmöglichkeiten</Typography>
                    <Typography>
                        <strong>E-Mail-Adresse:</strong> info(at)kiez-retter.de<br />
                        <strong>Kontaktformular:</strong> info(at)kiez-retter.de
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom>Vertretungsberechtigte</Typography>
                    <Typography>
                        <strong>Vertretungsberechtigt:</strong> Celal Basar, Franziska Bodenseeler, Pauline Cremer, Ana Alipass Fernandez, Celina Gunkelmann, Thomas Heer, Martin Honermeyer, Caspar Ibel, Annette Jann, Julian Kern, Lucas Lamby, Annika Kersten, Richard Maier, Adrian Ochs, Alexandra Scholz, Marcus Zierke, Robin Zuschke
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom>Social Media und andere Onlinepräsenzen</Typography>
                    <Typography>
                        <strong>Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile:</strong><br />
                        <a href="https://www.facebook.com/Kiezretter-100330361618119/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/Kiezretter-100330361618119</a>/<br />
                        <a href="https://twitter.com/kiezretter" target="_blank" rel="noopener noreferrer">https://twitter.com/kiezretter</a><br />
                        <a href="https://www.instagram.com/kiezretter/?igshid=1v8lcnwcdea3n" target="_blank" rel="noopener noreferrer">https://www.instagram.com/kiezretter/?igshid=1v8lcnwcdea3n</a>
                    </Typography>
                    <br /><br />
                    
                    <Typography variant="h4" component="h3" gutterBottom>Bildnachweise</Typography>
                    <Typography>    
                        <strong>Bildquellen und Urheberrechtshinweise:</strong><br />
                        kiezretter Verein
                    </Typography>
                </Container>

                <Footer />
            </>
        );
    }
}
