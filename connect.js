const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/calendar', (req, res) => {
    res.sendFile(__dirname + '/calendar.html')
})

app.get('/join', (req, res) => {
    res.sendFile(__dirname + '/join.html')
})