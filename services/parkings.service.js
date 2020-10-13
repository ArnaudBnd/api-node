const data = require('../parkings.js')

const getAll = function() {
    return data.Parkings
}

const get = function(_id) {
    return getAll().find(parking => parking.id == _id)
}

const post = function(parking) {
	data.Parkings.push(parking)
	return data
}

const put = function(_id) {
	console.log('_id', _id)
}

module.exports = {
    get,
    getAll,
    post,
    put
}