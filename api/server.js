const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const server = express();

// Logger
server.use(logger('short'));

// Error message functionality
// server.use(function(req, res) {
//     res.status(404).send("Ain't nobody got time for that!");
// });
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
server.use('/users', userRoutes);
server.use('/posts', postRoutes);

// server.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

server.use('/', (req, res) => {
    res.send('Backend is running.');
  });

// server.get('/posts', (req,res) => {
//     res.status(200).send('<h1>Posts</h1>')
// });

// server.get('/posts/:id', (req,res) => {
//     const id = req.params.id;

//     res.status(200).json({
//         url: `/posts/${id}`,
//         operation: `GET for post with id ${id}`
//     })
// });

module.exports = server;