import React from 'react';
import {
  Container
} from '@material-ui/core'
import Navigation from '../../components/Navigation/Navigation.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import RegistrationForm from "./RegistrationForm";

const RegistrationPage = () => {
  return (
    <Container>
      <Navigation />
      <RegistrationForm />
      <Footer />
    </Container>
  )
}

export default RegistrationPage;
