import {GET_PLACES_PENDING, GET_PLACES_ERROR, GET_PLACES_SUCCESS} from './types';

test('Types', () => {
    expect(GET_PLACES_PENDING).toBe('GET_PLACES_PENDING');
    expect(GET_PLACES_ERROR).toBe('GET_PLACES_ERROR');
    expect(GET_PLACES_SUCCESS).toBe('GET_PLACES_SUCCESS');
})