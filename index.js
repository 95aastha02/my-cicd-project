
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello, I am Aastha</h1>
    <h2>Full CI/CD Pipeline Assignment</h2>
    <p>This project is deployed automatically using GitHub Actions.</p>
    <p> its my first try </p>


  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
