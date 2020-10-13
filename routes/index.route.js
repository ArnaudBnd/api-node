const express = require('express')
const router = express.Router()
const parkings = require('./parkings.route')

router.use('/parkings', parkings)

module.exports = router