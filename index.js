// code away!
console.log('index.js');

const server = require('./server.js');

port = 9999;

server.listen(port, () => console.log('API on port:', port));