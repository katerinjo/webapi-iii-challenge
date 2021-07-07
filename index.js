// code away!
require('dotenv').config();

const server = require('./server.js');

port = process.env.PORT || 4444;

server.listen(port, () => console.log('API on port:', port));