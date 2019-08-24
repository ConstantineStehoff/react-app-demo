import {GET_PLACES_PENDING, GET_PLACES_ERROR, GET_PLACES_SUCCESS} from './types';

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

const clientId = '';
const clientSecret = '';

// const limit = '2';

const URL = 'https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&client_id=' + clientId + '&client_secret=' + clientSecret;

function getPlaces(places){
  console.log('Trying to do the action');
  return (dispatch) => {
      dispatch(GetPlacesPending());
      fetch(URL)
          .then(res => res.json())
          .then(places => {
              console.log(places);
              dispatch(GetPlacesSuccess(places));
          })
      .catch(error => {
          dispatch(GetPlacesError(error));
      }) 
  }
}

export { getPlaces };