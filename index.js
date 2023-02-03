// this sets up the server
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 6090;
const path = require("path");

// this adds the required headers to the response
app.use(function (req, res, next) {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['html','css','js', 'png', 'pck', 'wasm'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static("public", options));

// this starts the server
server.listen(port, function () {
  console.log("Listening on port:", port);
});

//index.js
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

// index.js
module.exports = app;
