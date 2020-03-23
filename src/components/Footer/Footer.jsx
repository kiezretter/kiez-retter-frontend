import React from 'react';

import {
    Link,
    Container,
    Typography,
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
            <div className="kr-footer">
                <Container maxWidth="sm">
                    <Typography variant="body2" style={{ display: "flex",  flexWrap: "wrap", justifyContent: "center"}}>
                        <Link className={this.getClassesForLink('/ueberuns')} href="/ueberuns">
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
                    </Typography>
                </Container>
            </div>
        );
    }
}