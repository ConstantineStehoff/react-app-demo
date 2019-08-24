import {GET_MOCK_PLACES_PENDING, GET_MOCK_PLACES_ERROR, GET_MOCK_PLACES_SUCCESS} from './types';

function GetMockPlacesPending(){
    console.log('Pending');
    return {
        type: GET_MOCK_PLACES_PENDING
    }
}
  
function GetMockPlacesError(error){
    console.log('Error');
    return {
        type: GET_MOCK_PLACES_ERROR,
        error: error,
        pending: false
    }
}
  
  function GetMockPlacesSuccess(places){
    console.log('Success');
    return {
        type: GET_MOCK_PLACES_SUCCESS,
        places: places,
        pending: false
    }
}

const URL = './mockResponse.json';

function getMockPlaces(city, state){
    console.log('Trying to do the action');
    return (dispatch) => {
        dispatch(GetMockPlacesPending());
        // fetch(URL)
        //   // .then(res => res.json())
        //   .then(places => {
        //       console.log(places);
        //       dispatch(GetMockPlacesSuccess(places));
        //   })
        // .catch(error => {
        //     dispatch(GetMockPlacesError(error));
        // }) 
        console.log('City and state are ' + city + ', ' + state);
        return new Promise((resolve) => {
            resolve(
                dispatch(GetMockPlacesSuccess([
                    {
                        "id": "4bcca12bb6c49c7422169491",
                        "name": "86th Floor Observation Deck",
                        "contact": {
                                "phone": "2127363100",
                                "formattedPhone": "(212) 736-3100"
                        },
                        "location": {
                            "address": "350 5th Ave",
                            "crossStreet": "btwn 33rd & 34th Sts",
                            "lat": 40.74844544481811,
                            "lng": -73.98568124187432,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.74844544481811,
                                    "lng": -73.98568124187432
                                }
                            ],
                            "distance": 5,
                            "postalCode": "10118",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "350 5th Ave (btwn 33rd & 34th Sts)",
                                "New York, NY 10118"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d165941735",
                                "name": "Scenic Lookout",
                                "pluralName": "Scenic Lookouts",
                                "shortName": "Scenic Lookout",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/sceniclookout_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 241,
                            "usersCount": 21468,
                            "checkinsCount": 23335
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "specials": {
                            "count": 0,
                            "items": []
                        },
                        "venuePage": {
                            "id": "64514350"
                        },
                        "hereNow": {
                            "count": 0,
                            "summary": "Nobody here",
                            "groups": []
                        },
                        "referralId": "v-1566626344",
                        "venueChains": [],
                        "hasPerk": false
                    },
                    {
                        "id": "43695300f964a5208c291fe3",
                        "name": "Empire State Building",
                        "contact": {
                            "phone": "2127363100",
                            "formattedPhone": "(212) 736-3100",
                            "twitter": "empirestatebldg",
                            "instagram": "empirestatebldg",
                            "facebook": "153817204635459",
                            "facebookUsername": "empirestatebuilding",
                            "facebookName": "Empire State Building"
                        },
                        "location": {
                            "address": "350 5th Ave",
                            "crossStreet": "btwn 33rd & 34th St",
                            "lat": 40.7485995507123,
                            "lng": -73.98580648682452,
                            "distance": 23,
                            "postalCode": "10118",
                            "cc": "US",
                            "neighborhood": "Midtown Manhattan, New York, NY",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "350 5th Ave (btwn 33rd & 34th St)",
                                "New York, NY 10118"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d130941735",
                                "name": "Building",
                                "pluralName": "Buildings",
                                "shortName": "Building",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 1157,
                            "usersCount": 138277,
                            "checkinsCount": 199576
                        },
                        "url": "https://www.esbnyc.com",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "specials": {
                            "count": 0,
                            "items": []
                        },
                        "venuePage": {
                            "id": "64514349"
                        },
                        "storeId": "",
                        "hereNow": {
                            "count": 2,
                            "summary": "2 people are here",
                            "groups": [
                                {
                                    "type": "others",
                                    "name": "Other people here",
                                    "count": 2,
                                    "items": []
                                }
                            ]
                        },
                        "referralId": "v-1566626344",
                        "venueChains": [],
                        "hasPerk": false
                    }
                ]))
            )
        });
    }
  }

export {getMockPlaces};