import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  FormControl,
  Select,
  TextField,
  Button,
  Container,
  Slider,
  Grid
} from '@material-ui/core';
import FileUpload from '../../components/Form/FileUpload'


const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minWidth: 120,
    display: 'flex',
  },
  h1: {
    marginTop: theme.spacing(3),
  },
}));


const marks = [
  {
    value: 0,
    label: '2,50 €',
  },
  {
    value: 50,
    label: '5,00 €',
  },
  {
    value: 100,
    label: '10,00 €',
  },
];

function valueText(value) {
  console.log('CL: valueText -> value', value)
  return `${value} €`;
}

function valueLabelFormat(value) {
  // const index = marks.findIndex(mark => mark.value === value);
  return ''// marks[index].label
}

const RegistrationForm = () => {
  const classes = useStyles();
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
            <h1 className={classes.h1}>Inhaber</h1>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl className={classes.formControl}>
              <FileUpload label="Foto hochladen" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="gender">Titel</InputLabel>
              <Select
                native
              >
                <option aria-label="None" value="" />
                <option value={'Frau'}>Frau</option>
                <option value={'Herr'}>Herr</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField id="standard-basic" label="Vorname" />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField id="standard-basic" label="Nachname" />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField id="standard-basic" label="Spitzname" />
            </FormControl>
            <FormControl className={classes.formControl}>
              <Button
                variant="contained"
                component="label"
              >
                <i className="material-icons">cloud_upload</i>&nbsp;Gewerbeschein
            <input
                  type="file"
                  style={{ display: "none" }}
                />
              </Button>
            </FormControl>
            <FormControl className={classes.formControl}>
              <Button
                variant="contained"
                component="label"
              >
                <i className="material-icons">cloud_upload</i>&nbsp;Personalausweis
            <input
                  type="file"
                  style={{ display: "none" }}
                />
              </Button>
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
            <h1 className={classes.h1}>Lieblingsort</h1>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl className={classes.formControl}>
              <FileUpload label="Foto hochladen" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>
              Muster Shop<br />
            Hauptstr. 5<br />
            12345 Berlin
          </p>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="storeType">Geschäftstype</InputLabel>
              <Select
                native
                id="storeType"
              >
                <option aria-label="None" value="" />
                <option value={'Kneipe'}>Kneipe</option>
                <option value={'Bar'}>Bar</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            justify="flex-start"
            alignItems="center"
            container
            spacing={3}
          >

            <Grid item xs={12}>

              <h1 className={classes.h1}>Rettungs-Aufruf</h1>
            </Grid>
            <Grid item xs={12} sm={6}>

              <FormControl className={classes.formControl}>
                <TextField
                  id="date"
                  label="Gültig von"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  id="date"
                  label="Gültig bis"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  variant="outlined"
                  placeholder="Hier den Text für Deinen Rettungsaufruf eingeben"
                  label="Rettungs aufruf"
                  multiline
                  rows={4}
                  rowsMax={8}
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
              <h1 className={classes.h1}>Spendenvorschlag</h1>
            </Grid>
            <Grid item xs={12} sm={6}>

              <FormControl className={classes.formControl}>
                <Slider
                  className={classes.formControl}
                  defaultValue={0}
                  valueLabelFormat={valueLabelFormat}
                  getAriaValueText={valueText}
                  aria-labelledby="discrete-slider-custom"
                  step={50}
                  valueLabelDisplay="on"
                  marks={marks}
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
              <h1 className={classes.h1}>Dankeschön</h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  variant="outlined"
                  placeholder="Hier den Danke-Text für Spenden eingeben"
                  label="Dankeschön"
                  multiline
                  rows={4}
                  rowsMax={8}
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
            <Grid item xs={12} sm={2}>
              <Button
                variant="contained"
                color="primary"
                component="label"
              >
                Registrieren
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                component="label"
                color="secondary"
              >
                Abbrechen
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container >
  )
}

export default RegistrationForm;