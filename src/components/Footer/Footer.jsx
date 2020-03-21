import React from 'react';

import {
    Typography,
    Link,
} from '@material-ui/core';

import './Footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="kr-footer">
                <Link className="kr-footer--link" href="/">
                    Impressum
                </Link>
                <Link className="kr-footer--link" href="/inhaber">
                    Datenschutz
                </Link>
                <Link className="kr-footer--link" href="/kiezretter">
                    AGB
                </Link>
                <Link className="kr-footer--link" href="/ueberuns">
                    Hilfe
                </Link>
            </div>
        );
    }
}