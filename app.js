const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
	res.send('Hello CICD World!')
})

app.listen(port, '0.0.0.0', () => {
	console.log(`Server running on http://localhost:${port}`)
})

module.exports = app
