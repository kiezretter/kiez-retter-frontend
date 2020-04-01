import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import {
    Container,
    Typography,
} from '@material-ui/core';

import './Datenschutz.scss';

export default class DatenschutzView extends React.Component {
    render() {
        return (
            <>
                <Navigation />

                <Container maxWidth="md" className="kr-datenschutz">
                    <Typography variant="h2" gutterBottom>Datenschutz</Typography>

                    <Typography variant="h4" component="h3" gutterBottom id="sec1">Einleitung</Typography>
                    <Typography>
                        Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot“).<br />
                        <br />
                        Die verwendeten Begriffe sind nicht geschlechtsspezifisch.<br />
                        <br />
                        Stand: 22. März 2020
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec2">Inhaltsübersicht</Typography>
                    <Typography>
                        <a href="#sec1">Einleitung</a><br />
                        <a href="#sec2">Verantwortlicher</a><br />
                        <a href="#sec3">Übersicht der Verarbeitungen</a><br />
                        <a href="#sec4">Maßgebliche Rechtsgrundlagen</a><br />
                        <a href="#sec5">Sicherheitsmaßnahmen</a><br />
                        <a href="#sec6">Datenverarbeitung in Drittländern</a><br />
                        <a href="#sec7">Einsatz von Cookies</a><br />
                        <a href="#sec8">Zahlungsdienstleister</a><br />
                        <a href="#sec9">Registrierung, Anmeldung und Nutzerkonto</a><br />
                        <a href="#sec10">Kontaktaufnahme</a><br />
                        <a href="#sec11">Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</a><br />
                        <a href="#sec12">Onlinemarketing</a><br />
                        <a href="#sec13">Präsenzen in sozialen Netzwerken</a><br />
                        <a href="#sec14">Plugins und eingebettete Funktionen sowie Inhalte</a><br />
                        <a href="#sec15">Löschung von Daten</a><br />
                        <a href="#sec16">Änderung und Aktualisierung der Datenschutzerklärung</a><br />
                        <a href="#sec17">Rechte der betroffenen Personen</a><br />
                        <a href="#sec18">Begriffsdefinitionen</a><br />
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec3">Verantwortlicher</Typography>
                    <Typography>
                        <strong>Vertretungsberechtigte Personen:</strong> Celal Basar, Franziska Bodenseeler, Pauline Cremer, Ana Alipass Fernandez, Celina Gunkelmann, Thomas Heer, Martin Honermeyer, Caspar Ibel, Annette Jann, Julian Kern, Lucas Lamby, Annika Kersten, Richard Maier, Adrian Ochs, Alexandra Scholz, Marcus Zierke, Robin Zuschke<br />
                        <br />
                        <strong>E-Mail-Adresse:</strong> info(at)kiez-retter.de
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec4">Übersicht der Verarbeitungen</Typography>
                    <Typography>
                        Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.<br /><br />

                        <Typography variant="h5" component="h4" gutterBottom>Arten der verarbeiteten Daten</Typography>
                        <ul>
                            <li>Bestandsdaten (z.B. Namen, Adressen).</li>
                            <li>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).</li>
                            <li>Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
                            <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                            <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).</li>
                            <li>Standortdaten (Daten, die den Standort des Endgeräts eines Endnutzers angeben).</li>
                            <li>Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie).</li>
                            <li>Zahlungsdaten (z.B. Bankverbindungen, Rechnungen, Zahlungshistorie).</li>
                        </ul>
                        <br /><br />

                        <Typography variant="h5" component="h4" gutterBottom>Kategorien betroffener Personen</Typography>
                        <ul>
                            <li>Interessenten.</li>
                            <li>Kommunikationspartner.</li>
                            <li>Kunden.</li>
                            <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                        </ul>
                        <br /><br />

                        <Typography variant="h5" component="h4" gutterBottom>Zwecke der Verarbeitung</Typography>
                        <ul>
                            <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                            <li>Besuchsaktionsauswertung.</li>
                            <li>Direktmarketing (z.B. per E-Mail oder postalisch).</li>
                            <li>Interessenbasiertes und verhaltensbezogenes Marketing.</li>
                            <li>Kontaktanfragen und Kommunikation.</li>
                            <li>Konversionsmessung (Messung der Effektivität von Marketingmaßnahmen).</li>
                            <li>Profiling (Erstellen von Nutzerprofilen).</li>
                            <li>Remarketing.</li>
                            <li>Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).</li>
                            <li>Sicherheitsmaßnahmen.</li>
                            <li>Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies).</li>
                            <li>Vertragliche Leistungen und Service.</li>
                            <li>Verwaltung und Beantwortung von Anfragen.</li>
                        </ul>
                        <br /><br />

                        <Typography variant="h5" component="h4" gutterBottom>Maßgebliche Rechtsgrundlagen</Typography>
                        Im Folgenden teilen wir die Rechtsgrundlagen der Datenschutzgrundverordnung (DSGVO), auf deren Basis wir die personenbezogenen Daten verarbeiten, mit. Bitte beachten Sie, dass zusätzlich zu den Regelungen der DSGVO die nationalen Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.<br />
                        <br />
                        <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.<br />
                        <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO)</strong> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.<br />
                        <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten erfordern, überwiegen.<br />
                        <br />
                        <strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick auf die Begründung, Durchführung oder Beendigung von Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec5">Sicherheitsmaßnahmen</Typography>
                    <Typography>
                        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.<br />
                        <br />
                        Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec6">Datenverarbeitung in Drittländern</Typography>
                    <Typography>
                        Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben.<br />
                        <br />
                        Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich erforderlicher Übermittlung verarbeiten oder lassen wir die Daten nur in Drittländern mit einem anerkannten Datenschutzniveau, zu denen die unter dem "Privacy-Shield" zertifizierten US-Verarbeiter gehören, oder auf Grundlage besonderer Garantien, wie z.B. vertraglicher Verpflichtung durch sogenannte Standardschutzklauseln der EU-Kommission, des Vorliegens von Zertifizierungen oder verbindlicher interner Datenschutzvorschriften, verarbeiten (Art. 44 bis 49 DSGVO, Informationsseite der EU-Kommission: <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</a>).
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec7">Einsatz von Cookies</Typography>
                    <Typography>
                        Cookies sind Textdateien, die Daten von besuchten Websites oder Domains enthalten und von einem Browser auf dem Computer des Benutzers gespeichert werden. Ein Cookie dient in erster Linie dazu, die Informationen über einen Benutzer während oder nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Zu den gespeicherten Angaben können z.B. die Spracheinstellungen auf einer Webseite, der Loginstatus, ein Warenkorb oder die Stelle, an der ein Video geschaut wurde, gehören. Zu dem Begriff der Cookies zählen wir ferner andere Technologien, die die gleichen Funktionen wie Cookies erfüllen (z.B., wenn Angaben der Nutzer anhand pseudonymer Onlinekennzeichnungen gespeichert werden, auch als "Nutzer-IDs" bezeichnet)<br />
                        <br />
                        <strong>Die folgenden Cookie-Typen und Funktionen werden unterschieden:</strong><br />
                        <ul>
                            <li><strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong> Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und seinen Browser geschlossen hat.</li>
                            <li><strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Browsers gespeichert. So kann beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die Interessen von Nutzern, die zur Reichweitenmessung oder zu Marketingzwecken verwendet werden, in einem solchen Cookie gespeichert werden.</li>
                            <li><strong>First-Party-Cookies:</strong> First-Party-Cookies werden von uns selbst gesetzt.</li>
                            <li><strong>Third-Party-Cookies (auch: Drittanbieter-Cookies):</strong> Drittanbieter-Cookies werden hauptsächlich von Werbetreibenden (sog. Dritten) verwendet, um Benutzerinformationen zu verarbeiten.</li>
                            <li><strong>Notwendige (auch: essentielle oder unbedingt erforderliche) Cookies:</strong> Cookies können zum einen für den Betrieb einer Webseite unbedingt erforderlich sein (z.B. um Logins oder andere Nutzereingaben zu speichern oder aus Gründen der Sicherheit).</li>
                            <li><strong>Statistik-, Marketing- und Personalisierungs-Cookies:</strong> Ferner werden Cookies im Regelfall auch im Rahmen der Reichweitenmessung eingesetzt sowie dann, wenn die Interessen eines Nutzers oder sein Verhalten (z.B. Betrachten bestimmter Inhalte, Nutzen von Funktionen etc.) auf einzelnen Webseiten in einem Nutzerprofil gespeichert werden. Solche Profile dienen dazu, den Nutzern z.B. Inhalte anzuzeigen, die ihren potentiellen Interessen entsprechen. Dieses Verfahren wird auch als "Tracking", d.h., Nachverfolgung der potentiellen Interessen der Nutzer bezeichnet. Soweit wir Cookies oder "Tracking"-Technologien einsetzen, informieren wir Sie gesondert in unserer Datenschutzerklärung oder im Rahmen der Einholung einer Einwilligung.</li>
                        </ul>
                        <br /><br />
                        <strong>Hinweise zu Rechtsgrundlagen:</strong> Auf welcher Rechtsgrundlage wir Ihre personenbezogenen Daten mit Hilfe von Cookies verarbeiten, hängt davon ab, ob wir Sie um eine Einwilligung bitten. Falls dies zutrifft und Sie in die Nutzung von Cookies einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten Interessen (z.B. an einem betriebswirtschaftlichen Betrieb unseres Onlineangebotes und dessen Verbesserung) verarbeitet oder, wenn der Einsatz von Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen zu erfüllen.<br />
                        <br />
                        <strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):</strong> Abhängig davon, ob die Verarbeitung auf Grundlage einer Einwilligung oder gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die Möglichkeit, eine erteilte Einwilligung zu widerrufen oder der Verarbeitung Ihrer Daten durch Cookie-Technologien zu widersprechen (zusammenfassend als "Opt-Out" bezeichnet). Sie können Ihren Widerspruch zunächst mittels der Einstellungen Ihres Browsers erklären, z.B., indem Sie die Nutzung von Cookies deaktivieren (wobei hierdurch auch die Funktionsfähigkeit unseres Onlineangebotes eingeschränkt werden kann). Ein Widerspruch gegen den Einsatz von Cookies zu Zwecken des Onlinemarketings kann auch mittels einer Vielzahl von Diensten, vor allem im Fall des Trackings, über die Webseiten <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">https://optout.aboutads.info</a> und <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">https://www.youronlinechoices.com</a>/ erklärt werden. Daneben können Sie weitere Widerspruchshinweise im Rahmen der Angaben zu den eingesetzten Dienstleistern und Cookies erhalten.<br />
                        <br />
                        <strong>Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung:</strong> Bevor wir Daten im Rahmen der Nutzung von Cookies verarbeiten oder verarbeiten lassen, bitten wir die Nutzer um eine jederzeit widerrufbare Einwilligung. Bevor die Einwilligung nicht ausgesprochen wurde, werden allenfalls Cookies eingesetzt, die für den Betrieb unseres Onlineangebotes erforderlich sind. Deren Einsatz erfolgt auf der Grundlage unseres Interesses und des Interesses der Nutzer an der erwarteten Funktionsfähigkeit unseres Onlineangebotes.<br />
                        <br />
                        <ul>
                            <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                            <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                            <li><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
                        </ul>
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec8">Zahlungsdienstleister</Typography>
                    <Typography>
                        Im Rahmen von Vertrags- und sonstigen Rechtsbeziehungen, aufgrund gesetzlicher Pflichten oder sonst auf Grundlage unserer berechtigten Interessen bieten wir den betroffenen Personen effiziente und sichere Zahlungsmöglichkeiten an und setzen hierzu neben Banken und Kreditinstituten weitere Zahlungsdienstleister ein (zusammenfassend "Zahlungsdienstleister").<br />
                        <br />
                        Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie z.B. Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen sowie die Vertrags-, Summen- und empfängerbezogenen Angaben. Die Angaben sind erforderlich, um die Transaktionen durchzuführen. Die eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister verarbeitet und bei diesen gespeichert. D.h., wir erhalten keine konto- oder kreditkartenbezogenen Informationen, sondern lediglich Informationen mit Bestätigung oder Negativbeauskunftung der Zahlung. Unter Umständen werden die Daten seitens der Zahlungsdienstleister an Wirtschaftsauskunfteien übermittelt. Diese Übermittlung bezweckt die Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und die Datenschutzhinweise der Zahlungsdienstleister.<br />
                        <br />
                        Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche innerhalb der jeweiligen Webseiten bzw. Transaktionsapplikationen abrufbar sind. Wir verweisen auf diese ebenfalls zwecks weiterer Informationen und Geltendmachung von Widerrufs-, Auskunfts- und anderen Betroffenenrechten.<br />
                        <br />
                        <ul>
                            <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen), Zahlungsdaten (z.B. Bankverbindungen, Rechnungen, Zahlungshistorie), Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenkategorie), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                            <li><strong>Betroffene Personen:</strong> Kunden, Interessenten.</li>
                            <li><strong>Zwecke der Verarbeitung:</strong> Vertragliche Leistungen und Service.</li>
                            <li><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
                        </ul><br />
                        <br />
                        <strong>Eingesetzte Dienste und Diensteanbieter:</strong><br />
                        <br />
                        <ul>
                            <li>PayPal: Zahlungsdienstleistungen und -Lösungen (z.B. PayPal, PayPal Plus, Braintree); Dienstanbieter: PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg; Website: <a href="https://www.paypal.com/de" target="_blank" rel="noopener noreferrer">https://www.paypal.com/de</a>; Datenschutzerklärung: <a href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank" rel="noopener noreferrer">https://www.paypal.com/de/webapps/mpp/ua/privacy-full</a>.</li>
                        </ul>
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec9">Registrierung, Anmeldung und Nutzerkonto</Typography>
                    <Typography>
                        Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung werden den Nutzern die erforderlichen Pflichtangaben mitgeteilt und zu Zwecken der Bereitstellung des Nutzerkontos auf Grundlage vertraglicher Pflichterfüllung verarbeitet. Zu den verarbeiteten Daten gehören insbesondere die Login-Informationen (Name, Passwort sowie eine E-Mail-Adresse). Die im Rahmen der Registrierung eingegebenen Daten werden für die Zwecke der Nutzung des Nutzerkontos und dessen Zwecks verwendet.<br />
                        <br />
                        Die Nutzer können über Vorgänge, die für deren Nutzerkonto relevant sind, wie z.B. technische Änderungen, per E-Mail informiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das Nutzerkonto, vorbehaltlich einer gesetzlichen Aufbewahrungspflicht, gelöscht. Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern. Wir sind berechtigt, sämtliche während der Vertragsdauer gespeicherte Daten des Nutzers unwiederbringlich zu löschen.<br />
                        <br />
                        Im Rahmen der Inanspruchnahme unserer Registrierungs- und Anmeldefunktionen sowie der Nutzung des Nutzerkontos speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen als auch jener der Nutzer an einem Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, es sei denn, sie ist zur Verfolgung unserer Ansprüche erforderlich oder es besteht hierzu besteht eine gesetzliche Verpflichtung.
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec10">Kontaktaufnahme</Typography>
                    <Typography>
                        Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.<br />
                        <br />
                        Die Beantwortung der Kontaktanfragen im Rahmen von vertraglichen oder vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer vertraglichen Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der berechtigten Interessen an der Beantwortung der Anfragen.<br />
                        <br />
                        <ul>
                            <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).</li>
                            <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                            <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation.</li>
                            <li><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
                        </ul>
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec11">Werbliche Kommunikation via E-Mail, Post, Fax oder Telefon</Typography>
                    <Typography>
                        Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen Kommunikation, die über diverse Kanäle, wie z.B. E-Mail, Telefon, Post oder Fax, entsprechend den gesetzlichen Vorgaben erfolgen kann.<br />
                        <br />
                        Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen oder der werblichen Kommunikation jederzeit zu widersprechen.<br />
                        <br />
                        Nach Widerruf bzw. Widerspruch können wir die zum Nachweis der Einwilligung erforderlichen Daten bis zu drei Jahren auf Grundlage unserer berechtigten Interessen speichern, bevor wir sie löschen. Die Verarbeitung dieser Daten wird auf den Zweck einer möglichen Abwehr von Ansprüchen beschränkt. Ein individueller Löschungsantrag ist jederzeit möglich, sofern zugleich das ehemalige Bestehen einer Einwilligung bestätigt wird.<br />
                        <br />
                        <ul>
                            <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
                            <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
                            <li><strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z.B. per E-Mail oder postalisch).</li>
                            <li><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
                        </ul>
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec12">Onlinemarketing</Typography>
                    <Typography>
                        Wir verarbeiten personenbezogene Daten zu Zwecken des Onlinemarketings, worunter insbesondere die Vermarktung von Werbeflächen oder Darstellung von werbenden und sonstigen Inhalten (zusammenfassend als "Inhalte" bezeichnet) anhand potentieller Interessen der Nutzer sowie die Messung ihrer Effektivität fallen kann.<br />
                        <br />
                        Zu diesen Zwecken werden sogenannte Nutzerprofile angelegt und in einer Datei (sogenannte "Cookie") gespeichert oder ähnliche Verfahren genutzt, mittels derer die für die Darstellung der vorgenannten Inhalte relevante Angaben zum Nutzer gespeichert werden. Zu diesen Angaben können z.B. betrachtete Inhalte, besuchte Webseiten, genutzte Onlinenetzwerke, aber auch Kommunikationspartner und technische Angaben, wie der verwendete Browser, das verwendete Computersystem sowie Angaben zu Nutzungszeiten gehören. Sofern Nutzer in die Erhebung ihrer Standortdaten eingewilligt haben, können auch diese verarbeitet werden.<br />
                        <br />
                        Es werden ebenfalls die IP-Adressen der Nutzer gespeichert. Jedoch nutzen wir zur Verfügung stehende IP-Masking-Verfahren (d.h., Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der Nutzer. Generell werden im Rahmen des Onlinemarketingverfahren keine Klardaten der Nutzer (wie z.B. E-Mail-Adressen oder Namen) gespeichert, sondern Pseudonyme. D.h., wir als auch die Anbieter der Onlinemarketingverfahren kennen nicht die tatsächlich Identität der Nutzer, sondern nur die in deren Profilen gespeicherten Angaben.<br />
                        <br />
                        Die Angaben in den Profilen werden im Regelfall in den Cookies oder mittels ähnlicher Verfahren gespeichert. Diese Cookies können später generell auch auf anderen Webseiten die dasselbe Onlinemarketingverfahren einsetzen, ausgelesen und zu Zwecken der Darstellung von Inhalten analysiert als auch mit weiteren Daten ergänzt und auf dem Server des Onlinemarketingverfahrensanbieters gespeichert werden.<br />
                        <br />
                        Ausnahmsweise können Klardaten den Profilen zugeordnet werden. Das ist der Fall, wenn die Nutzer z.B. Mitglieder eines sozialen Netzwerks sind, dessen Onlinemarketingverfahren wir einsetzen und das Netzwerk die Profile der Nutzer mit den vorgenannten Angaben verbindet. Wir bitten darum, zu beachten, dass Nutzer mit den Anbietern zusätzliche Abreden, z.B. durch Einwilligung im Rahmen der Registrierung, treffen können.<br />
                        <br />
                        Wir erhalten grundsätzlich nur Zugang zu zusammengefassten Informationen über den Erfolg unserer Werbeanzeigen. Jedoch können wir im Rahmen sogenannter Konversionsmessungen prüfen, welche unserer Onlinemarketingverfahren zu einer sogenannten Konversion geführt haben, d.h. z.B., zu einem Vertragsschluss mit uns. Die Konversionsmessung wird alleine zur Analyse des Erfolgs unserer Marketingmaßnahmen verwendet.<br />
                        <br />
                        Solange nicht anders angegeben, bitten wir Sie davon auszugehen, dass verwendete Cookies für einen Zeitraum von zwei Jahren gespeichert werden.<br />
                        <br />
                        <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um deren Einwilligung in den Einsatz der Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten werden die Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.<br />
                        <br />
                        <ul>
                            <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                            <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten), Interessenten.</li>
                            <li><strong>Zwecke der Verarbeitung:</strong> Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies), Remarketing, Besuchsaktionsauswertung, Interessenbasiertes und verhaltensbezogenes Marketing, Profiling (Erstellen von Nutzerprofilen), Konversionsmessung (Messung der Effektivität von Marketingmaßnahmen), Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).</li>
                            <li><strong>Sicherheitsmaßnahmen:</strong> IP-Masking (Pseudonymisierung der IP-Adresse).</li>
                            <li><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
                            <li><strong>Widerspruchsmöglichkeit (Opt-Out):</strong> Wir verweisen auf die Datenschutzhinweise der jeweiligen Anbieter und die zu den Anbietern angegebenen Widerspruchsmöglichkeiten (sog. "Opt-Out"). Sofern keine explizite Opt-Out-Möglichkeit angegeben wurde, besteht zum einen die Möglichkeit, dass Sie Cookies in den Einstellungen Ihres Browsers abschalten. Hierdurch können jedoch Funktionen unseres Onlineangebotes eingeschränkt werden. Wir empfehlen daher zusätzlich die folgenden Opt-Out-Möglichkeiten, die zusammenfassend auf jeweilige Gebiete gerichtet angeboten werden: a) Europa: <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer">https://www.youronlinechoices.eu</a>. b) Kanada: <a href="https://www.youradchoices.ca/choices" target="_blank" rel="noopener noreferrer">https://www.youradchoices.ca/choices</a>. c) USA: <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">https://www.aboutads.info/choices</a>. d) Gebietsübergreifend: <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">https://optout.aboutads.info</a>.</li>
                        </ul><br />
                        <br />
                        <strong>Eingesetzte Dienste und Diensteanbieter:</strong><br />
                        <ul>
                            <li>
                                Google Analytics: Onlinemarketing und Webanalyse; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; 
                                Website: <a href="https://marketingplatform.google.com/intl/de/about/analytics/" target="_blank" rel="noopener noreferrer">https://marketingplatform.google.com/intl/de/about/analytics/</a>; Datenschutzerklärung: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" target="_blank" rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a>; Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>, Einstellungen für die Darstellung von Werbeeinblendungen: <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">https://adssettings.google.com/authenticated</a>.
                            </li>
                        </ul>
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec13">Präsenzen in sozialen Netzwerken</Typography>
                    <Typography>
                        Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu kommunizieren oder um Informationen über uns anzubieten.<br />
                        <br />
                        Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im Hinblick auf US-Anbieter, die unter dem Privacy-Shield zertifiziert sind oder vergleichbare Garantien eines sicheren Datenschutzniveaus bieten, weisen wir darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU einzuhalten.<br />
                        <br />
                        Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).<br />
                        <br />
                        Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.<br />
                        <br />
                        Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.<nr />
                        <br />
                        <ul>
                            <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
                            <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                            <li><strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und Kommunikation, Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von Cookies), Remarketing, Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher).</li>
                            <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
                        </ul><br />
                        <br />
                        <strong>Eingesetzte Dienste und Diensteanbieter:</strong><br />
                        <ul>
                            <li><strong>Instagram </strong>: Soziales Netzwerk; Dienstanbieter: Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA; Website: <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">https://www.instagram.com</a>; Datenschutzerklärung: <a href="https://instagram.com/about/legal/privacy" target="_blank" rel="noopener noreferrer">https://instagram.com/about/legal/privacy</a>.</li>
                            <li><strong>Facebook:</strong> Soziales Netzwerk; Dienstanbieter: Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland, Mutterunternehmen: Facebook, 1 Hacker Way, Menlo Park, CA 94025, USA; Website: <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">https://www.facebook.com</a>; Datenschutzerklärung: <a href="https://www.facebook.com/about/privacy" target="_blank" rel="noopener noreferrer">https://www.facebook.com/about/privacy</a>; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active" target="_blank" rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active</a>; Widerspruchsmöglichkeit (Opt-Out): Einstellungen für Werbeanzeigen: <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer">https://www.facebook.com/settings?tab=ads</a>; Zusätzliche Hinweise zum Datenschutz: Vereinbarung über gemeinsame Verarbeitung personenbezogener Daten auf Facebook-Seiten: <a href="https://www.facebook.com/legal/terms/page_controller_addendum" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/terms/page_controller_addendum</a>, Datenschutzhinweise für Facebook-Seiten: <a href="https://www.facebook.com/legal/terms/information_about_page_insights_data" target="_blank" rel="noopener noreferrer">https://www.facebook.com/legal/terms/information_about_page_insights_data</a>.</li>
                            <li><strong>Twitter:</strong> Soziales Netzwerk; Dienstanbieter: Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA; Datenschutzerklärung: <a href="https://twitter.com/de/privacy" target="_blank" rel="noopener noreferrer">https://twitter.com/de/privacy</a>, (Einstellungen) <a href="https://twitter.com/personalization" target="_blank" rel="noopener noreferrer">https://twitter.com/personalization</a>; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active" target="_blank" rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active</a>.</li>
                        </ul>
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec14">Plugins und eingebettete Funktionen sowie Inhalte</Typography>
                    <Typography>
                        Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend bezeichnet als "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder Social-Media-Schaltflächen sowie Beiträge handeln (nachfolgend einheitlich bezeichnet als "Inhalte”).<br />
                        <br />
                        Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons" bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten dieser Webseite, ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und zum Betriebssystem, zu verweisenden Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten als auch mit solchen Informationen aus anderen Quellen verbunden werden.<br />
                        <br />
                        <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um deren Einwilligung in den Einsatz der Drittanbieter bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten werden die Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.<br />
                        <br></br>
                        <ul>
                            <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen), Standortdaten (Daten, die den Standort des Endgeräts eines Endnutzers angeben).</li>
                            <li><strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                            <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit, Vertragliche Leistungen und Service.</li>
                            <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).</li>
                        </ul><br />
                        <br />
                        <strong>Eingesetzte Dienste und Diensteanbieter:</strong><br />
                        <ul>
                            <li><strong>Google Fonts:</strong> Wir binden die Schriftarten ("Google Fonts") des Anbieters Google ein, wobei die Daten der Nutzer allein zu Zwecken der Darstellung der Schriftarten im Browser der Nutzer verwendet werden. Die Einbindung erfolgt auf Grundlage unserer berechtigten Interessen an einer technisch sicheren, wartungsfreien und effizienten Nutzung von Schriftarten, deren einheitlicher Darstellung sowie unter Berücksichtigung möglicher lizenzrechtlicher Restriktionen für deren Einbindung. Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; Website: <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">https://fonts.google.com/</a>; Datenschutzerklärung: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" target="_blank" rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a>.</li>
                            <li><strong>Google Maps:</strong> Wir binden die Landkarten des Dienstes “Google Maps” des Anbieters Google ein. Zu den verarbeiteten Daten können insbesondere IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer Mobilgeräte vollzogen), erhoben werden; Dienstanbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; Website: <a href="https://cloud.google.com/maps-platform" target="_blank" rel="noopener noreferrer">https://cloud.google.com/maps-platform</a>; Datenschutzerklärung: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA): <a href="https://www.privacyshield.gov/participant?id=a2zt0000000TRkEAAW&status=Active" target="_blank" rel="noopener noreferrer">https://www.privacyshield.gov/participant?id=a2zt0000000TRkEAAW&status=Active</a>; Widerspruchsmöglichkeit (Opt-Out): Opt-Out-Plugin: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>, Einstellungen für die Darstellung von Werbeeinblendungen: <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener noreferrer">https://adssettings.google.com/authenticated</a>.</li>
                        </ul>
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec15">Löschung von Daten</Typography>
                    <Typography>
                        Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B., wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).<br />
                        <br />
                        Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.<br />
                        <br />
                        Weitere Hinweise zu der Löschung von personenbezogenen Daten können ferner im Rahmen der einzelnen Datenschutzhinweise dieser Datenschutzerklärung erfolgen.
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec16">Änderung und Aktualisierung der Datenschutzerklärung</Typography>
                    <Typography>
                        Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.<br />
                        <br />
                        Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec17">Rechte der betroffenen Personen</Typography>
                    <Typography>
                        Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 18 und 21 DSGVO ergeben:<br />
                        <ul>
                            <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.</li>
                            <li><strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
                            <li><strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.</li>
                            <li><strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li>
                            <li><strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.</li>
                            <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.</li>
                            <li><strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes Beschwerde einzulegen, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.</li>
                        </ul>
                    </Typography>
                    <br /><br />

                    <Typography variant="h4" component="h3" gutterBottom id="sec18">Begriffsdefinitionen</Typography>
                    <Typography>
                        In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind verbindlich. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen. Die Begriffe sind alphabetisch sortiert.<br />
                        <br />
                        <ul>
                            <li><strong>Besuchsaktionsauswertung:</strong> "Besuchsaktionsauswertung" (englisch "Conversion Tracking") bezeichnet ein Verfahren, mit dem die Wirksamkeit von Marketingmaßnahmen festgestellt werden kann. Dazu wird im Regelfall ein Cookie auf den Geräten der Nutzer innerhalb der Webseiten, auf denen die Marketingmaßnahmen erfolgen, gespeichert und dann erneut auf der Zielwebseite abgerufen. Beispielsweise können wir so nachvollziehen, ob die von uns auf anderen Webseiten geschalteten Anzeigen erfolgreich waren).</li>
                            <li><strong>IP-Masking:</strong> Als "IP-Masking” wird eine Methode bezeichnet, bei der das letzte Oktett, d.h., die letzten beiden Zahlen einer IP-Adresse, gelöscht wird, damit die IP-Adresse nicht mehr der eindeutigen Identifizierung einer Person dienen kann. Daher ist das IP-Masking ein Mittel zur Pseudonymisierung von Verarbeitungsverfahren, insbesondere im Onlinemarketing</li>
                            <li><strong>Interessenbasiertes und verhaltensbezogenes Marketing:</strong> Von interessens- und/oder verhaltensbezogenem Marketing spricht man, wenn potentielle Interessen von Nutzern an Anzeigen und sonstigen Inhalten möglichst genau vorbestimmt werden. Dies geschieht anhand von Angaben zu deren Vorverhalten (z.B. Aufsuchen von bestimmten Webseiten und Verweilen auf diesen, Kaufverhaltens oder Interaktion mit anderen Nutzern), die in einem sogenannten Profil gespeichert werden. Zu diesen Zwecken werden im Regelfall Cookies eingesetzt.</li>
                            <li><strong>Konversionsmessung:</strong> Die Konversionsmessung ist ein Verfahren, mit dem die Wirksamkeit von Marketingmaßnahmen festgestellt werden kann. Dazu wird im Regelfall ein Cookie auf den Geräten der Nutzer innerhalb der Webseiten, auf denen die Marketingmaßnahmen erfolgen, gespeichert und dann erneut auf der Zielwebseite abgerufen. Beispielsweise können wir so nachvollziehen, ob die von uns auf anderen Webseiten geschalteten Anzeigen erfolgreich waren.</li>
                            <li><strong>Personenbezogene Daten:</strong> "Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden "betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.</li>
                            <li><strong>Profiling:</strong> Als "Profiling“ wird jede Art der automatisierten Verarbeitung personenbezogener Daten bezeichnet, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen (je nach Art des Profilings gehören dazu Informationen betreffend das Alter, das Geschlecht, Standortdaten und Bewegungsdaten, Interaktion mit Webseiten und deren Inhalten, Einkaufsverhalten, soziale Interaktionen mit anderen Menschen) zu analysieren, zu bewerten oder, um sie vorherzusagen (z.B. die Interessen an bestimmten Inhalten oder Produkten, das Klickverhalten auf einer Webseite oder den Aufenthaltsort). Zu Zwecken des Profilings werden häufig Cookies und Web-Beacons eingesetzt.</li>
                            <li><strong>Reichweitenmessung:</strong> Die Reichweitenmessung (auch als Web Analytics bezeichnet) dient der Auswertung der Besucherströme eines Onlineangebotes und kann das Verhalten oder Interessen der Besucher an bestimmten Informationen, wie z.B. Inhalten von Webseiten, umfassen. Mit Hilfe der Reichweitenanalyse können Webseiteninhaber z.B. erkennen, zu welcher Zeit Besucher ihre Webseite besuchen und für welche Inhalte sie sich interessieren. Dadurch können sie z.B. die Inhalte der Webseite besser an die Bedürfnisse ihrer Besucher anpassen. Zu Zwecken der Reichweitenanalyse werden häufig pseudonyme Cookies und Web-Beacons eingesetzt, um wiederkehrende Besucher zu erkennen und so genauere Analysen zur Nutzung eines Onlineangebotes zu erhalten.</li>
                            <li><strong>Remarketing:</strong> Vom "Remarketing“ bzw. "Retargeting“ spricht man, wenn z.B. zu Werbezwecken vermerkt wird, für welche Produkte sich ein Nutzer auf einer Webseite interessiert hat, um den Nutzer auf anderen Webseiten an diese Produkte, z.B. in Werbeanzeigen, zu erinnern.</li>
                            <li><strong>Tracking:</strong> Vom "Tracking“ spricht man, wenn das Verhalten von Nutzern über mehrere Onlineangebote hinweg nachvollzogen werden kann. Im Regelfall werden im Hinblick auf die genutzten Onlineangebote Verhaltens- und Interessensinformationen in Cookies oder auf Servern der Anbieter der Trackingtechnologien gespeichert (sogenanntes Profiling). Diese Informationen können anschließend z.B. eingesetzt werden, um den Nutzern Werbeanzeigen anzuzeigen, die voraussichtlich deren Interessen entsprechen.</li>
                            <li><strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.</li>
                            <li><strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.</li>
                        </ul>
                    </Typography>
                </Container>

                <Footer />
            </>
        );
    }
}
