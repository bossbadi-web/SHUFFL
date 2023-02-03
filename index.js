// this sets up the server
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 80;

// this adds the required headers to the response
app.use(function (req, res, next) {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// this hosts all the files in the 'public' folder (you should put all the files in your original HTML, CSS, and JS Repl in a folder named "public", you can change the name of the folder hosted by changing the name below)
app.use(express.static("public"));

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
