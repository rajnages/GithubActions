const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js deployed via GitHub Actions!");
});

// Start the server and export it
const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Export the app and server for testing
module.exports = { app, server };
