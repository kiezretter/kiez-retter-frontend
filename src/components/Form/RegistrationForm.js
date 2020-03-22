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
import FileUpload from './FileUpload'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.form = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleFormSend = this.handleFormSend.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })

  }

  handleFileUpload(data) {
    this.setState({
      [data.name]: data.file
    })
  }

  handleFormSend(evt) {
    evt.preventDefault();
    console.log('this.state', this.state)
    const data = {
      'gmap_id': "huisdfhuias7sadyf7s8dyd",
      name: this.state.name,
      "lng": 13.4590208,
      "lat": 52.5097213,
      phone_number: "0302911937",
      street_address: "Krossener Str. 24",
      postcode: "10245",
      city: "Berlin",
      personal_message: this.state.personal_message,
      personal_thank_you: this.state.personal_thank_you,
      business_type_id: this.state.business_type_id,
      owner: {
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        salutation: this.state.salutation,
        nick_name: this.state.nick_name,
        paypal_handle: this.state.paypal_handle
      }
    }
    console.log('CL: RegistrationForm -> handleFormSend -> data', data)
  }

  handleFormCancel(evt) {
    evt.preventDefault();
    this.state = {};
    this.form.current.reset();
    console.log('handleFormCancel => ', evt)
  }

  render() {
    return (
      // <Container>
      <form ref={this.form}>
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
              <FileUpload name="owner_image" label="Foto hochladen" showImagePreview onChange={this.handleFileUpload} />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className="form-control">
              <InputLabel htmlFor="title">Titel</InputLabel>
              <Select
                native
                name="salutation"
                onChange={this.handleChange}
              >
                <option aria-label="None" value="" />
                <option value={'Frau'}>Frau</option>
                <option value={'Herr'}>Herr</option>
              </Select>
            </FormControl>
            <FormControl className="form-control">
              <TextField name="first_name" id="standard-basic" label="Vorname" onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField name="last_name" id="standard-basic" label="Nachname" onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField name="nick_name" id="standard-basic" label="Spitzname" onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField type="email" name="email" id="standard-basic" label="Email" onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField name="paypal_handle" id="standard-basic" label="Paypal Name" onChange={this.handleChange} />
            </FormControl>

            <Grid container spacing={3} className="upload-button">
              <Grid item xs={12} md={6}>
                <FormControl className="form-control">
                  <FileUpload name="trade_licence_image" label="Gewerbeschein" onChange={this.handleFileUpload} />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl className="form-control">
                  <FileUpload name="id_card_image" label="Personalausweis" onChange={this.handleFileUpload} />
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
              <FileUpload name="favorite_place_image" label="Foto hochladen" showImagePreview onChange={this.handleFileUpload} />
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
                name="business_type_id"
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
                name="personal_message"
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
                name="personal_thank_you"
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
      // </Container >
    )
  }
}

export default RegistrationForm;