import { AppState, AppActionTypes,  GET_PLACES_PENDING, GET_PLACES_ERROR, GET_PLACES_SUCCESS} from './types';

import {TOGGLE_LOGO} from '../App/types';

const initialState: AppState = {
    pending: false,
    places: [],
    error: null,
    showLogo: false
};

export function appReducer(
  state = initialState,
  action: AppActionTypes
): AppState {
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
        case TOGGLE_LOGO:
            return {
                ...state,
                showLogo: !state.showLogo
        };
    default:
      return state;
  }
}

export const getPlacesSuccess = (state:AppState) => state.places;
export const getPlacesPending = (state:AppState) => state.pending;
export const getPlacesError = (state:AppState) => state.error;