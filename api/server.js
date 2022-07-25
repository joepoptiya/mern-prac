const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

if (process.env.ENVIRONMENT !== "production") {
  require("dotenv").config();
}
console.log("enviroment:", process.env.ENVIRONMENT);
console.log("PORT:", process.env.PORT);
console.log("MONGO_CONNECTION_STRING:", process.env.MONGO_CONNECTION_STRING);
console.log("MONGO_URI:", process.env.MONGO_URI);

// init main controller(s)

// init app
const app = express();
const port = process.env.PORT || 3080;

// init middleware
app.use(express.static(path.join(__dirname, "./ui/build")));
app.use(bodyParser.json());

// Api
app.get("/api/v1/", (req, res) => {
  console.log("get /api/v1/");
  res.status(200).json({ message: "Welcome to the API" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
