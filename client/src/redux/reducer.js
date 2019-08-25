import { combineReducers } from 'redux';
import {GET_PLACES_PENDING, GET_PLACES_ERROR, GET_PLACES_SUCCESS} from './types';

const initialState = {
  pending: false,
  places: [],
  error: null
};

const getPlacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACES_PENDING:
        return {
            ...state,
            pending: true
        };
    case GET_PLACES_ERROR:
        return {
            ...state,
            pending: false,
            error: action.error
        }
    case GET_PLACES_SUCCESS:
        return {
            ...state,
            pending:false,
            places: action.places
        }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  places: getPlacesReducer
})

export default rootReducer;