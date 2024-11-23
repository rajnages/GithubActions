const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Node.js deployed via GitHub Actions!");
});

describe("GET /", () => {
  it("responds with Hello message", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "Hello from Node.js deployed via GitHub Actions!"
    );
  });
});
