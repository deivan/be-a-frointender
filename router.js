const express = require('express')
const router = express.Router()

router.get('/info', (req, res) => {
    res.send('I have 8 CPUs there')
})

router.get('/json', (req, res) => {
    res.status(200).json(JSONexample)
})

router.get('/user/:name/id/:id', function (req, res) {
    console.log(req.params)
    console.log(req.query)
    res.send('We got user value is ' + req.params.id)
})

module.exports = router;