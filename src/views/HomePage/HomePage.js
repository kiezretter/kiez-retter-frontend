import React from 'react';
import LocationSearchInput from '../../components/LocationSearchInput/LocationSearchInput';
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import { 
  Container,
} from '@material-ui/core';

import './HomePage.scss';

import KiezheroImage from '../../assets/images/kiezhero.png';

const HomePage = () => {
  return (
    <Container maxWidth="sm" className="kr-homepage">
      <Navigation />
      <div className="kr-homepage--search-container">
        <img src={KiezheroImage} className="kr-homepage--kiezhero" alt="logo" />
        <LocationSearchInput /> 
      </div>
      <Footer />
    </Container>
  )
}

export default HomePage;
