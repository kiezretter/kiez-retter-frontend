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
                <Link className="kr-footer--link" href="/ueberuns">
                    Über uns
                </Link>
                <Link className="kr-footer--link" href="/impressum">
                    Impressum
                </Link>
                <Link className="kr-footer--link" href="/datenschutz">
                    Datenschutz
                </Link>
                <Link className="kr-footer--link" href="/agb">
                    AGB
                </Link>
                <Link className="kr-footer--link" href="/faq">
                    FAQ
                </Link>
            </div>
        );
    }
}