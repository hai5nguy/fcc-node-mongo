var express = require('express')

var server = express()

server.get('/', function (req, res) {
    res.send('Hello from Backend Land')
})

server.listen(3000, function () {
    console.log('Server is running.')
})