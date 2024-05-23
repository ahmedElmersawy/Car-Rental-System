require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const mainRouter = require("./src/routers/main");

const server = express();
const logger = morgan(
  ":method :url :status :res[content-length] - :response-time ms"
);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`server is on  ${port}`);
});

// first router
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:8080",
  ],
  allowedHeader: "x-access-token",
  method: ["GET", "POST", "PATCH", "DETELE", "OPTIONS"],
};

server.use(cors(corsOptions));
server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(express.json());
server.use(logger);
server.use(express.static("public/img/users"));
server.use(express.static("public/img/vehicles"));
server.use(mainRouter);
