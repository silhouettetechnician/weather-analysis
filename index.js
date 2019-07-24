require('dotenv').config()

const {PORT, ENV} = require('./config/environment')
const express = require('express')
const request = require('request') 
const cors = require('cors')
// const token = process.env.DARK_SKY_TOKEN
const app = express()


app.use(cors());
app.use(express.static(`${__dirname}/dist`))


​
app.post('/api/forecast', function (req, res) {
​
    request(`https://api.darksky.net/forecast/6fcc0f895857627606cae8c37cd1e787/37.8267,-122.4233`, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        res.send(body);
    })
})
​
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
​
​
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))
​
module.exports = app