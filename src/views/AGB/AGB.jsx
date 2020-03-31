import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import Markdown from 'react-markdown';
import agbPath from './AGB.md';

import {
    Container,
    Typography
} from '@material-ui/core';

import './AGB.scss';

class MyHeadingRenderer extends React.Component {
    constructor(props, context) {
        super(props, context)
        switch(props.level) {
            case 1:
                this.variant = "h2"
                break
            case 2:
                this.variant = "h5"
                break
            case 3:
                this.variant = "h6"
                break
            default:
                this.variant = "body1"
                break
        }
        this.children = props.children
    }
    render() {
        return (<Typography variant={this.variant} gutterBottom={true}>
                    {this.children}
                </Typography>)
    }
}

export default class AGBView extends React.Component {
    constructor(props, context) {
        super(props, context)
        
        this.state = { agb: null }
        
        this.renderers = {
            heading: MyHeadingRenderer,
            paragraph: props => (
                <Typography paragraph={true}>
                    {props.children}
                </Typography>
            ),
            list: props => (<ul className="ulist">{props.children}</ul>),
            listItem: props => (
                <li>
                    <Typography>
                        {props.children}
                    </Typography>
                </li>),
        }
    }
    
    componentDidMount() {
        fetch(agbPath).then((response) => response.text())
            .then((text) => { this.setState({ agb: text }) })
    }
    
    render() {
        return (
            <>
                <Navigation />
                <Container maxWidth="md" className="kr-agb">
                    <div>
                        <Markdown
                            renderers = {this.renderers}
                            source={this.state.agb} />
                    </div>
                </Container>
                <Footer />
            </>
        );
    }
}
