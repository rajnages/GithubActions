// app.test.js

const request = require("supertest");
const app = require("./app"); // Import the app from app.js

describe("GET /", () => {
  it("responds with Hello message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Hello from Node.js deployed via GitHub Actions!"
    );
  });
});
