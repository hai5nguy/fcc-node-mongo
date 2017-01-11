var express = require('express')

var server = express()


/***************************
 * serve text only
 ***************************/
// server.get('/', function (req, res) {
//     res.send('Hello from Backend Land')
// })


/***************************
 * server a folder
 ***************************/
server.use(express.static(__dirname + '/dist'))


server.listen(3000, function () {
    console.log('Server is running.')
})