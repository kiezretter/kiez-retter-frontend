import React from 'react';

import {
    Container,
    Typography,
    Grid,
    Hidden,
} from '@material-ui/core';

import ZusammenIcon from '../../assets/images/zusammen.png';

export default class TogetherSection extends React.Component {
    render() {
        return (
            <div className="kr-homepage--together">
                <Container maxWidth="md">
                    <Grid container spacing={5} alignItems="center">
                        <Hidden smUp><Grid item xs={3} sm={false}></Grid></Hidden>
                        <Grid item xs={6} sm={3}>
                            <img src={ZusammenIcon} alt="" className="kr-homepage--together--icon" />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="h4" component="h3" gutterBottom>Zusammen</Typography>
                            <Typography>
                                Auch wir glauben fest daran, dass wir zusammen mehr erreichen können.<br />
                                Wir freuen uns daher, wenn ihr euch mit uns vernetzen möchtet, Anregungen habt oder uns unterstützen möchtet.<br />
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