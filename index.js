const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/index.route')

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(routes)

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})