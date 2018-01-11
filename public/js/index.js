var socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    // socket.emit('createEmail', {
    //     to: "kastille84@gmail.com", 
    //     from: "info@example.com", text: "you wack son."
    // });    
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newEmail', function(data) {
    console.log('New Email', data);

});

socket.on('newMessage', function(newMessage) {
    console.log('newMessage', newMessage);
});
