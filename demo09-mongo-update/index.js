var express = require('express')
var Mongo = require('mongodb')
var MongoClient = Mongo.MongoClient
var ObjectID = Mongo.ObjectID

var bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

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
    })
})

/****************************
 * API: /api/users/update
 * Update a single user
 * post data: {
 *     id: (required, id of user),
 *     name: (require, updated name of user)
 * }
 ****************************/
server.post('/api/users/update', function (req, res) {
    console.log('/api/users/update', req.body)

    var id = req.body.id
    var name = req.body.name

    MongoClient.connect(mongoUrl, function (err, db) {
        var users = db.collection('users')
        users.findOneAndUpdate({ _id: ObjectID(id) }, { $set: { name: name }}, function (err, docs) {
            if (err) {
                //todo
            }
            res.json({ status: 'success' })
        });
    })
})



/***************************
 * server a folder
 ***************************/
server.use(express.static(__dirname + '/dist'))




server.listen(3000, function () {
    console.log('Server is running.')
})