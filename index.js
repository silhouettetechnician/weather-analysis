const { PORT, env } = require('./config/environment')
const express = require('express')
const request = require('request')
const cors = require('cors')
const token = process.env.DARK_SKY_TOKEN
const time2017 = '1498003200'
const time2018 = '1532563200'
const time2019 = '1564012800'
const app = express()

app.use(cors())
app.use(express.static(`${__dirname}/dist`))

app.get('/api/forecast2017', function (req, res){
    request(`https://api.darksky.net/forecast/${token}/51.5074,0.1278,${time2017}?units=auto`, function (error, response, body) {
        console.log('error:', error)
        console.log('statusCode:', response && response.statusCode)
        console.log('body:', body)
        res.send(body)
    })
})

app.get('/api/forecast2018', function (req, res){
    request(`https://api.darksky.net/forecast/${token}/51.5074,0.1278,${time2018}?units=auto`, function (error, response, body) {
        console.log('error:', error)
        console.log('statusCode:', response && response.statusCode)
        console.log('body:', body)
        res.send(body)
    })
})

app.get('/api/forecast2019', function (req, res){
    request(`https://api.darksky.net/forecast/${token}/51.5074,0.1278,${time2019}?units=auto`, function (error, response, body) {
        console.log('error:', error)
        console.log('statusCode:', response && response.statusCode)
        console.log('body:', body)
        res.send(body)
    })
})

app.get('/api/todays', function (req, res){
    request(`https://api.darksky.net/forecast/${token}/51.5074,0.1278?units=auto`, function (error, response, body) {
        console.log('error:', error)
        console.log('statusCode:', response && response.statusCode)
        console.log('body:', body)
        res.send(body)
    })
})

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))