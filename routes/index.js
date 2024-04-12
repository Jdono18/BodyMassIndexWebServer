// web page responses to different URLs
// each URL has own function that creates the web page that is sent to the browser.

const express = require('express')  // imports express
const router = express.Router()  // imports router library

router.get('/', function(req, res, next) {  // router.get request, response to the homepage
    //console.log(req.query)
    //const height = req.query.height
    //const weight = req.query.weight
    res.render('index.hbs')  // renders the view, sends to client
})

router.post('/bmi', function(req, res, next) {  // post method route
    const calculateBMI = req.body  // declares calculateBMI variable to hold the data sent in the request body
    const BMI = (calculateBMI.weight / (calculateBMI.height * calculateBMI.height)).toFixed(2)  // BMI calculation variable
    res.render('bmi.hbs', { // renders the view, sends to client
        height: calculateBMI.height,  // object holds height value
        weight: calculateBMI.weight,  // object holds weight value
        BMI  // object holds calculated BMI value
    })
})

module.exports = router  // return router object back to server.js as necessary