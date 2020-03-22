import React from 'react';

import {
    Container,
    Typography,
    Grid,
} from '@material-ui/core';

import WirVsVirusLogo from '../../assets/images/wirvsvirus_logo_weiss.png';

export default class AboutSection extends React.Component {
    render() {
        return (
            <div className="kr-homepage--about" id="ueberuns">
                <Container maxWidth="md">
                    <Typography variant="h4" component="h3" gutterBottom>#kiezretter</Typography>
                    <Typography>
                        Kiezretter ist eine Liebeserklärung an unsere Kieze – gemeinsam wollen wir dafür sorgen, dass unsere Nachbarschaft nach der Krise noch genauso bunt und vielfältig ist wie davor!<br />
                        <br />
                        Unsere Plattform ermöglicht es jedem, ein Zeichen der Solidarität  zu setzen – und bringt unsere Gesellschaft somit ein Stückchen näher zusammen. Somit wird nicht nur die Vielfalt auf unseren Straßen erhalten, sondern auch die Identifikation mit der eigenen Nachbarschaft gestärkt – über soziale Grenzen hinweg!
                    </Typography>
                    <Grid container spacing={3} alignItems="center" className="kr-homepage--stats">
                        <Grid item xs>
                            <Typography>Kiezläden</Typography>
                            <Typography variant="h3" component="div" gutterBottom>9.876</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>Orte</Typography>
                            <Typography variant="h3" component="div" gutterBottom>543</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography>Kiezhelden</Typography>
                            <Typography variant="h3" component="div" gutterBottom>12.345</Typography>
                        </Grid>
                        <Grid item sm={12} md={3}>
                            <a href="https://wirvsvirushackathon.org" target="_blank" rel="noopener noreferrer">
                                <img src={WirVsVirusLogo} className="kr-homepage--wirvsvirus" alt="WirVsVirusHackathon Logo" />
                            </a>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}