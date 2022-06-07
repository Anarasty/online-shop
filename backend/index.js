const express = require("express");
const cors = require("cors");
const { request } = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome SUKA");
});

app.get("/products", (req, res) => {
  res.send([2, 3, 4]);
});
const port = process.env.PORT || 5000;
// npx nodemon index.js ---- TO RUN SERVER
app.listen(port, console.log(`Server working on -- ${port}`));
