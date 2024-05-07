const request = require('supertest')
const app = require('./app')
let server

beforeAll((done) => {
	server = app.listen(8081, done) // Use a different or dynamically assigned port if needed
})

afterAll((done) => {
	server.close(done)
})

describe('GET /', () => {
	test('It should respond with "Hello CICD World!"', async () => {
		const response = await request(server).get('/')
		expect(response.statusCode).toBe(200)
		expect(response.text).toContain('Hello CICD World!')
	})
})
