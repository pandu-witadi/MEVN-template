//
//
//
const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const cfApp = require('./conf/cfApp')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/test', require('./routes/test'))

const vuePath = path.join(__dirname, "../client/dist")
//These 2 lines make sure that vue and express app are coming from the same server
app.use(express.static(vuePath))
app.get('/', function(req, res) {
    res.sendFile('index.html',  { root: vuePath } )
})

// start server app
app.listen(cfApp.port, () => {
    console.log(' ... ' + cfApp.appName +' ... server started, listening to port: ' + cfApp.port)
    // connect to mongodb
    mongoose.connect(cfApp.dburl+cfApp.dbname, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then( (result) => {
        console.log(" ... db connect to " + cfApp.dburl+cfApp.dbname)

    }).catch( (e) => {
        console.log(" ... db NOT connect to " + cfApp.dburl+cfApp.dbname)
    })
})
