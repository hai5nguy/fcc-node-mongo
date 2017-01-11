var express = require('express')

var server = express()


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


/***************************
 * server a folder
 ***************************/
server.use(express.static(__dirname + '/dist'))




server.listen(3000, function () {
    console.log('Server is running.')
})