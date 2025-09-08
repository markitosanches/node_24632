const express = require('express')
const app = express();
const config = require('./config.js')
const request = require('request')
const fs = require('fs')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/ticker=:id', (req, res) => {
    const ticker = req.params.id
    
    var url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${config.API_KEY}`;

    request.get({url, json:true}, (err, response, data) => {
        if(err || response.statusCode != 200) {
            return res.status(500).send('Error fetching data')
        }
        //console.log(data)
        fs.writeFile(`${ticker}.json`, JSON.stringify(data), (err) => {
            if(err) return res.status(500).send('Error saving file')
                res.redirect(`/view?ticker=${ticker}`)
        })
    })
})

app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/data/:id', (req, res) => {
    const filePath = `${__dirname}/${req.params.id}.json`
    //console.log(filePath)
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(404).send({error: 'Data not found'})
        res.json(JSON.parse(data));
    })
})

app.listen(config.PORT, () => {
    console.log('Connecté')
})