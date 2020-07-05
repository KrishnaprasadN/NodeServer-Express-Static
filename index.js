const express = require("express");
const http = require('http');
const morgan = require('morgan')

const hostname = "localhost";
const port = "3000";

const app = express();
app.use(morgan('dev'));

// server static file from public folder
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    res.status = 200;
    res.setHeader("Content-Type", "text/html");
    res.end('<html><body><h1> Express server, Good to see you </h1></body></html>');

});

const server = http.createServer(app);
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})