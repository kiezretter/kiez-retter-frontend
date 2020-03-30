import React from 'react';

import {
    Container,
    Typography,
    Grid,
    Hidden,
} from '@material-ui/core';

import ZusammenIcon from '../../assets/images/zusammen.png';
import PayNowEatLaterLogo from '../../assets/images/Logo-PayNowEatLater.png';

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
                                <img src={PayNowEatLaterLogo} alt="paynoweatlater-logo" className="kr-homepage--together--icon" />
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