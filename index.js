const express = require('express');
const app = express();
app.use(express.json());

const path = require('path');


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.post('/api/venuesbylocation', (req, res) => {
    console.log(`someone accessed this endpoint`);
    // console.log(JSON.stringify(req));
    if(!req.body.city || !req.body.state){
        return res.status(400).send({
            success: 'false',
            message: 'City or state are missing'
        })
    }
    return res.status(200).send({
        success: 'true',
        message: 'You reached the endpoint'
    })
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Node app is listening on ${port}`);