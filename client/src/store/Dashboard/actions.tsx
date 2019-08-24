import { GET_PLACES_PENDING, GET_PLACES_ERROR, GET_PLACES_SUCCESS } from './types';

// export function toggleLogo() {
//   return {
//     type: TOGGLE_LOGO
//   };
// }

export function GetPlacesPending(){
    console.log('Pending');
    return {
        type: GET_PLACES_PENDING
    }
}

export function GetPlacesError(error: any){
    console.log('Error');
    return {
        type: GET_PLACES_ERROR,
        error: error
    }
}

export function GetPlacesSuccess(places: any){
    console.log('Success');
    return {
        type: GET_PLACES_SUCCESS,
        places: places
    }
}

const clientId = '3CQBBP2ULDOY3WXRLYEQJRCTGWUBTEXS323NVKZDKO3OXHC0';
const clientSecret = 'V3W5NLX0A4RSYBBCSRVGL0HYVDEPCRL3DMNWYUUDH5BEKBUA&v=20190823'; 
// const limit = '2';

export function getPlaces(){
    console.log('Trying to do the action');
    return (dispatch:any) => {
        dispatch(GetPlacesPending());
        fetch('https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&client_id=' + clientId + '&client_secret=' + clientSecret)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch(GetPlacesSuccess(res.response));
                return res.products;
            })
        .catch(error => {
            dispatch(GetPlacesError(error));
        }) 
    }
}
