import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import {
    Container,
    Typography,
} from '@material-ui/core';

import './AGB.scss';

export default class AGBView extends React.Component {
    render() {
        return (
            <>
                <Navigation />
                <Container maxWidth="md" className="kr-agb">
                    <Typography variant="h2" gutterBottom>AGB</Typography>
                    <Typography variant="h5" gutterBottom>
                        AGB f&uuml;r nicht steuerbeg&uuml;nstigte Spendenaufrufer*in
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        1. Regelungsbereich<br />
                        Die Plattform kiezretter.de und kiez-retter.de. wird von der &ldquo;kiezretter ein noch nicht eingetragener (nichtrechtsf&auml;higer) Verein&rdquo; betrieben.<br />
                        Der Begriff &#8222;Spende&rdquo; ist unabh&auml;ngig vom steuerlichen Status der Projekte und deren Tr&auml;gerorganisationen zu verstehen.<br />
                        <br />
                        2. Rolle von kiezretter.de und kiez-retter.de<br />
                        2.1 kiezretter.de und kiez-retter.de informiert lediglich &uuml;ber bereits auf der Plattform eingestellte nicht steuerbeg&uuml;nstigte Projekte, Organisationen, Kleinunternehmen oder Unternehmen, Gewerbe/-treibende und Spendenaktionen auf der Plattform und schlie&szlig;t diese nach Ma&szlig;gabe dieser AGB ab.<br />
                        <br />
                        3. &Auml;nderungen an den Spendenaufrufen auf der Plattform <br />
                        3.1. &Auml;nderungen an den Spendenaufruf*en &ndash; Die M&ouml;glichkeit, &Auml;nderungen an den Spendenaufruf vorzunehmen, bleibt dem Spendenaufrufer auch nach der Einstellung der M&ouml;glichkeit, Zuwendungen &uuml;ber kiezretter.de und kiez-retter.de einzuwerben, erhalten. &Auml;nderungen an den Spendenaufruf*en sind deutlich zu kennzeichnen und sollen zusammen mit den Spendenaufruf dem Nutzer einen realistischen Einblick in den Stand des Spendenaufruf erm&ouml;glichen.<br />
                        3.2. Spendenaufruf Neuigkeiten &ndash; Der/die Spendenaufrufer*in stellt sicher, dass regelm&auml;&szlig;ige und zeitnahe Spendenaufrufe auf kiezretter.de und kiez-retter.de wahrheitsgem&auml;&szlig; &uuml;ber den Verlauf und die Erf&uuml;llung des eingestellten Spendenaufrufs sowie die Verwendung der Mittel verl&auml;sslich Auskunft geben. Spendenaufruf Neuigkeiten sollen insbesondere Angaben zu allen Transaktionen, Anschaffungen/Ausgaben, etwaigen Verz&ouml;gerungen oder Abweichungen von des Spendenaufrufs enthalten. Spendenaufrufe sind in Form von Blogposts mit Fotos, verlinkten Dokumenten und/oder Videos zu den Spendenaufrufen zur Verf&uuml;gung zu stellen.<br />
                        <br />
                        <br />
                        4. Spendenaufrufer*in bei auf der Plattform bereits eingestellten Spendenaufrufe<br />
                        4.1. Spendenaufrufer*in &ndash; Der Spendenaufrufer*in von der Plattform bereits eingestellten Spendenaufrufe garantiert und stellt sicher, dass die Angaben &uuml;ber den bereits eingestellten Spendenaufruf und die Beteiligten zutreffend sind und tr&auml;gt die Verantwortung f&uuml;r den Spendenaufruf. Im Falle eines Wechsels des Spendenaufrufer ist dieser unverz&uuml;glich anzuzeigen. Der bisherige Spendenaufrufer*in bleibt solange auf der Plattform sichtbar, bis ein neuer Spendenaufrufer*in benannt und registriert ist. Bis zur Benennung/Registrierung eines neuen Spendenaufrufer*in tr&auml;gt der Verantwortliche f&uuml;r das Unternehmen zugleich die Verantwortung.<br />
                        <br />
                        5. Auftritt auf der Plattform<br />
                        5.1 Die bereits auf der Plattform existierenden Unternehmensprofile und Spendenaufrufe bleiben erhalten. F&uuml;r Inhalte, die ein Spendenaufrufer*in auf kiezretter.de und kiez-retter.de einstellt, gelten Ziffer 3 der AGB f&uuml;r Nutzer und Spender (nicht steuerlich absetzbar). Insbesondere ist kiezretter.de und kiez-retter.de berechtigt, den Bedingungen widersprechende Inhalte zu entfernen und die Spendenaufrufe bzw. die Spendenaufrufer*in ist insbesondere verpflichtet, vor dem Einstellen von Inhalten sicherzustellen, dass ihr zurechenbares Verhalten oder ihr zurechenbare Inhalte nicht gegen gesetzliche Vorschriften, die guten Sitten oder Rechte Dritter versto&szlig;en k&ouml;nnen (z. B. Marken-, Namens-, Urheber-, Datenschutz- oder Jugendschutzrecht); sie verpflichtet sich insbesondere auch, vor dem Einstellen von Texten, Bildern oder anderen Inhalten die gesetzlich erforderlichen Einwilligungen der Beteiligten/Betroffenen/Berechtigten, beispielsweise der Fotografen oder der abgebildeten oder genannten Personen, einzuholen, auch soweit es sich um ihre eigenen Verantwortlichen oder Repr&auml;sentanten handelt; der Spendenaufrufer*in stellt kiezretter.de und kiez-retter.de von etwaigen Anspr&uuml;chen Dritter, die aus einem Versto&szlig; gegen diese Verpflichtungen folgen, frei. Unzul&auml;ssig sind alle Formen von Produktwerbung oder die Einzelansprache von anderen Nutzern zum Zwecke des Produktabsatzes oder der Hinweis auf etwaige Kooperationen mit Unternehmen oder sonstige Werbung f&uuml;r Unternehmen.<br />
                        <br />
                        6. Verwendung von Zuwendungen<br />
                        6.1 Auszahlungen sind nur &uuml;ber konkrete Bedarfe m&ouml;glich und wird mittels eines externen Zahlungsdienstleisters (PayPal) &uuml;ber einen Link direkt an den/die Spendenaufrufer*in weitergeleitet. Die Tr&auml;gerorganisation m&uuml;ssen vor Auszahlung zun&auml;chst vom Spendenaufrufer*in einem konkreten Bedarf zugeordnet werden.<br />
                        <br />
                        7. Abbruch eines Spendenaufrufes<br />
                        7.1. Abbruch eines Spendenaufrufes durch den Spendenaufrufer*in aufgrund von falschen unwissentlichen oder bewusst t&auml;uschenden Angaben m&uuml;ssen die Zuwendungen an die Unterst&uuml;tzer zur&uuml;ckgezahlt werden, sofern diese mit angemessenem Aufwand ermittelbar sind.<br />
                        7.2 kiezretter.de oder kiez-retter.de ist berechtigt einen Spendenaufruf abzubrechen wegen schwerer Verst&ouml;&szlig;e gegen diese Bedingungen. In diesem Fall werden alle bereits eingeworbenen Zuwendungen und die Unterst&uuml;tzer zur&uuml;ckgezahlt werden, sofern diese mit angemessenem Aufwand ermittelbar sind.<br />
                        7.3. In folgenden F&auml;llen hat der Zuwender einen Anspruch auf Zahlung gegen den Spendenaufrufer*in bzw. gesamtschuldnerisch gegen Spendenaufrufer*in und etwaige Empf&auml;nger von Zuwendungen in H&ouml;he des bereits ausgezahlten Betrags:<br />
                        Ein Abbruch des Spendenaufrufes durch den Spendenaufrufer*in oder durch kiezretter.de oder kiez-retter.de<br />
                        Schwerer Versto&szlig; gegen die Einstellbedingungen im Sinne der Ziffer 8.4.<br />
                        Unterst&uuml;tzer hat den gespendeten Betrag von seiner Bank zur&uuml;ckverlangt und zur&uuml;ckerhalten.<br />
                        Die Zahlung hat ohne Abzug von Kosten auf dasselbe Konto zugunsten desselben Kontoinhabers zu erfolgen, von dem die Auszahlung erfolgt ist.<br />
                        7.4. Als schwerer Versto&szlig; gegen die Einstellbedingungen gelten insbesondere:<br />
                        Falsche Angaben zu beteiligten Personen oder wesentlichen Eigenschaften des Spendenaufrufes.<br />
                        Schwere oder fortgesetzte Verletzung der Pflicht, durch Spenden Auskunft zu geben.<br />
                        Verwendung von Zuwendungen im angemessenen Ma&szlig;e f&uuml;r andere Zwecke.<br />
                        7.5. Weitere straf- oder zivilgerichtliche Folgen bleiben hiervon unber&uuml;hrt.<br />
                        <br />
                        8. Registrierung, Freischaltung und Verifizierung &uuml;ber kiezretter.de oder kiez-retter.de<br />
                        8.1 F&uuml;r die Nutzung der Spendenaufrufe ist eine ordnungsgem&auml;&szlig;e Registrierung des Spendenaufrufer*in zu &uuml;ber die Internetplattform von kiezretter.de oder kiez-retter.de erforderlich. Hierf&uuml;r f&uuml;llt der Spendenaufrufer*in das Online-Anmeldeformular vollst&auml;ndig aus und befolgt die Online-Hinweise zur Registrierung. Durch die wahrheitsgem&auml;&szlig;e Eingabe der Stammdaten (Angaben zur Person, Unternehmensnummer und Zahlungsdienstleister - PayPal) und das Akzeptieren der AGB im Registrierungsprozess gilt die Registrierung als ordnungsgem&auml;&szlig; abgeschlossen. <br />
                        8.1.1 Der Spendenaufrufer*in gibt bei seiner Registrierung Daten zu seiner Person, sowie seines Ladens an.<br />
                        Daten zur Person:<br />
                        - Vorname<br />
                        - Nachname<br />
                        - Spitzname/K&uuml;nstlername (optional)<br />
                        - E-Mail Adresse<br />
                        - PayPal Name<br />
                        - Gewerbeschein (Nach erfolgreicher Registrierung wird dieses Dokument innerhalb von 7 Tagen gel&ouml;scht)<br />
                        - Kopie Personalausweis/Reisepass (Nach erfolgreicher Registrierung wird dieses Dokument innerhalb von 7 Tagen gel&ouml;scht)<br />
                        Daten zum Gewerbe:<br />
                        - Name des Gewerbes<br />
                        - Stra&szlig;e<br />
                        - Postleitzahl<br />
                        - Stadt<br />
                        - Kategorie (Drop Down)<br />
                        - Telefonnummer (optional)<br />
                        Davon werden folgende Daten nach erfolgreicher Registrierung innerhalb von 7 Tagen vom kiezretter Team wieder gel&ouml;scht.<br />
                        - Gewerbeschein<br />
                        - Kopie Personalausweis/Reisepass<br />
                        8.2 Jeder Spendenaufrufer*in darf sich nur einmal registrieren. Zur Registrierung zugelassen sind nur nat&uuml;rliche und/oder juristische Personen sowie Personengesellschaften Personen im Sinne des &sect;&sect; 1 ff. B&uuml;rgerlichen Gesetzbuches (im Folgenden &#8222;BGB&ldquo;), die <br />
                        a. das 18. Lebensjahr vollendet haben<br />
                        b. Wer den selbst&auml;ndigen Betrieb eines stehenden Gewerbes, einer Zweigniederlassung oder einer unselbst&auml;ndigen Zweigstelle anf&auml;ngt.<br />
                        c. zur Anzeigepflicht nach &sect; 14 GewO verpflichtet ist.<br />
                        d. Anmeldung von Zweigstellen sind ausgeschlossen<br />
                        8.3. Nach der erfolgreichen Verifizierung und Bereitstellung der aktuellen wahrheitsgem&auml;&szlig;en Dokumente werden die Daten manuellem abgeglichen und irrelevanten Daten gel&ouml;scht welche nicht mehr zum Spendenprozess ben&ouml;tigt werden.<br />
                        <br />
                        9. Zahlungsdienstleister PayPal/Me (&ldquo;PPM&rdquo;)<br />
                        9.1 Es gelten folgende Richtlinien von PayPal<br />
                        9.2 kiezretter.de oder kiez-retter.de stellt lediglich die Online-Plattform f&uuml;r Spendenaufrufer*in und potentiellen Spendern zur Verf&uuml;gung. Jegliche Anspr&uuml;che, Verantwortung oder Einsicht in den Zahlungsverkehr weisen wir zur&uuml;ck.<br />
                        9.3. Die Transaktion des Mittelzuflusses/ Zuwendung auch Spenden genannt findet &uuml;ber eine Drittanbieter names PayPal statt.<br />
                        9.4 Anfallende Geb&uuml;hren zwischen beiden Transaktionspartner unterliegen den geltenden Richtlinien des Zahlungsdienstleisters PayPal.<br />
                        <br />
                        10. Transparenz, K&uuml;ndigung, Sperrung von Funktionalit&auml;ten*<br />
                        10.1 kiezretter.de oder kiez-retter.de ist berechtigt, den Spendenaufrufer*in hinsichtlich der f&uuml;r sie noch bestehenden Funktionalit&auml;ten von kiezretter.de oder kiez-retter.de zu sperren bzw. diesen jederzeit mit sofortiger Wirkung zu k&uuml;ndigen.<br />
                        10.2. Alle Spendenaufrufe und Spendenaufrufer*in sowie von jenen eingestellte Inhalte bleiben auch nach der K&uuml;ndigung/Sperrung aus Transparenzgr&uuml;nden auf der Plattform sichtbar, damit die bisherigen Projekte und die Verwendung von Zuwendungsgeldern nachverfolgt werden k&ouml;nnen.<br />
                        <br />
                        <br />
                        11. &Auml;nderungen von Bedingungen<br />
                        11.1 Diese AGB sind vom M&auml;rz 2020 und aktuell g&uuml;ltig.<br />
                        11.2 Wir behalten uns vor, unsere AGB jederzeit uneingeschr&auml;nkt zu &auml;ndern, insbesondere um sie an gesetzliche oder technische &Auml;nderungen anzupassen. Registrierte Nutzer werden zum gleichen Zeitpunkt per E-Mail &uuml;ber anstehende &Auml;nderungen in Kenntnis gesetzt. Wir bitten Dich daher, die jeweils aktuelle Version auf unserer Webseite regelm&auml;&szlig;ig zu beachten.<br />
                        <br />
                    </Typography>
                </Container>
                <Footer />
            </>
        );
    }
}
