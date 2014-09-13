
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('rough.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
//        console.log(msg);
        io.emit('chat message', msg); //server sending
    });
});

http.listen(8888, function(){
    console.log('listening on *:8888');
});