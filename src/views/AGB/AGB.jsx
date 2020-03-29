import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import Markdown from 'react-markdown';
import agbPath from './AGB.md';

import {
    Container
} from '@material-ui/core';

import './AGB.scss';

export default class AGBView extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = { agb: null }
    }
    
    componentWillMount() {
        fetch(agbPath).then((response) => response.text())
            .then((text) => { this.setState({ agb: text }) })
    }
    
    render() {
        return (
            <>
                <Navigation />
                <Container maxWidth="md" className="kr-agb">
                    <div>
                        <Markdown source={this.state.agb} />
                    </div>
                </Container>
                <Footer />
            </>
        );
    }
}
