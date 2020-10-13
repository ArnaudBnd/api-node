const express = require('express')
const router = express.Router()

const parkingsController = require('../controllers/parkings.controller')

router.route('/')
    .get(parkingsController.getAll)

router.route('/:_id')
    .get(parkingsController.get)

router.route('/')
    .post(parkingsController.post)

router.route('/:_id')
    .put(parkingsController.put)

module.exports = router