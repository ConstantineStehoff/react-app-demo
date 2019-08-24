import {GetPlacesError, GetPlacesPending, GetPlacesSuccess} from '../store/Dashboard/actions';

const clientId = '3CQBBP2ULDOY3WXRLYEQJRCTGWUBTEXS323NVKZDKO3OXHC0';
const clientSecret = 'W43012DG5TOB0ZGPMCLIPKHLMASBYVXLUXTLJZHARNEGVGU4'; 
const limit = '2';

function getPlaces(){
    return (dispatch:any) => {
        dispatch(GetPlacesPending());
        fetch('https://api.foursquare.com/v2/venues/explore?client_id=' + clientId + '&client_secret=' + clientSecret + '&v=20180323&limit=' + limit + '&ll=40.7243,-74.0018&query=coffee')
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

export default getPlaces;