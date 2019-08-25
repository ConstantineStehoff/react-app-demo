import reducer from './reducer';
import expect from 'expect';
import {GET_PLACES_PENDING, GET_PLACES_ERROR, GET_PLACES_SUCCESS} from './types';
import {successResponseMock} from './../mockData/mocks'; 

test('GetPlaces Reducer', () => {
    
    const initState = {
                            places: {
                                pending: false,
                                places: [],
                                error: null
                            }
                        };
    const initStateObj = reducer(undefined, {});
    
    // should return the initial state
    expect(initStateObj).toEqual(initState);
    
    const startAction = {
        type: GET_PLACES_PENDING
    }
    const pendingState = reducer(initState, startAction);
    
    //should handle GET_PLACES_PENDING
    expect(pendingState).toEqual({
        places: {
            pending: true,
            places: [],
            error: null
        }
    });

    const errorAction = {
        type: GET_PLACES_ERROR,
        error: 'Error'
    }

    const errorState = reducer(initState, errorAction);

    // should handle GET_PLACES_ERROR
    expect(errorState).toEqual({
        places: {
            pending: false,
            places: [],
            error: 'Error'
        }
    });

    const successAction = {
        type: GET_PLACES_SUCCESS,
        places: successResponseMock
    }

    const successState = reducer(pendingState, successAction);

    // should handle GET_PLACES_SUCCESS
    expect(successState).toEqual({
        places: {
            pending: false,
            places: successResponseMock,
            error: null
        }
    })
})