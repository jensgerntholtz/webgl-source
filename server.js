// Simple Node.js server that I use to test my projects.
// To run, you need to have node and the express package installed
// http://nodejs.org/
// http://expressjs.com/

// Then simply run "node server" from the command line in this directory
// at that point you can view the demo by visiting http://localhost:900/index.html

const express = require('express');
const serveStatic = require("serve-static");
const serveIndex = require("serve-index");

const app = express();
const port = 9000;

app.use(serveStatic(__dirname));
app.use(serveIndex(__dirname));

app.listen(port);

console.log('Server is now listening on port 9000');
