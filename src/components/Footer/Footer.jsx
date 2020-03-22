import React from 'react';

import {
    Link,
    Container,
} from '@material-ui/core';

import './Footer.scss';

export default class Footer extends React.Component {
    isActiveRoute(route) {
        return window.location.pathname === route;
    }

    getClassesForLink(route) {
        let classes = 'kr-footer--link';

        if (this.isActiveRoute(route)) {
            classes += ' kr-footer--link__active';
        }

        return classes;
    }

    render() {
        return (
            <Container maxWidth="sm" className="kr-footer">
                <Link className={this.getClassesForLink('/ueberuns')} href="/#ueberuns">
                    Über uns
                </Link>
                <Link className={this.getClassesForLink('/impressum')} href="/impressum">
                    Impressum
                </Link>
                <Link className={this.getClassesForLink('/datenschutz')} href="/datenschutz">
                    Datenschutz
                </Link>
                <Link className={this.getClassesForLink('/agb')} href="/agb">
                    AGB
                </Link>
                <Link className={this.getClassesForLink('/faq')} href="/faq">
                    FAQ
                </Link>
            </Container>
        );
    }
}