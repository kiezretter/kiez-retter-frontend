import React from 'react';
import {
  Container
} from '@material-ui/core'
import RegistrationForm from "./RegistrationForm";

const RegistrationPage = () => {
  return (
    <Container>
      <h1>Registration Page</h1>
      <RegistrationForm />
    </Container>
  )
}

export default RegistrationPage;
