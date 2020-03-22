import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import {
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Icon,
    Typography,
} from '@material-ui/core';

import './FAQ.scss';

const faqQuestionsSupporter = [
    {
        question: 'Was ist kiezretter?',
        answer: `<em>Die Idee</em>: zusammen können viele Menschen ihre Lokalitäten durch Spenden unterstützen, damit diese auch in der Zeit des Coronavirus ihre Mitarbeiter/-innen und Miete bezahlen können.<br />
            <br />
            <em>Wie es funktioniert:</em> kiezretter ist eine Spendenplatform auf der ihr Geschäfte, Bars, Restaurants, Cafés oder auch euren Späti um die Ecke unterstützen können.<br />
            <br />
            Als Unterstützer/ -in suchst du dir bequem dein Lieblings - Café oder dein Stammlokal heraus und kannst dieses dann mit einer Spende über PayPal unterstützen.`
    },
    {
        question: 'Gibt es einen Mindestbetrag?',
        answer: 'Nein. Jeder Beitrag hilft.'
    },
    {
        question: 'Bekomme ich eine Spendenbescheinigung?',
        answer: 'Nein.'
    },
    {
        question: 'Gibt es ein Mindestziel für Spendenaktionen?',
        answer: 'Nein. Anders als bei manchen Crowdfunding-Websites, gibt es kein \„Spendenziel\“ welches erreicht werden muss. Jede Spende wird direkt an das gewünschte Unternehmen weitergeleitet.'
    },
    {
        question: 'Können Andere sehen, wem ich gespendet habe?',
        answer: 'Bisher werden nur die Unternehmen eure Spende sehen, da die Zahlung über PayPal abgewickelt wird und wir somit nicht einsehen könne, wer schlussendlich gespendet hat. Wir arbeiten aber daran, dass Ihr eure gute Tat auch mit anderen teilen könnt.'
    },
    {
        question: 'Mein Lieblingsladen ist nicht auf kiezretter registriert. Wie kann ich das ändern?',
        answer: 'Schicke der/die InhaberIn einfach einen Link zu kiezretter zu, damit er/sie sich anmelden kann.'
    },
    {
        question: 'Geht meine Spende direkt an meinen Lieblingsladen?',
        answer: 'Ja. Kiezretter erhebt keine Gebühr oder ähnliches. Lediglich die Gebühren bei Zahlungen über PayPal müssen in bestimmten Fällen berücksichtigt werden (<a href="https://www.paypal.com/de/webapps/mpp/paypal-fees" target="_blank" rel="noopener noreferrer">paypal.com/de/webapps/mpp/paypal-fees</a>).'
    },
    {
        question: 'Verdient kiezretter Geld mit der Webseite?',
        answer: 'Nein. Uns geht es nur darum unseren lokalen Kiezgeschäften zu helfen. Deine Spende geht direkt an das Café, Restaurant oder die Bar deiner Wahl.'
    },
    {
        question: 'Kriege ich mein Geld zurück, wenn mein Lieblingsladen schließen muss?',
        answer: 'Nein. Eine Spende ist eine freiwillige Leistung, die ohne Gegenleistung gegeben wird.'
    },
    {
        question: 'Wie ist kiezretter entstanden?',
        answer: 'Kiezretter ist eine Initiative die im Rahmen des Hackathons #WirvsVirus von der Bundesregierung entstanden ist. Wir sind 19 Personen zwischen 20 - 50 aus ganz Deutschland, die sich für diese Idee begeistern konnten und innerhalb von 72 Stunden kiezretter aufgezogen haben.'
    },
    {
        question: 'Wie kann ich Werbung für euch machen? ',
        answer: 'Eine tolle Frage. Teile unsere Website gerne über Instagram, Facebook oder andere Social-Media Kanäle.'
    },
    {
        question: 'Wie kann ich an kiezretter spenden?',
        answer: 'Du kannst nicht an kiezretter spenden sondern nur an die Unternehmen auf unserer Website.'
    },
];

