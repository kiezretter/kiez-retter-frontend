/*global google*/

import React, {useState} from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { useHistory } from 'react-router-dom';
import { useStoreContext } from "../../context/StoreContext";

import { TextField } from '@material-ui/core';
 
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

  return (
    <PlacesAutocomplete
      value={address}
      onChange={input => setAddress(input)}
      onSelect={input => handleSelect(input)}
      onError={e => console.log('error', e)}
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <TextField 
            {...getInputProps({
              label: 'Dein Lieblingsort',
              id: 'standard-basic',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Suche Ergebnisse für dich...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput;