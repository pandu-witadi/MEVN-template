//
//  MEVN template
//  /api/test
//
const express = require('express')
const router = new express.Router()
const cfApp = require('../conf/cfApp')


router.get('/', async (req, res) => {
    try {
        curDate = new Date()
        res.send({
            appName:cfApp.appName,
            port:cfApp.port,
            appVersion: cfApp.appVersion,
            serverDate: curDate.getFullYear() + "-" + (curDate.getMonth() + 1) + "-" + curDate.getDate(),
            serverTime: curDate.toLocaleTimeString()
        })
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router
