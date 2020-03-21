/*global google*/

import React, {useState} from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useHistory } from 'react-router-dom';
import { useStoreContext } from "../../context/StoreContext";

import { 
  Grid,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@material-ui/core';

import './LocationSearchInput.scss';

const locationTypeIcons = {
  bar: 'local_bar',
  restaurant: 'restaurant',
  grocery_or_supermarket: 'local_grocery_store',
  default: 'location_on',
};
 
const LocationSearchInput = () => {
  const history = useHistory();
  const [address, setAddress] = useState('');
  const berlin = new google.maps.LatLng(52.50888, 13.396647);
  const { setPlaceId } = useStoreContext();

  const goToKiez = (latLng) => {
    history.push(`/kiez?lat=${latLng.lat}&lng=${latLng.lng}`);
  }
  
  const handleSelect = (input) => {
    geocodeByAddress(input)
      .then(results => {
        setPlaceId(results[0].place_id);
        return getLatLng(results[0]);
      })
      .then(latLng => goToKiez(latLng))
      .catch(error => console.error('Error', error));
  };

  const searchOptions = {
    location: berlin,
    radius: 20000,
  }

  const getGeolocation = () => {
    if (!navigator.geolocation) {
      alert('Sorry, dein Browser erlaubt keine Abfrage deines Ortes - benutz doch unsere Suchfunktion!');
    } else {
      navigator.geolocation.getCurrentPosition(getGeolocationSuccess, alert);
    }
  };

  const getGeolocationSuccess = (position) => {
    console.log('got location!', position.coords);
    goToKiez({ lat: position.coords.latitude, lng: position.coords.longitude });
  }

  const renderResultList = (loading, suggestions, getSuggestionItemProps) => {
    let results = <ListItem><ListItemText primary="Suche Ergebnisse für dich..." /></ListItem>;

    if (suggestions.length) {
      results = suggestions.map(suggestion => {
        let className = 'kr-location-search--autocomplete-item';
        if (suggestion.active) className += ' kr-location-search--autocomplete-item__active';

        console.log('suggestion', suggestion.types);
        let locationIcon;

        for(let type of suggestion.types) {
          if (locationTypeIcons[type]) {
            locationIcon = locationTypeIcons[type];
            break;
          }
        }

        if (!locationIcon) console.log('no icon found', suggestion.types);
        if (!locationIcon) locationIcon = locationTypeIcons['default'];

        return (
          <ListItem
            button
            {...getSuggestionItemProps(suggestion, {
              className,
            })}
          >
            <ListItemIcon>
              <Icon>{locationIcon}</Icon>
            </ListItemIcon>
            <ListItemText primary={suggestion.description} />
          </ListItem>
        );
      });
    }

    return (
      <List component="nav">
        {results}
      </List>
    );
  }

  const renderResults = (loading, suggestions, getSuggestionItemProps) => {
    if (!loading && !suggestions.length) return null;

    return (
      <Paper variant="outlined" className="kr-location-search--autocomplete">
        {renderResultList(loading, suggestions, getSuggestionItemProps)}
      </Paper>
    );
  }

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs>
        <PlacesAutocomplete
          value={address}
          onChange={input => setAddress(input)}
          onSelect={input => handleSelect(input)}
          onError={e => console.log('error', e)}
          searchOptions={searchOptions}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="kr-location-search">
              <TextField 
                {...getInputProps({
                  label: 'Dein Lieblingsort',
                  variant: 'outlined',
                  className: 'kr-location-search--input',
                  fullWidth: true,
                  placeholder: 'Kiez, Stadtteil, Späti, Kneipe, Club, Laden, Restaurant...',
                })}
                InputProps={{
                  startAdornment: <InputAdornment position="start">
                    <Icon>search</Icon>
                  </InputAdornment>,
                }}
              />
              {renderResults(loading, suggestions, getSuggestionItemProps)}
            </div>
          )}
        </PlacesAutocomplete>
      </Grid>
      <Grid item xs={1}>
        <IconButton color="primary" component="span" onClick={e => getGeolocation()}>
          <Icon>location_on</Icon>
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default LocationSearchInput;