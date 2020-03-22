import React from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {
  InputLabel,
  FormControl,
  Select,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid
} from '@material-ui/core';
import './RegistrationForm.scss';
import FileUpload from './FileUpload'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agbChecked: false,
      isFormValid: false
    }
    this.form = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleFormSend = this.handleFormSend.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
  }

  validateForm() {
    if (this.state.gmap_id &&
      this.state.name &&
      this.state.street_address &&
      this.state.postcode &&
      this.state.city &&
      this.state.email &&
      this.state.trade_licence_image &&
      this.state.id_card_image &&
      this.state.name &&
      this.state.last_name &&
      this.state.paypal_handle &&
      this.state.agbChecked) {
      // All required fields are valid
      this.setState({ isFormValid: true })
    }
  }

  handleChange(evt) {
    if (evt.target.name === 'agbChecked') {
      this.setState({
        [evt.target.name]: evt.target.checked
      });
      this.validateForm();
    } else {
      this.setState({
        [evt.target.name]: evt.target.value
      });
      this.validateForm();
    }
    if (evt.target.name === 'street_address') {

      geocodeByAddress(evt.target.value)
        .then(results => {
          this.setState({
            gmap_id: results[0].place_id,
            lng: results[0].geometry.location.lng(),
            lat: results[0].geometry.location.lat()
          })
        })
        .catch(error => console.error('Error', error));

    }
    this.validateForm();
  }

  handleFileUpload(data) {
    this.setState({
      [data.name]: data.file
    })
  }

  handleFormSend(evt) {
    evt.preventDefault();
    const data = {
      gmap_id: this.state.gmap_id,
      name: this.state.name,
      lng: this.state.lng,
      lat: this.state.lat,
      phone_number: this.state.phone_number,
      street_address: this.state.street_address,
      postcode: this.state.postcode,
      city: this.state.city,
      personal_message: this.state.personal_message,
      personal_thank_you: this.state.personal_thank_you,
      business_type_id: this.state.business_type_id,
      favorite_place_image: {
        data: this.state.favorite_place_image
      },
      trade_certificate_attributes: {
        trade_licence_image: {
          data: this.state.trade_licence_image
        }
      },
      owner_attributes: {
        email: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        salutation: this.state.salutation,
        nick_name: this.state.nick_name,
        paypal_handle: this.state.paypal_handle,
        owner_image: {
          data: this.state.owner_image
        },
        id_card_image: {
          data: this.state.id_card_image
        }
      }
    }
    console.log('CL: RegistrationForm -> handleFormSend -> data', data)
  }

  handleFormCancel(evt) {
    evt.preventDefault();
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state = { agbChecked: false, isFormValid: false };
    this.form.current.reset();
  }

  render() {
    return (
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
              <p className="MuiFormHelperText-root MuiFormHelperText-contained">Hier kannst du optional ein Bild von dir in deinem Laden hochladen</p>
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
              <TextField name="first_name" id="standard-basic" label="Vorname" required onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField name="last_name" id="standard-basic" label="Nachname" required onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField name="nick_name" id="standard-basic" label="Spitzname" onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField type="email" name="email" id="standard-basic" label="Email" required onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField name="paypal_handle" id="standard-basic" label="Paypal Name" required onChange={this.handleChange} />
            </FormControl>

            <Grid container spacing={1} className="upload-button">
              <Grid item xs={12} md={6}>
                <FormControl className="form-control">
                  <FileUpload name="trade_licence_image" label="Gewerbeschein*" onChange={this.handleFileUpload} />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl className="form-control">
                  <FileUpload name="id_card_image" label="Personalausweis*" onChange={this.handleFileUpload} />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <p className="MuiFormHelperText-root MuiFormHelperText-contained">Diese Dokumente werden nach der Verifizierung wieder gelöscht.</p>
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
            <h2 className="h2">Dein Laden</h2>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className="form-control">
              <FileUpload name="favorite_place_image" label="Foto hochladen" showImagePreview onChange={this.handleFileUpload} />
              <p className="MuiFormHelperText-root MuiFormHelperText-contained">Hier kannst du ein Bild von deinem Laden hochladen</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className="form-control">
              <TextField name="name" id="standard-basic" label="Name" required onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField name="street_address" id="standard-basic" label="Straße" required onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField name="postcode" id="standard-basic" label="Postleitzahl" required onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <TextField name="city" id="standard-basic" label="Stadt" required onChange={this.handleChange} />
            </FormControl>
            <FormControl className="form-control">
              <InputLabel htmlFor="storeType">Kategorie</InputLabel>
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
            <FormControl className="form-control">
              <TextField name="phone_number" id="standard-basic" label="Telefon" onChange={this.handleChange} />
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
            <h2 className="h2">Rettungsaufruf</h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className="form-control">
              <TextField
                name="personal_message"
                variant="outlined"
                helperText="Lass die kiezretter wissen, wie deine aktuelle Situation ist und warum sie dich unterstützen sollen."
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
            <h2 className="h2">Dankeschön an deine Kiezretter</h2>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl className="form-control">
              <TextField
                name="personal_thank_you"
                variant="outlined"
                helperText="Hier kannst du dich mit einer Nachricht bei den Kiezrettern bedanken, die dich finanziell unterstützt haben."
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
          <Grid item xs={12}>
            <FormControl className="form-control">
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={this.handleChange}
                    name="agbChecked"
                    color="primary"
                    required
                  />
                }
                label={<span>Hiermit akzeptiere ich <a href="/agb">die AGBs*</a></span>}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              variant="contained"
              color="primary"
              component="label"
              disabled={!this.state.isFormValid}
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
    )
  }
}

export default RegistrationForm;