const express = require('express')

const { sendMessage } = require('./sendMessage')

const PORT = 8080

const app = express()

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(
    (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', '*')
        next()
  }
)

app.post('/sendMessage', (req, res) => {
    sendMessage(req.body)
})

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})