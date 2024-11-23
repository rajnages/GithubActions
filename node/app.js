// app.js

const express = require("express");
const app = express();

// Simple route
app.get("/", (req, res) => {
  res.send("Hello from Node.js deployed via GitHub Actions!");
});

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
