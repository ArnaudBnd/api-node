const express = require('express')
const router = express.Router()

const parkingsController = require('../controllers/parkings.controller')

router.route('/')
    .get(parkingsController.getAll)

router.route('/:_id')
    .get(parkingsController.get)

router.route('/')
    .post(parkingsController.post)

module.exports = router