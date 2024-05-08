const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hello CICD World!')
})

app.get('/hello', (req, res) => {
	res.send('Hello CICD World!')
})

app.get('/world', (req, res) => {
	res.send('Hello CICD World!')
})

module.exports = app
