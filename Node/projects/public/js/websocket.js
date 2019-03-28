// var socket = io.connect('http://localhost:3005');

// socket.on('USER_CONNECTED',data=>{
//     console.log(data);
// })

// socket.on('USER_DISCONNECTED', data=>{
//     console.log(data)
// })

socket = io.connect('http://localhost:3005');

var users = [];


$('#btn').bind('click', () => {

    

    socket.emit('USER_JOIN',$('#textBox').val());


})


socket.on('USER_CONNECTED',data=>{
    console.log(data);
    users.push(data);

     let htmlString = `<li class="list-group-item">${data.username}</li>`
     $('#userList').prepend(htmlString)
    console.log(htmlString);

})

socket.on('USER_DISCONNECTED', data=>{
     console.log(data)
})

