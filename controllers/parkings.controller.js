const parkingService = require('../services/parkings.service')

const get = function(req, res) {
    res.send(parkingService.get(req.params._id))
}

const getAll = function(req, res) {
    res.send(parkingService.getAll())
}

const post = function(req, res) {
	res.status(200).json(parkingService.post(req.body))
}

const put = function(req, res) {
	console.log('req.params._id', req.params._id)
	// res.send(parkingService.put())
}

module.exports = {
    get,
    getAll,
    post,
    put
}