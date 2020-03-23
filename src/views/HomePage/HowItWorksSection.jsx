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
                                        Du möchtest deine Lieblingsbar, dein Lieblingscafé, oder einen anderen Lieblingsort gerne unterstützen? Das kannst du über unsere Plattform ganz einfach tun. Wähle deinen Lieblingskiezladen aus, bestimme anschließend die Höhe der Spende und schicke diese per PayPal direkt an den Inhaber.
                                        Dein Lieblingskiezladen ist noch nicht bei „kiezretter“? Dann erzähl ihm doch von uns. 
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
                                        Du trägst mit Deinem Laden zur Vielfalt der Nachbarschaft bei, hast jedoch durch die andauernde Krise finanzielle Schwierigkeiten? Dann melde Dich auf unserer Plattform als Inhaber*in an. Die Kiezretter können Dich dann ganz einfach über die interaktive Karte finden und Dich mittels PayPal mit einer Spende unterstützen.
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