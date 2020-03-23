import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import SearchSection from './SearchSection.jsx';
import AboutSection from './AboutSection.jsx';
import HowItWorksSection from './HowItWorksSection.jsx';
import TogetherSection from './TogetherSection.jsx';

import { 
    Collapse,
    Snackbar,
    IconButton,
    Icon,
} from '@material-ui/core';

import './HomePage.scss';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showContent: true,
            showRegisterSuccess: false,
        }
    }

    componentDidMount() {
        if (window.location.search.includes('registerSuccess')) {
            this.setState({ showRegisterSuccess: true });
        }
    }

    focusSearch() {
        document.querySelector('.kr-location-search--input input').focus();
    }

    onSearch() {
        this.setState({ showContent: false });
    }

    onSearchEnd() {
        this.setState({ showContent: true });
    }

    handleClose() {
        this.setState({ showRegisterSuccess: false });
    }

    render() {
        return (
            <>
                <Navigation hideLogo={true} />
                
                <SearchSection onSearchEnd={e => this.onSearchEnd()} onSearch={e => this.onSearch()} showKiez={this.state.showContent} />

                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={this.state.showRegisterSuccess} 
                    autoHideDuration={6000} 
                    onClose={this.handleClose.bind(this)}
                    message="Danke für die Anmeldung, bald kann dein Kiez dich supporten! Wir überprüfen deine Angaben und melden uns in Kürze bei dir."
                    className="kr-homepage--success-message"
                    action={
                        <>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose.bind(this)}>
                                <Icon>close</Icon>
                            </IconButton>
                        </>
                    }
                />
                
                <Collapse in={this.state.showContent}>
                    <AboutSection />
                    <HowItWorksSection onClickHelp={e => this.focusSearch()} />
                    <TogetherSection />
                </Collapse>

                <Footer />
            </>
        )
    }
}
