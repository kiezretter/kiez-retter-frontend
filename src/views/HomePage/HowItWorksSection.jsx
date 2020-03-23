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

                    <Grid container spacing={3} className="kr-homepage--gethelp">
                        <Grid item xs={12} sm={6} md={6}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h4">Ich möchte helfen</Typography>
                                    <Typography>
                                        Du möchtest sie in diesen schwierigen Zeiten unterstützen? Das kannst Du über unsere Plattform ganz einfach tun. Wähle Deinen Lieblingskiezladen aus, wähle die Höhe Deiner Spende und schicke sie per Paypal direkt an den Inhaber.<br />
                                        Dein Lieblingskiezladen ist noch nicht bei „kiezretter”? Dann erzähl ihm doch von uns.
                                    </Typography>
                                    <br />
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
                                    <Typography>
                                        Gib Deinen Kunden die Möglichkeit, Dich in dieser aktuell schwierigen Zeit zu unterstützen und ihren Kiez am Leben zu halten. Melde Dich dazu einfach auf unserer Plattform als Inhaber an. Die Kiezretter können Dich dann ganz einfach über die interaktive Karte finden und mit einer Spende unterstützen. Die Spenden erhältst Du unkompliziert und direkt über Paypal.
                                    </Typography>
                                    <br />
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