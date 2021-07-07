const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Default route
app.get('/', function (req, res) {
    res.send('<h1>API KungLao Library</h1>');
});

//route url
const appRoute = require('./routes/route');
app.use('/', appRoute);


app.listen(8080, ()=>{
    console.log('Server Berjalan di Port : 8080');
});