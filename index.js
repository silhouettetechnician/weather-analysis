require('dotenv').config()
const router = require('express').Router()
const {PORT, ENV} = require('./config/environment')
const express = require('express')
const request = require('request')
const DarkSky = require('dark-sky')
const bodyParser = require('body-parser')
const cors = require('cors')
const token = process.env.DARK_SKY_TOKEN
const app = express()

app.use(bodyParser.json())
app.use(express.json)
app.use(cors());

app.use(express.static(`${__dirname}/dist`))

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))


app.get('/api/forecast', function(req, res) {
    axios(`https://api.darksky.net/forecast/${token}/37.8267,-122.4233`, function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body);
        res.json(body);
    })
})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))

module.exports = app