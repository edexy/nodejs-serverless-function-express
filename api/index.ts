const express = require("express");
const app = express();

app.request("/", (req, res) => res.send("END Oops, a little hiccup! We're ironing things out and will be back with you shortly!"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
