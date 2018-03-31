const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! your pass is ${req.body.password}`
    })
});

console.log('App listening of port 8081');
app.listen(process.env.PORT || 8081);