var express = require('express')
var MongoClient = require('mongodb').MongoClient

var server = express()


var mongoUrl = 'mongodb://localhost:27017/fcc'

/****************************
 * API: /api/reverse/:name
 * Takes a name and reverse it
 ****************************/
server.get('/api/reverse/:name', function (req, res) {
    console.log('params', req.params)
    var name = req.params.name
    res.json({
        nameReversed: name.split('').reverse('').join('')
    })
})

/****************************
 * API: /api/users/create?name={name}
 * Create a user
 ****************************/
server.get('/api/users/create', function (req, res) {
    console.log('/api/users/create', req.query)
    var user = {
        name: req.query.name
    }

    MongoClient.connect(mongoUrl, function (err, db) {
        var users = db.collection('users')
        users.insert(user)
        res.json({ status: 'success'})
    })
    
})


/***************************
 * server a folder
 ***************************/
server.use(express.static(__dirname + '/dist'))




server.listen(3000, function () {
    console.log('Server is running.')
})