import React from 'react';

import {
    Typography,
    Link,
    Container,
} from '@material-ui/core';

import './Navigation.scss';

export default class Navigation extends React.Component {
    isActiveRoute(route) {
        return window.location.pathname === route;
    }

    getClassesForLink(route) {
        let classes = 'kr-nav--link';

        if (this.isActiveRoute(route)) {
            classes += ' kr-nav--link__active';
        }

        return classes;
    }

    render() {
        return (
            <Container maxWidth="md">
                <Typography className="kr-nav" align="right">
                    <Link className={this.getClassesForLink('/')} href="/">
                        Home
                    </Link>
                    <Link className={this.getClassesForLink('/inhaber')} href="/inhaber">
                        Inhaber
                    </Link>
                    <Link className={this.getClassesForLink('/kiezretter')} href="/kiezretter">
                        Kiezretter
                    </Link>
                </Typography>
            </Container>
        );
    }
}