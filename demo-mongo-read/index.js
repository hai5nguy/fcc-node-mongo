var express = require('express')
var MongoClient = require('mongodb').MongoClient

var server = express()


var mongoUrl = 'mongodb://localhost:27017/fcc'

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

/****************************
 * API: /api/users/read
 * Get all users
 ****************************/
server.get('/api/users/read', function (req, res) {
    console.log('/api/users/read')

    MongoClient.connect(mongoUrl, function (err, db) {
        var users = db.collection('users')
        users.find().toArray(function (err, docs) {
            res.json(docs)
        });
        // res.json({ status: 'success'})
    })
})




/***************************
 * server a folder
 ***************************/
server.use(express.static(__dirname + '/dist'))




server.listen(3000, function () {
    console.log('Server is running.')
})