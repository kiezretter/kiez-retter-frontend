import React from 'react';

import {
    Typography,
    Link,
    Container,
} from '@material-ui/core';

import LogoImage from '../../assets/images/logo_transparent.png';

import './Navigation.scss';

export default class Navigation extends React.Component {
    get classes() {
        let classes = 'kr-nav';

        if (this.props.bordered) classes += ' kr-nav__bordered';
        if (!this.props.hideLogo) classes += ' kr-nav__wide'

        return classes;
    }

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

    renderLogo() {
        if (this.props.hideLogo) return null;

        return (<a href="/" className="kr-nav--logo"><img src={LogoImage} alt="Kiezretter Logo" /></a>);
    }

    render() {
        return (
            <div className={this.classes}>
                <Container maxWidth="md">
                    {this.renderLogo()}
                    
                    <Typography className="kr-nav--list">
                        <Link className={this.getClassesForLink('/')} href="/">
                            Home
                        </Link>
                        <Link className={this.getClassesForLink('/ueberuns')} href="/ueberuns">
                            Über uns
                        </Link>
                        <Link className={this.getClassesForLink('/inhaber')} href="/inhaber">
                            Laden registrieren
                        </Link>
                        {/* <Link className={this.getClassesForLink('/kiezretter')} href="/kiezretter">
                            Kiezretter
                        </Link> */}
                    </Typography>
                </Container>
            </div>
        );
    }
}