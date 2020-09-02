const mongoose = require('mongoose')

var Schema = mongoose.Schema

var ServiceSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true }
})

module.exports = ServiceSchema
