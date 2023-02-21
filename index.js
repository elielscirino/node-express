const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
const port = 3000

app.get('/', (req, res) => res.send('Express'))
userRoute(app)

app.listen(port, () => console.log('localhost:3000'))
