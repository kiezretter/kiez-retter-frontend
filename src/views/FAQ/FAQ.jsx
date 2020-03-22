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

const faqQuestions = [
    {
        question: 'Hallo Welt?',
        answer: 'Ja bitte!'
    },
    {
        question: 'Rettet ihr auch meinen Kiez?',
        answer: 'Na auf jeden Fall!'
    },
    {
        question: 'Wer seid ihr?',
        answer: 'Ganz tolle Menschen!'
    }
];

export default class FAQView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: null,
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

    renderQuestions() {
        return faqQuestions.map((item, index) => (
            <ExpansionPanel key={`question-${index}`} expanded={this.state.expanded === `question-${index}`} onChange={this.handleChange.bind(this, `question-${index}`)}>
                <ExpansionPanelSummary
                    expandIcon={<Icon>expand_more</Icon>}
                    aria-controls={`question-${index}-content`}
                    id={`question-${index}-header`}
                >
                    <Typography variant="subtitle2">{item.question}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>{item.answer}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        ))
    }

    render() {
        return (
            <>
                <Navigation />

                <Container maxWidth="md" className="kr-faq">
                    <Typography variant="h2" gutterBottom>FAQ</Typography>
                    
                    {this.renderQuestions()}
                </Container>

                <Footer />
            </>
        );
    }
}
