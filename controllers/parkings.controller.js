const parkingService = require('../services/parkings.service')

const get = function(req, res) {
    res.send(parkingService.get(req.params._id))
}

const getAll = function(req, res) {
    res.send(parkingService.getAll())
}

const post = function(req, res) {
	res.send(parkingService.post(req.body))
}

module.exports = {
    get,
    getAll,
    post
}