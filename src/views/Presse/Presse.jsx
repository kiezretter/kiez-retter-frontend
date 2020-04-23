import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import {
    Container,
    Typography
} from '@material-ui/core';

import Logo from '../../assets/images/logo_transparent.png';
import Kiezheld from '../../assets/images/kiezhero.png';

import './Presse.scss';

export default class ImpressumView extends React.Component {
    render() {
        return (
            <>
                <Navigation />

                <Container maxWidth="md" className="kr-presse">
                    <Typography variant="h2" gutterBottom>Presse</Typography>

                    <Typography variant="h4" component="h3" gutterBottom>Pressekontakt</Typography>
                    <Typography>
                        kiezretter Verein<br />
                        Am Berlin Museum 8<br />
                        10969 Berlin
                    </Typography>

                    <Typography>
                        <strong>E-Mail-Adresse:</strong> info(at)kiez-retter.de
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
                    
                    <Typography variant="h4" component="h3" gutterBottom>Logo & Grafiken</Typography>    
                    <Typography>Die Grafiken sind höher aufgelöst als hier dargstellt.</Typography>
                    <img src={Logo} alt="Kiezretter Logo" className="kr-presse--graphic" />
                    <br />
                    <img src={Kiezheld} alt="Kiezretter Held" className="kr-presse--graphic" />
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom>Imagevideo</Typography>
                    <iframe title="Kiezretter Imagevideo" width="560" height="315" src="https://www.youtube-nocookie.com/embed/iKf3CvqDbDQ" frameBorder="0" allow="picture-in-picture" allowFullScreen></iframe>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom>#kiezretter in der Presse</Typography>
                    <Typography variant="h5" component="h4" gutterBottom>FAZ</Typography>
                    <Typography>
                        08.02.2020:&nbsp;
                        <a href="https://www.faz.net/aktuell/gesellschaft/menschen/corona-hilfe-wird-es-die-eckkneipe-nach-der-krise-noch-geben-16716077.html" target="_blank" rel="noopener noreferrer">
                            "Jetzt kommen die Kiezretter"
                        </a>
                    </Typography>
                    <br /><br />

                    <Typography variant="h5" component="h4" gutterBottom>Stern</Typography>
                    <Typography>
                        02.04.2020:&nbsp;
                        <a href="https://www.stern.de/wirtschaft/coronavirus--projekt--kiezretter--will-unternehmen-in-not-helfen-9204488.html" target="_blank" rel="noopener noreferrer">
                            "Schnell und einfach spenden: Das Projekt "Kiezretter" will Unternehmen in Not helfen"
                        </a>
                    </Typography>
                    <br /><br />

                    <Typography variant="h5" component="h4" gutterBottom>Tagesspiegel</Typography>
                    <Typography>
                        01.04.2020:&nbsp;
                        <a href="https://www.tagesspiegel.de/berlin/freiwilligendienste-in-der-coronakrise-so-koennen-berliner-helfen-oder-hilfe-erhalten/25681938.html" target="_blank" rel="noopener noreferrer">
                            So können Berliner helfen oder Hilfe erhalten
                        </a>
                    </Typography>
                    <br /><br />

                    <Typography variant="h5" component="h4" gutterBottom>D3 so geht digital</Typography>
                    <iframe title="D3 über Kiezretter" width="560" height="315" src="https://www.youtube-nocookie.com/embed/VgeNb_fDbNw" frameBorder="0" allow="apicture-in-picture" allowFullScreen></iframe>
                </Container>

                <Footer />
            </>
        );
    }
}
