const express = require('express');
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter');

const server = express();

server.use(express.json());
server.use(logger);

server.use('/posts', postRouter);
server.use('/users', userRouter);

server.get('/', (req, res) => {
  // res.send(`<h2>Let's write some middleware!</h2>`)
  res.send(req.body);
});

//custom middleware

function logger(req, res, next) {
  console.log('method:', req.method);
  console.log('url:', req.url);
  console.log('timestamp:', Date.now());
  next();
};

module.exports = server;
