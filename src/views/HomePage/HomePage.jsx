import React from 'react';

import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import SearchSection from './SearchSection.jsx';
import AboutSection from './AboutSection.jsx';
import HowItWorksSection from './HowItWorksSection.jsx';
import TogetherSection from './TogetherSection.jsx';

import './HomePage.scss';

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        
        <SearchSection />
        <AboutSection />
        <HowItWorksSection />
        <TogetherSection />

        <Footer />
      </>
    )
  }
}
