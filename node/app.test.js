const request = require("supertest");
const { app, server } = require("./app");

describe("GET /", () => {
  it("responds with HTML content", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Welcome to Node.js App"); // Check for the rendered HTML content
    expect(response.text).toContain(
      "Deployed with GitHub Actions and hosted in the cloud!"
    );
  });
});

afterAll(() => {
  server.close(); // Close the server after tests
});
