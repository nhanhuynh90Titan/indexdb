var express = require('express')
var path = require('path')
var app = express()
global.rootDirectory = __dirname
app.use(express.static(global.rootDirectory + '/dist'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '/views') })
})
app.listen(process.env.PORT || 3000)
