import React from 'react';

import {
    Container,
    Typography,
    Grid,
    Button,
} from '@material-ui/core';

import HandGebenImage from '../../assets/images/Hand_geben.png';
import HandNehmenImage from '../../assets/images/Hand_nehmen.png';

export default class HowItWorksSection extends React.Component {
    render() {
        return (
            <div className="kr-homepage--howitworks">
                <Container maxWidth="md">
                    <Typography variant="h4" component="h3" gutterBottom>Und so funktioniert's</Typography>

                    <Grid container spacing={10} className="kr-homepage--gethelp">
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant="h5" component="h4" style={{ textAlign: 'center' }} gutterBottom>Ich möchte helfen</Typography>
                            <img src={HandGebenImage} alt="" className="kr-homepage--geben-image" />
                            <Typography>
                            Du möchtest deine Lieblingsbar, dein Lieblingscafé, oder einen anderen Lieblingsort gerne unterstützen? Bei uns findest du einen Weg, das zu tun. Du kannst direkt per PayPal spenden, wenn sich der Laden bei uns registriert hat. Ansonsten zeigen wir dir Wege, wie du ihn auf einer anderen Plattform per Gutschein oder Crowdfunding unterstützen kannst. Dein Lieblingskiezladen ist noch nicht bei „kiezretter“? Dann erzähl ihm doch von uns. 
                            </Typography>
                            <br />
                            <Button variant="contained" color="primary" disableElevation onClick={this.props.onClickHelp}>
                                Ich bin Kiezretter:in
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant="h5" component="h4" style={{ textAlign: 'center' }} gutterBottom>Ich brauche Unterstützung</Typography>
                            <img src={HandNehmenImage} alt="" className="kr-homepage--nehmen-image" />
                            <Typography>
                            Du trägst mit Deinem Laden zur Vielfalt der Nachbarschaft bei, hast jedoch durch die andauernde Krise finanzielle Schwierigkeiten? Dann melde Dich auf unserer Plattform als Inhaber*in an. Die Kiezretter können Dich dann ganz einfach über die interaktive Karte finden und Dich mittels PayPal mit einer Spende unterstützen. Du kannst auch auf deine Crowdfunding- oder Gutschein-Aktion auf einer anderen Plattform verlinken. Wir ziehen alle am selben Strang!
                            </Typography>
                            <br />
                            <Button variant="contained" color="primary" disableElevation href="/inhaber">
                                Ich bin Inhaber:in
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}