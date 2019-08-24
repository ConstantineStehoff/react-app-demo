import {GET_MOCK_PLACES_PENDING, GET_MOCK_PLACES_ERROR, GET_MOCK_PLACES_SUCCESS} from './types';

const initialState = {
    pending: false,
    places: [],
    error: null
};
  
const getMockPlacesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOCK_PLACES_PENDING:
          return {
              ...state,
              pending: true
          };
      case GET_MOCK_PLACES_ERROR:
          return {
              ...state,
              pending: false,
              error: action.error
          }
      case GET_MOCK_PLACES_SUCCESS:
          return {
              ...state,
              pending:false,
              places: action.places
          }
      default:
        return state;
    }
}

export { getMockPlacesReducer };