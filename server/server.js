const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

var server = http.createServer(app);
var io = socketIO(server);

// static path
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

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
    socket.emit('newMessage', {
            from: "Elvis",
            text: "Hey can you meet up at 6pm",
            createdAt: Date.now()
        });

    socket.on('createMessage', (message) => {
        console.log('createMessage', mesage);
    });
    
});


// start up server
server.listen(port, () => {
    console.log("Server started on port: "+port);
})

