const express = require('express');

const app = express();

const fs = require('fs')

app.get('/', (req, res) => {
    res.send('welcome to Goodera');
});


// get all data
app.get('/jobs', (req, res) => {
    fs.readFile(__dirname + "/" + "jobs.json", 'utf8', (err, data) => {
        if (err) {
            throw err;
        }

        res.send(JSON.parse(data));
    });
});







// finally, launch our server on port 4000.
const server = app.listen(4000, () => {
    var host = server.address().address
    var port = server.address().port
    console.log('listening on port http://localhost:4000', host, port);
});