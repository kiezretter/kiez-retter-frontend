import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import AdrianImage from '../../assets/images/people/Adrian_Ochs.png';
import AlexandraImage from '../../assets/images/people/Alexandra_Scholz.png';
import AnaImage from '../../assets/images/people/Ana_Alipass_Fernandez.png';
import AnnetteImage from '../../assets/images/people/Annette_Jann.png';
import AnnikaImage from '../../assets/images/people/Annika_Kersten.png';
import CasparImage from '../../assets/images/people/Caspar_Ibel.png';
import CelalImage from '../../assets/images/people/Celal_Basar.png';
import CelinaImage from '../../assets/images/people/Celina_Gunkelmann.png';
import FranziImage from '../../assets/images/people/Franzi_Haeussner.png';
import JulianImage from '../../assets/images/people/Julian_Kern.png';
import LucasImage from '../../assets/images/people/Lucas_Lamby.png';
import MarcusImage from '../../assets/images/people/Marcus_Zierke.png';
import MartinImage from '../../assets/images/people/Martin_Honermeyer.png';
import PaulineImage from '../../assets/images/people/Pauline_Cremer.png';
import RichardImage from '../../assets/images/people/Richard_Maier.png';
import RobinImage from '../../assets/images/people/Robin_Zuschke.png';
import ThomasImage from '../../assets/images/people/Thomas_Heer.png';

import {
    Container,
    Typography
} from '@material-ui/core';

import './UeberUns.scss';

export default class ImpressumView extends React.Component {
    render() {
        return (
            <>
                <Navigation />

                <Container maxWidth="md" className="kr-aboutus">
                    <Typography variant="h2" gutterBottom>Über uns</Typography>
                    <Typography gutterBottom>
                        Wir – das sind 20 motivierte, kreative und ziemlich gut gelaunte, kluge Köpfe zwischen 21 und 48 Jahren. Vor ein paar Tagen waren wir alle noch Fremde, doch  der #WirvsVirus Hackathon der Bundesregierung hat uns als Team zusammengebracht. Wir sind überall in Deutschland verteilt – von Münster bis nach Frankfurt, von Bergisch Gladbach bis nach Heidelberg und vom Bodensee über München bis ins Herzen von Berlin.
                        <br />
                        <br />
                        Genauso vielfältig sind auch unsere Kompetenzen und fachlichen Hintergründe; von Front- bis Backend Entwicklern, über Designer, Projektmanager, Kommunikationsexperten hin zu Strategen sind wir genauso bunt gemischt wie unsere Kieze. Aber eins hat uns alle in den letzten Tagen verbunden und wird es auch darüber hinaus tun - die Motivation, etwas Gutes zu tun und anderen durch die Corona-Krise zu helfen!
                    </Typography>

                    <br />
                    <Typography variant="h4" component="h3" gutterBottom>Operations Team</Typography>
                    <div className="kr-aboutus--team">
                        <div className="kr-aboutus--person"><img src={AdrianImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={AlexandraImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={AnnikaImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={CasparImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={CelinaImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={LucasImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={RichardImage} alt="" /></div>
                    </div>

                    <Typography variant="h4" component="h3" gutterBottom>Design Team</Typography>
                    <div className="kr-aboutus--team">
                        <div className="kr-aboutus--person"><img src={AnaImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={AnnetteImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={FranziImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={PaulineImage} alt="" /></div>
                    </div>

                    <Typography variant="h4" component="h3" gutterBottom>Frontend Entwickler</Typography>
                    <div className="kr-aboutus--team">
                        <div className="kr-aboutus--person"><img src={CelalImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={JulianImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={MarcusImage} alt="" /></div>
                    </div>

                    <Typography variant="h4" component="h3" gutterBottom>Backend Entwickler</Typography>
                    <div className="kr-aboutus--team">
                        <div className="kr-aboutus--person"><img src={MartinImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={RobinImage} alt="" /></div>
                        <div className="kr-aboutus--person"><img src={ThomasImage} alt="" /></div>
                    </div>
                </Container>

                <Footer />
            </>
        );
    }
}
