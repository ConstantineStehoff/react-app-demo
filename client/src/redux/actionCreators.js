import {GET_PLACES_PENDING, GET_PLACES_ERROR, GET_PLACES_SUCCESS} from './types';
import {GET_VENUES_BY_LOCATION_ENDPOINT} from './../config';

function GetPlacesPending(){
  console.log('Pending');
  return {
      type: GET_PLACES_PENDING
  }
}

function GetPlacesError(error){
  console.log('Error');
  return {
      type: GET_PLACES_ERROR,
      error: error
  }
}

function GetPlacesSuccess(places){
  console.log('Success');
  return {
      type: GET_PLACES_SUCCESS,
      places: places
  }
}

const getPlaces = (city, state, searchTerm) => {
  console.log('Trying to do the action');
  return (dispatch) => {
      dispatch(GetPlacesPending());
      fetch(GET_VENUES_BY_LOCATION_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({city: city, state: state, searchTerm: searchTerm})
        })
          .then(res => res.json())
          .then(data => {
              const message = JSON.parse(data.message);
              dispatch(GetPlacesSuccess(message.response.venues));
          })
      .catch(error => {
          dispatch(GetPlacesError(error));
      }) 
  }
}

export { getPlaces };