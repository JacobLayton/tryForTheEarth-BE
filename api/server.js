const express = require("express");

const server = express();

server.get('/', (req, res) => {
    res.send('Backend is running.');
  });

module.exports = server;