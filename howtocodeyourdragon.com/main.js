var socket = io();
socket.on('newColor',function(data){
    console.log(data)
});
socket.on('onJoin',function(data){
    console.log(data)
});