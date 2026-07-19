const express = require("express");

const app = express();
const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send(`
    <h1>Aastha Adhikari</h1>
    <h2>CI/CD Assignment</h2>
<p>New change deployed through the CI/CD pipeline.</p>    <p>Port: ${PORT}</p>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Application is healthy",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application running on port ${PORT}`);
});