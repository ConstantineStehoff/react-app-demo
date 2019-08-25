const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

module.exports = {
    encrypt:function (text) {
        return cryptr.encrypt(text);
    },

    decrypt:function (text) {
        return cryptr.decrypt(text);
    }
}


