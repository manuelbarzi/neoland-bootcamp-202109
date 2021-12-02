const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(express.static('public'))

server.get('/hello', function(req, res) { // hello?name=pepito
    const {name = 'world'} = req.query
    res.send()
})

server.listen(8000, () => {
    console.log('Server listen on port 8000')
})