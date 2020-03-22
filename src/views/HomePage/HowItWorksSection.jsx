import React from 'react';

import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
} from '@material-ui/core';

export default class HowItWorksSection extends React.Component {
    render() {
        return (
            <div className="kr-homepage--howitworks">
                <Container maxWidth="md">
                    <Typography variant="h4" component="h3" gutterBottom>Und so funktioniert's</Typography>
                    <Typography>
                        Die Kiezretter sind entstanden Ullam voluptas asperiores. Recusandae culpa commodi. Consequatur ut quis animi modi.<br />
                        <br />
                        Quasi temporibus dicta tempora natus animi sint aliquid voluptatem. Aut ad nam. Labore nobis saepe iure eaque quia dolorum quas aut qui. Eligendi voluptatem occaecati unde dolorem et velit itaque est rem.<br />
                    </Typography>
                    <Grid container spacing={3} className="kr-homepage--gethelp">
                        <Grid item xs={12} sm={6} md={6}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h4">Ich möchte helfen</Typography>
                                    <Typography>Quasi temporibus dicta tempora natus animi sint aliquid voluptatem. Aut ad nam. Labore nobis saepe iure eaque quia dolorum quas aut qui. Eligendi voluptatem occaecati unde dolorem et velit itaque est rem.</Typography>
                                    <Button variant="contained" color="primary" disableElevation onClick={this.props.onClickHelp}>
                                        Ich bin Kiezretter
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h4">Ich brauche Unterstützung</Typography>
                                    <Typography>Quasi temporibus dicta tempora natus animi sint aliquid voluptatem. Aut ad nam. Labore nobis saepe iure eaque quia dolorum quas aut qui. Eligendi voluptatem occaecati unde dolorem et velit itaque est rem.</Typography>
                                
                                    <Button variant="contained" color="primary" disableElevation href="/inhaber">
                                        Ich bin Inhaber
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}