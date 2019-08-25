import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {successResponseMock} from './../mockData/mocks';
import {GET_PLACES_SUCCESS} from './types';

const GetPlacesSuccess = (places) => ({
    type: GET_PLACES_SUCCESS,
    places: places
})

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

describe('Action creators', () => {
    it('creates GET_PLACES_SUCCESS when getting places was successful', () => {
        store.dispatch(GetPlacesSuccess({
            successResponseMock
        }));
        expect(store.getActions()).toMatchSnapshot();
    })
})

