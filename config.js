const dotenv = require('dotenv');
const utils = require('./utils');
dotenv.config();

function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define('BASE_URL', 'https://api.foursquare.com/v2/venues/search');
define('LIMIT_AMOUNT', 10);
define('V_DATE', '20190824');
define('CLIENT_ID', utils.decrypt(process.env.CLIENT_ID));
define('CLIENT_SECRET', utils.decrypt(process.env.CLIENT_SECRET));