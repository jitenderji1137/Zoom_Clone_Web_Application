const express = require('express');
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
let user = [];
const port = 3001
app.get('/', (req, res)=>{
    res.send("hello world!");
})
const addUser = (userName,roomId)=>{
    user.push({
        userName: userName,
        roomId: roomId
    })
}
const userLeave = (userName)=>{
    user = user.filter(user => user.userName != userName)
}
const getRoomUsers  = (roomId)=>{
    return user.filter(user => user.roomId == roomId)
}
io.on("connection",socket =>{
    console.log("Someone Connected")
    socket.on("join-room",({roomId,userName})=>{
        console.log("User Joined room")
        console.log(roomId)
        console.log(userName)
        socket.join(roomId)
        addUser(userName,roomId)
        socket.to(roomId).emit("user-connected",({roomId,userName}))
        io.to(roomId).emit("all-user",getRoomUsers(roomId));
        socket.on("disconnect",()=>{
        console.log("disconnected");
        socket.leave(roomId);
        userLeave(userName)
        socket.to(roomId).emit("all-user",getRoomUsers(roomId))
        })
    })
})
server.listen(port,()=>{
    console.log("listening on port 3001");
})