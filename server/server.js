const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
// console.log(publicPath);
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket)=>{
  console.log('New User Created');

  socket.on('disconnect',()=>{
    console.log('User has lost connection');
  });
});

app.use(express.static(publicPath));
server.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
