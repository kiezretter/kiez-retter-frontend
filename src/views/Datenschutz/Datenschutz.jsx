import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import Markdown from 'react-markdown';
import dsPath from './Datenschutz.md';

import {
    Container,
    Typography,
} from '@material-ui/core';

import './Datenschutz.scss';

class MyHeadingRenderer extends React.Component {
    constructor(props, context) {
        super(props, context)
        switch(props.level) {
            case 2:
                this.variant = "h2"
                break
            case 3:
                this.variant = "h3"
                break
            case 4:
                this.variant = "h4"
                break
            case 5:
                this.variant = "h5"
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

export default class DatenschutzView extends React.Component {
    constructor(props, context) {
        super(props, context)
        
        this.state = { ds: null }
        
        this.linkTarget = function (url, text, title) {
            if (url.startsWith("#")) {
                return ""
            } else {
                return "_blank"
            }
        }
        
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
        fetch(dsPath).then((response) => response.text())
            .then((text) => { this.setState({ ds: text }) })
    }
    render() {
        return (
            <>
                <Navigation />

                <Container maxWidth="md" className="kr-datenschutz">
                    <div>
                        <Markdown
                            escapeHtml = {false}
                            linkTarget = {this.linkTarget}
                            renderers = {this.renderers}
                            source = {this.state.ds} />
                    </div>
                </Container>

                <Footer />
            </>
        );
    }
}
