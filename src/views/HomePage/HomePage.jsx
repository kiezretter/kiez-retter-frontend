import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import SearchSection from './SearchSection.jsx';
import AboutSection from './AboutSection.jsx';
import HowItWorksSection from './HowItWorksSection.jsx';
import TogetherSection from './TogetherSection.jsx';

import { Collapse } from '@material-ui/core';

import './HomePage.scss';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showContent: true,
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

    render() {
        return (
            <>
                <Navigation hideLogo={true} />
                
                <SearchSection onSearchEnd={e => this.onSearchEnd()} onSearch={e => this.onSearch()} />
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
