const express = require("express");
const path = require("path"); // Required for setting static file path
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Step 1: Serve the homepage with dynamic data
app.get("/", (req, res) => {
  const greeting = "Hello from Node.js deployed via GitHub Actions!";
  res.render("index", { greeting });
});

// Step 2: Serve static files (for CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Step 3: Start the server
const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Export the app and server for testing
module.exports = { app, server };
