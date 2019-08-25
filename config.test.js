const config = require('./config');

describe('Testing config file', () => {
   
    it('should return correct values', () => {
        expect(config.BASE_URL).toBe('https://api.foursquare.com/v2/venues/search');
        expect(config.LIMIT_AMOUNT).toBe(10);
        expect(config.V_DATE).toBe('20190824');
   });
});