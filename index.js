const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Mr. adnan shafiq Jenkins for this CI/CD for this amazing way 🚀</h1>");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});