var express = require('express')
var app = express()
var port = process.env.PORT || 8080

// var mongoose = require('mongoose')
// var unit = require('./controllers/unitscontroller')

// var dburi = process.env.PROD_MONGODB || 'mongodb://localhost:27017/test'
// mongoose.connect(dburi)
// mongoose.Promise = global.Promise

var path = require('path')

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open'), function() {
//   console.log('WE ARE LIVE!');
// }

var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')

app.use(ejsLayouts)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'public')))


app.get('/', function(req,res) {
  res.render('homepage')
})

app.get('/about', function(req,res) {
  res.render('about')
})

app.get('/contact', function(req,res) {
  res.render('contact')
})


app.listen(port, function(){
  console.log('Express is running on port ' + port);
})
