const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();


//env
require('dotenv').config();
require('./config/database');


app.use(logger('dev'));

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

// Mount our custom auth middleware
app.use(require('./config/auth'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/characters', require('./routes/api/api'))



app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
    
})
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`running on port: ${port}`)
})
