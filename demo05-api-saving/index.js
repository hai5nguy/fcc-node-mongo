var express = require('express')
var fs = require('fs')

var server = express()


var users

fs.readFile('data.json', function (err, data) {
    users = JSON.parse(data)
})

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
    users.push(req.query.name)
    fs.writeFile('data.json', JSON.stringify(users))
    res.json(users)
})


/***************************
 * server a folder
 ***************************/
server.use(express.static(__dirname + '/dist'))




server.listen(3000, function () {
    console.log('Server is running.')
})