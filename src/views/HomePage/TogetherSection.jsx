import React from 'react';

import {
    Container,
    Typography,
    Grid,
    Hidden,
} from '@material-ui/core';

import ZusammenIcon from '../../assets/images/zusammen.png';
import PayNowEatLaterLogo from '../../assets/images/Logo-PayNowEatLater.png';
import HelfenBerlinLogo from '../../assets/images/Logo_B_Helfen.Berlin_white.png';
import HelfenMunichLogo from '../../assets/images/helfen-muenchen-white.png';
import LokalHelpLogo from '../../assets/images/logo_lokal.help_white.png';

export default class TogetherSection extends React.Component {
    render() {
        return (
            <div className="kr-homepage--together">
                <Container maxWidth="md">
                    <Grid container spacing={5} alignItems="center">
                        <Hidden smUp><Grid item xs={3} sm={false}></Grid></Hidden>
                        <Grid item xs={6} sm={3}>
                            <img src={ZusammenIcon} alt="together-icon" className="kr-homepage--together--icon" />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="h4" component="h3" gutterBottom>Zusammen</Typography>
                            <Typography>
                                Auch wir glauben fest daran, dass wir zusammen mehr erreichen können.<br />
                                Deswegen verweisen wir auf die tollen Angebote anderer Plattformen. Hier unsere aktuellen Partner:<br />
                                <br />
                                <div className="kr-homepage--partnericon-wrapper">
                                    <div>
                                        <img src={PayNowEatLaterLogo} alt="paynoweatlater-logo" className="kr-homepage--partnericon" />
                                        <img src={LokalHelpLogo} alt="paynoweatlater-logo" className="kr-homepage--partnericon" />
                                    </div>
                                    <div>
                                        <img src={HelfenBerlinLogo} alt="paynoweatlater-logo" className="kr-homepage--partnericon" />
                                        <img src={HelfenMunichLogo} alt="paynoweatlater-logo" className="kr-homepage--partnericon" />
                                    </div>
                                </div>
                                <br />
                                #kiezretter #bettertogether
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}