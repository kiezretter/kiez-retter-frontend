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
                        AGB f&uuml;r nicht steuerbeg&uuml;nstigte Spendenaufrufende
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        1. Regelungsbereich<br />
                        Die Plattform, die unter kiezretter.de und kiez-retter.de verfügbar ist, wird von &ldquo;kiezretter&rdquo; &ndash; einem noch nicht eingetragenen (nichtrechtsf&auml;higen) Verein &ndash; betrieben.<br />
                        Der Begriff &#8222;Spende&rdquo; ist unabh&auml;ngig vom steuerlichen Status der Projekte und deren Tr&auml;gerorganisationen zu verstehen.<br />
                        <br />
                        2. Rolle von kiezretter.de und kiez-retter.de<br />
                        2.1 kiezretter.de und kiez-retter.de informiert lediglich &uuml;ber bereits auf der Plattform eingestellte nicht steuerbeg&uuml;nstigte Projekte, Organisationen, Kleinunternehmen oder Unternehmen, Gewerbe/-treibende und Spendenaktionen auf der Plattform und vermittelt den Zahlungskontakt.<br />
                        <br />
                        3. &Auml;nderungen an den Spendenaufrufen auf der Plattform <br />
                        3.1. &Auml;nderungen an den Spendenaufrufen &ndash; Die M&ouml;glichkeit, &Auml;nderungen an den Spendenaufrufen vorzunehmen, bleibt dem/der Spendenaufrufenden auch nach der Einstellung der M&ouml;glichkeit, Zuwendungen &uuml;ber kiezretter.de und kiez-retter.de einzuwerben, erhalten. &Auml;nderungen an den Spendenaufrufen sind deutlich zu kennzeichnen und sollen zusammen mit den Spendenaufrufen dem Nutzer einen realistischen Einblick in den Stand des Spendenaufrufs erm&ouml;glichen.<br />
                        <br />
                        <br />
                        4. Spendenaufrufende bei auf der Plattform bereits eingestellten Spendenaufrufen<br />
                        4.1. Der/die Spendenaufrufende garantiert und stellt sicher, dass die Angaben &uuml;ber den bereits eingestellten Spendenaufruf und die Beteiligten zutreffend sind und tr&auml;gt die Verantwortung f&uuml;r den Spendenaufruf. Im Falle eines Wechsels des/der Spendenaufrufenden ist dieser unverz&uuml;glich anzuzeigen. Der/die bisherige Spendenaufrufende bleibt solange auf der Plattform sichtbar, bis ein/e neue/r Spendenaufrufende benannt und registriert ist. Bis zur Benennung/Registrierung eines/einer neuen Spendenaufrufenden tr&auml;gt der/die Verantwortliche f&uuml;r das Unternehmen zugleich die Verantwortung.<br />
                        <br />
                        5. Auftritt auf der Plattform<br />
                        5.1 Die bereits auf der Plattform existierenden Unternehmensprofile und Spendenaufrufe bleiben erhalten. F&uuml;r Inhalte, die ein/e Spendenaufruferende auf kiezretter.de und kiez-retter.de einstellt, gelten Ziffer 3 der AGB. Insbesondere ist kiezretter.de und kiez-retter.de berechtigt, den Bedingungen widersprechende Inhalte zu entfernen und der/die Spendenaufrufende ist insbesondere verpflichtet, vor dem Einstellen von Inhalten sicherzustellen, dass ihm/ihr zurechenbares Verhalten oder ihm/ihr zurechenbare Inhalte nicht gegen gesetzliche Vorschriften, die guten Sitten oder Rechte Dritter versto&szlig;en (z. B. Marken-, Namens-, Urheber-, Datenschutz- oder Jugendschutzrecht); er/sie verpflichtet sich insbesondere auch, vor dem Einstellen von Texten, Bildern oder anderen Inhalten die gesetzlich erforderlichen Einwilligungen der Beteiligten/Betroffenen/Berechtigten, beispielsweise der Fotografen oder der abgebildeten oder genannten Personen, einzuholen, auch soweit es sich um seine/ihre eigenen Verantwortlichen oder Repr&auml;sentanten handelt; der/die Spendenaufruferende stellt kiezretter.de und kiez-retter.de von etwaigen Anspr&uuml;chen Dritter, die aus einem Versto&szlig; gegen diese Verpflichtungen folgen, frei. Unzul&auml;ssig sind alle Formen von Produktwerbung oder die Einzelansprache von anderen Nutzern zum Zwecke des Produktabsatzes oder der Hinweis auf etwaige Kooperationen mit Unternehmen oder sonstige Werbung f&uuml;r Unternehmen.<br />
                        <br />
                        6. Verwendung von Zuwendungen<br />
                        6.1 Auszahlungen sind nur &uuml;ber konkrete Bedarfe m&ouml;glich und werden mittels eines externen Zahlungsdienstleisters (PayPal) &uuml;ber einen Link direkt an den/die Spendenaufrufende weitergeleitet. <br />
                        <br />
                        7. Abbruch eines Spendenaufrufes<br />
                        7.1. Bei Abbruch eines Spendenaufrufes durch den/die Spendenaufrufende aufgrund von falschen unwissentlichen oder bewusst t&auml;uschenden Angaben m&uuml;ssen die Zuwendungen an die Unterst&uuml;tzer zur&uuml;ckgezahlt werden, sofern diese mit angemessenem Aufwand ermittelbar sind.<br />
                        7.2 kiezretter.de oder kiez-retter.de ist berechtigt, einen Spendenaufruf abzubrechen wegen schwerer Verst&ouml;&szlig;e gegen diese Bedingungen. In diesem Fall muss der/die Spendenaufrufende alle bereits eingeworbenen Zuwendungen an die Unterst&uuml;tzer zur&uuml;ckzahlen, sofern diese mit angemessenem Aufwand ermittelbar sind.<br />
                        7.3. In folgenden F&auml;llen hat der/die Spendende einen Anspruch auf Zahlung gegen den/die Spendenaufrufende bzw. gesamtschuldnerisch gegen Spendenaufrufende/n und etwaige Empf&auml;nger von Zuwendungen in H&ouml;he des bereits ausgezahlten Betrags:<br />
                        Ein Abbruch des Spendenaufrufes durch den/die Spendenaufrufenden oder durch kiezretter.de oder kiez-retter.de<br />
                        Schwerer Versto&szlig; gegen die Einstellbedingungen im Sinne der Ziffer 7.4.<br />
                        Die Zahlung hat ohne Abzug von Kosten auf dasselbe Konto zugunsten desselben Kontoinhabers zu erfolgen, von dem die Auszahlung erfolgt ist.<br />
                        7.4. Als schwerer Versto&szlig; gegen die Einstellbedingungen gelten insbesondere:<br />
                        Falsche Angaben zu beteiligten Personen oder wesentlichen Eigenschaften des Spendenaufrufes.<br />
                        Schwere oder fortgesetzte Verletzung der Pflicht, Auskunft bzgl. der Verwendung der Spenden zu geben.<br />
                        Verwendung von Zuwendungen in unangemessenem Ma&szlig;e f&uuml;r andere Zwecke.<br />
                        7.5. Weitere straf- oder zivilgerichtliche Folgen bleiben hiervon unber&uuml;hrt.<br />
                        <br />
                        8. Registrierung, Freischaltung und Verifizierung &uuml;ber kiezretter.de oder kiez-retter.de<br />
                        8.1 F&uuml;r die Nutzung der Spendenaufrufe ist eine ordnungsgem&auml;&szlig;e Registrierung des/der Spendenaufrufenden &uuml;ber die Internetplattform von kiezretter.de oder kiez-retter.de erforderlich. Hierf&uuml;r f&uuml;llt der/die Spendenaufrufende das Online-Anmeldeformular vollst&auml;ndig aus und befolgt die Online-Hinweise zur Registrierung. Durch die wahrheitsgem&auml;&szlig;e Eingabe der Stammdaten (Angaben zur Person, Unternehmensnummer und Zahlungsdienstleister - PayPal) und das Akzeptieren der AGB im Registrierungsprozess gilt die Registrierung als ordnungsgem&auml;&szlig; abgeschlossen. <br />
                        8.1.1 Der/die Spendenaufrufende gibt bei ihrer/seiner Registrierung Daten zu ihrer/seiner Person sowie ihres/seines Ladens an.<br />
                        Daten zur Person:<br />
                        - Vorname<br />
                        - Nachname<br />
                        - Spitzname/K&uuml;nstlername (optional)<br />
                        - E-Mail-Adresse<br />
                        - PayPal-Name<br />
                        - Gewerbeschein
                        - Kopie des Personalausweises/Reisepasses
                        Daten zum Gewerbe:<br />
                        - Name des Gewerbes<br />
                        - Stra&szlig;e<br />
                        - Postleitzahl<br />
                        - Stadt<br />
                        - Kategorie (Drop Down)<br />
                        - Telefonnummer (optional)<br />
                        Folgende Daten werden nach erfolgreicher Registrierung innerhalb von 7 Tagen durch das kiezretter-Team wieder gel&ouml;scht.<br />
                        - Gewerbeschein<br />
                        - Kopie des Personalausweises/Reisepasses<br />
                        8.2 Jede/r Spendenaufrufende darf sich nur einmal registrieren. Zur Registrierung zugelassen sind nur nat&uuml;rliche und/oder juristische Personen sowie Personengesellschaften Personen im Sinne des &sect;&sect; 1 ff. B&uuml;rgerliches Gesetzbuch (im Folgenden &#8222;BGB&ldquo;), die <br />
                        a. das 18. Lebensjahr vollendet haben<br />
                        b. den selbst&auml;ndigen Betrieb eines stehenden Gewerbes, einer Zweigniederlassung oder einer unselbst&auml;ndigen Zweigstelle anfangen.<br />
                        c. zur Anzeigepflicht nach &sect; 14 GewO verpflichtet sind.<br />
                        Die Anmeldung von Zweigstellen ist ausgeschlossen.<br />
                        8.3. Nach der erfolgreichen Verifizierung und Bereitstellung der aktuellen wahrheitsgem&auml;&szlig;en Dokumente werden die Daten manuell abgeglichen. Dabei werden irrelevante Daten gel&ouml;scht, welche nicht für den Spendenprozess ben&ouml;tigt werden.<br />
                        <br />
                        9. Zahlungsdienstleister PayPal/Me (&ldquo;PPM&rdquo;)<br />
                        9.1. Die Transaktion des Mittelzuflusses bzw. der Zuwendung, auch Spenden genannt, findet &uuml;ber einen Drittanbieter namens PayPal statt.<br />
                        9.2 Es gelten die Richtlinien von PayPal.<br />
                        9.3 Anfallende Geb&uuml;hren zwischen beiden Transaktionspartner unterliegen den geltenden Richtlinien des Zahlungsdienstleisters PayPal.<br />
                        9.4 kiezretter.de oder kiez-retter.de stellt lediglich die Online-Plattform f&uuml;r Spendenaufrufende und potentiellen Spender zur Verf&uuml;gung. Jegliche Anspr&uuml;che, Verantwortung oder Einsicht in den Zahlungsverkehr weisen wir zur&uuml;ck.<br />
                        <br />
                        10. Transparenz, K&uuml;ndigung, Sperrung von Funktionalit&auml;ten*<br />
                        10.1 kiezretter.de oder kiez-retter.de ist berechtigt, den/die Spendenaufrufende hinsichtlich der f&uuml;r sie noch bestehenden Funktionalit&auml;ten von kiezretter.de oder kiez-retter.de zu sperren bzw. diese jederzeit mit sofortiger Wirkung zu k&uuml;ndigen.<br />
                        10.2. Alle Spendenaufrufe und Spendenaufrufende sowie von jenen eingestellte Inhalte bleiben auch nach der K&uuml;ndigung/Sperrung aus Transparenzgr&uuml;nden auf der Plattform sichtbar, damit die bisherigen Projekte und die Verwendung von Zuwendungsgeldern nachverfolgt werden k&ouml;nnen.<br />
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
