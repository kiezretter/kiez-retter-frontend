import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  FormControl,
  Select,
  TextField,
  Button,
  Container,
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
                  variant="outlined"
                  helperText="Hier den Text für Deinen Rettungsaufruf eingeben"
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
            container spacing={3}
          >
            <Grid item xs={12}>
              <h1 className={classes.h1}>Dankeschön</h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <TextField
                  variant="outlined"
                  helperText="Hier den Danke-Text für Spenden eingeben"
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