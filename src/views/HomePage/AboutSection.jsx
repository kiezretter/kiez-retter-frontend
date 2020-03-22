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
                        Die Kiezretter sind entstanden Ullam voluptas asperiores. Recusandae culpa commodi. Consequatur ut quis animi modi.<br />
                        <br />
                        Quasi temporibus dicta tempora natus animi sint aliquid voluptatem. Aut ad nam. Labore nobis saepe iure eaque quia dolorum quas aut qui. Eligendi voluptatem occaecati unde dolorem et velit itaque est rem.<br />
                        <br />
                        Aliquam molestiae beatae atque fugit dolor tempora quis adipisci minus. Iusto et id sunt. Et nobis voluptas aperiam omnis. Iusto omnis asperiores consectetur. Nulla aut delectus laboriosam dolores assumenda adipisci molestiae id.
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