const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(express.urlencoded({extended: false, limit:'20mb'})); 
app.use(express.json({limit:'20mb'}))

// Default route
app.get('/', function (req, res) {
    res.send('<h1>API Buku Perpustakaan</h1>');
});

//route url
const appRoute = require('./routes/route');
app.use('/', appRoute);


app.listen(8080, ()=>{
    console.log('Server Berjalan di Port : 8080');
});