const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var server = http.createServer(app);
var io = socketIO(server);

// static path
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // message to greet single user
    socket.emit('newMessage', generateMessage('Admin', "Welcome to the chat app"));

    // message to everyone that a single user joined
    socket.broadcast.emit('newMessage', generateMessage('Admin', "New user joined"));

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    // socket.emit('newEmail', {
    //     from:"mike@example.com",
    //     text: "Hey, what up doggie smoggie?",
    //     createdAt: 123
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });
    
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });
    
});


// start up server
server.listen(port, () => {
    console.log("Server started on port: "+port);
})

