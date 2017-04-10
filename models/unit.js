var mongoose = require ('mongoose')

var unitSchema = new mongoose.Schema ({
  name: String,
  password: String,
  email: String,
  projectname: String,
  block: Number,
  floor: Number,
  stack: Number,
  data: String
})

var Unit = mongoose.model('Unit', unitSchema)

module.exports = Unit
