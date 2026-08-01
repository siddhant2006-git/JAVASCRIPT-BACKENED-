const express = require("express");

const app = express();
const PORT = 6000;

app.get("/", (req, res) => {
  res.send("E-commerce Backend is Running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
