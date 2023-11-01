const router = require('../routes.js');
const request = require('supertest');

describe("GET /todo", () => {

    test("should respond with 200 status code", async () => {
        const response = await request(router).get("/todo")
        expect(response.statusCode).toBe(200)
    })
    test("should respond with fields", async () => {
        const response = await request(router).get("/todo")
        expect(response.text).toBe('[{"id":1,"title":"zoom"},{"id":2,"title":"woey"},{"id":3,"title":"dafa"},{"id":4,"title":"madara"}]')
    })
    // test("should respond with fields", async () => {
    //     const response = await (await request(router).post("/todo")).send({title: 'cooking'}).set('Accept', 'application/json')
    //     expect(response.text).toBe('Berhasil menambahkan todo')
    // })
});