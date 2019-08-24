// Constants definitions
export const TOGGLE_LOGO = 'TOGGLE_LOGO';
export const GET_PLACES_PENDING = 'GET_PLACES_PENDING';
export const GET_PLACES_ERROR = 'GET_PLACES_ERROR';
export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';

// State of Application
export interface AppState {
    pending?: boolean;
    places?: any;
    error?: any;
    showLogo: boolean;
}

interface GetPlacesPendingAction {
    type: typeof GET_PLACES_PENDING,
    pending: boolean;
}

interface GetPlacesErrorAction {
    type: typeof GET_PLACES_ERROR,
    pending: boolean;
    error: any;
}

interface GetPlacesSuccessAction {
    type: typeof GET_PLACES_SUCCESS,
    pending: boolean;
    places: any;
}

// Action Type
interface ToggleLogoAction {
  type: typeof TOGGLE_LOGO;
}

// Bulk Exported action types. Add new actions by adding "| <new action>"
export type AppActionTypes = ToggleLogoAction | GetPlacesPendingAction | GetPlacesErrorAction | GetPlacesSuccessAction;
