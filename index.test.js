request = require('supertest');
describe('VenuesByLocation', () => {
    let app;
    beforeEach(() => {
        app = require('./index');
    });
    afterEach(function () {
        app.close();
    });
    it('should fail if city is not provided', () => {
        const body = {state:"WA", searchTerm:"taco"};
        request(app)
            .post('/api/venuesbylocation', body)
            .expect(400);
    });
    it('should fail if state is not provided', () => {
        const body = {city:"Seattle", searchTerm:"taco"};
        request(app)
            .post('/api/venuesbylocation', body)
            .expect(400);
    });
    it('should fail if searchTerm is not provided', () => {
        const body = {state:"WA", city:"Seattle"};
        request(app)
            .post('/api/venuesbylocation', body)
            .expect(400);
    });
    it('should pass if all of the parameters provided', () => {
        const body = {state:"WA", city:"Seattle", searchTerm:"taco"};
        request(app)
            .post('/api/venuesbylocation', body)
            .expect(200);
    })
})

describe('encrypt endoint', () => {
    let app;
    beforeEach(() => {
        app = require('./index');
    });
    afterEach(function () {
        app.close();
    });
    it('should respond with a content if there is query string', () => {
        request(app)
          .get('/api/encrypt?str=123')
          .expect(200);
    });
    it('should fail if there is no query string', () => {
        request(app)
          .get('/api/encrypt')
          .expect(400);
    });
})