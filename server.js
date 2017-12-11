const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();


//env
require('dotenv').config();
//require mongoDB
require('./config/database');

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
    
})
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`running on port: ${port}`)
})
