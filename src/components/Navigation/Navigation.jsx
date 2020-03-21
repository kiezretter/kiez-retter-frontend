import React from 'react';

import {
    Typography,
    Link,
} from '@material-ui/core';

import './Navigation.scss';

export default class Navigation extends React.Component {
    render() {
        return (
            <Typography className="kr-nav" align="right">
                <Link className="kr-nav--link" href="/">
                    Home
                </Link>
                <Link className="kr-nav--link" href="/inhaber">
                    Inhaber
                </Link>
                <Link className="kr-nav--link" href="/kiezretter">
                    Kiezretter
                </Link>
                <Link className="kr-nav--link" href="/ueberuns">
                    Über uns
                </Link>
            </Typography>
        );
    }
}