const faqQuestionsBusiness = [
    {
        question: 'Was ist kiezretter?',
        answer: `<em>Die Idee:</em> zusammen können viele Menschen ihre Lokalitäten durch Spenden unterstützen, damit diese auch in der Zeit des Coronavirus ihre Mitarbeiter und Miete bezahlen können.<br />
            <br />
            <em>Wie es funktioniert:</em>Als Unterstützung- Suchende könnt ihr euch ganz einfach auf unserer Plattform eintragen.Sobald ihr euern Account erstellt habt, könnt ihr dann sofort euren eigenen Link teilen und Leute zum Helfen motivieren.Über unsere integrierte Map - Funktion soll es aber auch möglich sein, dass ihr einfach von Unterstützern und Unterstützerinnen gefunden werden könnt.`
    },
    {
        question: 'Was brauche ich, um mein Unternehmen zu registrieren?',
        answer: `<ul><li>Kerndaten zu dir und deinen Unternehmen (U.a. Name, Adresse, E-Mail)</li>
            <li>Personalausweis und Gewerbeschein zur Registrierung (wird nach erfolgreicher Verifizierung wieder gelöscht)</li></ul>`
    },
    {
        question: 'Gibt es ein Mindestziel für Spendenaktionen?',
        answer: 'Nein. Anders als bei manchen Crowdfunding-Websites, gibt es kein „Spendenziel“ welches erreicht werden muss. Jede Spende wird direkt an euer Unternehmen weitergeleitet.'
    },
    {
        question: 'Gibt es eine zeitliche Beschränkung?',
        answer: 'Nein. Eine zeitliche Beschränkung für euren Eintrag ist nicht vorgesehen. Wir hoffen jedoch, dass sich die Corona-Krise bald wieder legen wird und ihr schnellstmöglich wieder euer Tagesgeschäft aufnehmen könnt und wir damit hoffentlich bald wieder obsolet werden.'
    },
    {
        question: 'Habe ich Kosten, wenn ich meinen Laden auf Kiezretter registriere?',
        answer: 'Nein. Die Registrierung ist vollkommen kostenfrei.'
    },
    {
        question: 'Wie kann ich meinen Stammkunden von kiezretter erzählen?',
        answer: 'Du kannst den Link deiner Seite ganz einfach mit deinen Stammkunden Teilen.'
    }
];

export default class FAQView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: 'question-supporter-0',
        };
    }

    get expanded() {
        const [ expanded ] = React.useState(false);

        return expanded;
    }

    handleChange(panel) {
        const expanded = this.state.expanded === panel ? null : panel;

        this.setState({ expanded });
    }

    renderQuestions(key, array) {
        return array.map((item, index) => (
            <ExpansionPanel key={`question-${key}-${index}`} expanded={this.state.expanded === `question-${key}-${index}`} onChange={this.handleChange.bind(this, `question-${key}-${index}`)}>
                <ExpansionPanelSummary
                    expandIcon={<Icon>expand_more</Icon>}
                    aria-controls={`question-${key}-${index}-content`}
                    id={`question-${key}-${index}-header`}
                >
                    <Typography variant="h6">{item.question}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="body2" dangerouslySetInnerHTML={{ __html: item.answer }}></Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        ))
    }

    renderSupporterQuestions() {
        return this.renderQuestions('supporter', faqQuestionsSupporter);
    }

    renderBusinessQuestions() {
        return this.renderQuestions('business', faqQuestionsBusiness);
    }

    render() {
        return (
            <>
                <Navigation />

                <Container maxWidth="md" className="kr-faq">
                    <Typography variant="h2" gutterBottom>FAQ</Typography>

                    <Typography variant="h4" component="h3" gutterBottom>Für Unterstützer/-innen</Typography>
                    {this.renderSupporterQuestions()}
                    <br /><br />
                    <Typography variant="h4" component="h3" gutterBottom>Für Ladenbesitzer/-innen</Typography>
                    {this.renderBusinessQuestions()}
                </Container>

                <Footer />
            </>
        );
    }
}
