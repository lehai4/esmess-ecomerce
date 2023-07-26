const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const routes = require("./routes/defaultRouter");
const db = require("./config/db");

//Connect db
db.connect();

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());

// static file
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));

// routes

routes(app);

app.listen(port, (req, res) => {
  console.log(`Listen port at http://localhost:${port}`);
});
