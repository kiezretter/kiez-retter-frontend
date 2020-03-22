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
                        Euer Kiez? Ihr seid alle ein aktiver Teil davon. Wir verbinden Kiezläden, die unter Umsatzausfällen leiden, mit ihren Kiezrettern, die die Inhaber in der schwierigen Zeit gerne weiter unterstützen möchten. Und das alles ganz einfach und unkompliziert.
                    </Typography>
                    <Grid container spacing={3} className="kr-homepage--gethelp">
                        <Grid item xs={12} sm={6} md={6}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h5" component="h4">Ich möchte helfen</Typography>
                                    <Typography>
                                        Du liebst es, in deinem Lieblingscafé ein Buch aus Deinem Lieblingsbuchladen zu lesen, Deiner Freundin aus dem Laden um die Ecke eine Kleinigkeit mitzubringen, Dich abends mit Deinen FreundInnen in Deiner Lieblingskneipe zu treffen, im Club das Tanzbein zuschwingen, um dann auf dem Nachhauseweg in Deinem Lieblingsspäti ein Wegbier mitzunehmen?<br />
                                        All diese kleinen Läden machen Deinen Kiez aus. Sie sind für Dich da. Sie sind Dein „zu Hause”.<br />
                                        <br />
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
                                        Du bist mit Deinem Laden Teil des Kiez’ und trägst mit vielen anderen dazu bei, dass
                                        sich alle hier wohl und zu Hause fühlen. Du bist gerne für Deine Kunden da. Leider
                                        kannst Du das aktuell nicht so sein, wie Du gerne möchtest.<br />
                                        <br />
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