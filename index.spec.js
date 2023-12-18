const request = require("supertest");
const app = require("./index");

describe("Test todo methods", () => {
    it(`Returns all todos`, async  done => {
        await request(app).get("/todo").expect(200).then((response) => {
            expect(response.body.length).toBe(3);
        });
        done();
    });
    it(`Returns a todo with id:${2}`, async done => {
        await request(app).get("/todo/2").expect(200).then((response) => {
            expect(response.body.name).toBe("Get pizza for dinner");
        });
        done();
    });
});
