const utils = require('./utils');

describe('Testing utility functions', () => {
   
    it('encrypt and decrypt should work correctly', () => {
        expect(2 + 2).toBe(4);
        const encryptedValue = utils.encrypt('123');
        const decryptedValue = utils.decrypt(encryptedValue);
        expect(decryptedValue).toBe('123');
   });
});