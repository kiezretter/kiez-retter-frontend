import React from 'react'
import {
  InputLabel,
  FormControl,
  Select,
  TextField,
  Button,
  Container,
  Grid
} from '@material-ui/core';
import './RegistrationForm.scss';
import FileUpload from '../../components/Form/FileUpload'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSend = this.handleFormSend.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })

  }

  handleFileUpload(evt) {
    console.log('CL: RegistrationForm -> handleFileUpload -> evt', evt)

  }

  handleFormSend(evt) {
    evt.preventDefault();
    console.log('this.state', this.state)
  }

  handleFormCancel(evt) {
    evt.preventDefault();
    console.log('CL: handleFormCancel -> evt', evt)
  }

  render() {
    return (
      <Container>
        <form>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <h2 className="h2">Inhaber</h2>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl className="form-control">
                <FileUpload name="ownerImage" label="Foto hochladen" showImagePreview onChange={this.handleFileUpload} />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className="form-control">
                <InputLabel htmlFor="title">Titel</InputLabel>
                <Select
                  native
                  name="title"
                  onChange={this.handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={'Frau'}>Frau</option>
                  <option value={'Herr'}>Herr</option>
                </Select>
              </FormControl>
              <FormControl className="form-control">
                <TextField name="firstName" id="standard-basic" label="Vorname" onChange={this.handleChange} />
              </FormControl>
              <FormControl className="form-control">
                <TextField name="surname" id="standard-basic" label="Nachname" onChange={this.handleChange} />
              </FormControl>
              <FormControl className="form-control">
                <TextField name="paypalHandle" id="standard-basic" label="Paypal Name" onChange={this.handleChange} />
              </FormControl>

              <Grid container spacing={3} className="upload-button">
                <Grid item xs={12} md={6}>
                  <FormControl className="form-control">
                    <FileUpload name="ownerImage" label="Gewerbeschein" onChange={this.handleFileUpload} />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl className="form-control">
                    <FileUpload name="ownerImage" label="Personalausweis" onChange={this.handleFileUpload} />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            justify="flex-start"
            alignItems="center"
            container
            spacing={3}
          >
            <Grid item xs={12}>
              <h2 className="h2">Lieblingsort</h2>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl className="form-control">
                <FileUpload label="Foto hochladen" showImagePreview />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <p>
                Muster Shop<br />
              Hauptstr. 5<br />
              12345 Berlin
            </p>
              <FormControl className="form-control">
                <InputLabel htmlFor="storeType">Geschäftstype</InputLabel>
                <Select
                  native
                  name="storeType"
                  onChange={this.handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={'Kneipe'}>Kneipe</option>
                  <option value={'Bar'}>Bar</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            justify="flex-start"
            alignItems="center"
            container
            spacing={3}
          >
            <Grid item xs={12}>
              <h2 className="h2">Rettungs-Aufruf</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className="form-control">
                <TextField
                  name="rescueCallText"
                  variant="outlined"
                  helperText="Hier den Text für Deinen Rettungsaufruf eingeben"
                  label="Rettungs aufruf"
                  multiline
                  rows={4}
                  rowsMax={8}
                  onChange={this.handleChange}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            justify="flex-start"
            alignItems="center"
            container spacing={3}
          >
            <Grid item xs={12}>
              <h2 className="h2">Dankeschön</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className="form-control">
                <TextField
                  name="thankYouText"
                  variant="outlined"
                  helperText="Hier den Danke-Text für Spenden eingeben"
                  label="Dankeschön"
                  multiline
                  rows={4}
                  rowsMax={8}
                  onChange={this.handleChange}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            justify="flex-start"
            alignItems="center"
            container
            spacing={3}
          >
            <Grid item xs={12} md={2}>
              <Button
                variant="contained"
                color="primary"
                component="label"
                onClick={this.handleFormSend}
              >
                Registrieren
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                component="label"
                color="secondary"
                onClick={this.handleFormCancel}
              >
                Abbrechen
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container >
    )
  }
}

export default RegistrationForm;