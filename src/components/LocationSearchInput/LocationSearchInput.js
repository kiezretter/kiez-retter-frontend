/*global google*/

import React, {useState} from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useHistory } from 'react-router-dom';
import { useMarkerContext } from '../../context/MarkerContext';

import { 
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
  cafe: 'local_cafe',
  campground: 'fireplace',
  movie_theater: 'theaters',
  default: 'location_on',
};
 
let searchHasFocus = false;
let onSearchEmitted;

const LocationSearchInput = (props) => {
  const history = useHistory();
  const [, updateState] = React.useState();
  const [address, setAddress] = useState('');
  const [iconLoading, setIconLoading] = useState('');
  const berlin = new google.maps.LatLng(52.50888, 13.396647);
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const { setCurrentLocation } = useMarkerContext();

  const goToKiez = (latLng) => {
    history.push(`/kiez?lat=${latLng.lat}&lng=${latLng.lng}`);
    setCurrentLocation(latLng);
  }
  
  const handleSelect = (input) => {
    geocodeByAddress(input)
      .then(results => getLatLng(results[0]))
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
      setIconLoading(true);
      navigator.geolocation.getCurrentPosition(getGeolocationSuccess, alert);
    }
  };

  const getGeolocationSuccess = (position) => {
    goToKiez({ lat: position.coords.latitude, lng: position.coords.longitude });
  }

  const renderResultList = (suggestions, getSuggestionItemProps) => {
    let results = <ListItem><ListItemText primary="Suche Ergebnisse für dich..." /></ListItem>;

    if (suggestions.length) {
      results = suggestions.map(suggestion => {
        let className = 'kr-location-search--autocomplete-item';
        if (suggestion.active) className += ' kr-location-search--autocomplete-item__active';

        let locationIcon;

        for(let type of suggestion.types) {
          if (locationTypeIcons[type]) {
            locationIcon = locationTypeIcons[type];
            break;
          }
        }

        // if (!locationIcon) console.log('no icon found', suggestion.types);
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
    if (!loading && !suggestions.length) {
      return null;
    }

    if (!searchHasFocus) {
      return null;
    }

    if (props.onSearch && !onSearchEmitted) { 
      if (props.onSearch) props.onSearch();
      onSearchEmitted = true;
    }

    return (
      <Paper variant="outlined" className="kr-location-search--autocomplete">
        {renderResultList(suggestions, getSuggestionItemProps)}
      </Paper>
    );
  }

  const onBlurSearch = () => {
    searchHasFocus = false;
    onSearchEmitted = false;
    if (props.onSearchEnd) props.onSearchEnd();

    forceUpdate();
  }

  const onFocusSearch = () => {
    searchHasFocus = true;
  }

  const onChangeSearch = (e) => {
    if (!e.target.value && props.onSearchEnd) props.onSearchEnd();
  }

  return (
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
              fullWidth: true,
              placeholder: 'Kiez, Stadtteil, Späti, Kneipe, Club, Laden, Restaurant...',
            })}
            onBlur={e => onBlurSearch()}
            onFocus={e => onFocusSearch()}
            onKeyUp={onChangeSearch}
            className="kr-location-search--input"
            InputProps={{
              startAdornment: <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>,
              endAdornment: <InputAdornment position="end">
                <IconButton color="primary" component="span" onClick={e => getGeolocation()}>
                  <Icon className={ iconLoading && 'kr-location-search--icon__loading'}>location_on</Icon>
                </IconButton>
              </InputAdornment>,
            }}
          />
          {renderResults(loading, suggestions, getSuggestionItemProps)}
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput;