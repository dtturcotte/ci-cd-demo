const request = require('supertest')
const app = require('./app')

describe('GET /', () => {
	let server

	beforeAll((done) => {
		server = app.listen(8080, done)
	})

	afterAll((done) => {
		server.close(done)
	})

	test('It should respond with "Hello CICD World!"', async () => {
		const response = await request(server).get('/')
		expect(response.statusCode).toBe(200)
		expect(response.text).toContain('Hello CICD World!')
	})
})
