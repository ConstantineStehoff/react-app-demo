const express = require('express');
const app = express();
const path = require('path');
const utils = require('./utils');
const config = require('./config');
const rp = require('request-promise');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/encrypt', (req, res) => {
    const encryptedStr = utils.encrypt(req.query.str);
    const decryptedStr = utils.decrypt(encryptedStr);
    
    return res.status(200).send({
        success: 'true',
        encryptedStr: encryptedStr,
        decryptedStr: decryptedStr
    })
})

app.post('/api/venuesbylocation', (request, response) => {
    console.log(`someone accessed this endpoint`);
    
    if(!request.body.city || !request.body.state){
        return response
            .status(400)
            .send({
                success: 'false',
                message: 'City or state are missing'
            })
    }

    const options = {
        url: config.BASE_URL,
        method: 'GET',
        qs: {
            client_id: config.CLIENT_ID,
            client_secret: config.CLIENT_SECRET,
            query: 'tacos',
            near: request.body.city + ',' + request.body.state,
            v: config.V_DATE,
            limit: config.LIMIT_AMOUNT
        }
    }

    rp(options)
        .then(data => {
            response
                .status(200)
                .type('application/json')
                .send({
                    success: 'true',
                    message: data
                })
        })
        .catch(error => {
            response
                .status(400)
                .send({
                    success: 'false',
                    message: error
                })
        })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Node app is listening on ${port}`);