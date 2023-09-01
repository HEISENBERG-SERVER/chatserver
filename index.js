const http = require("http")
const cors = require("cors")
const express = require("express")
const socket = require("socket.io")
const app = express()

const users = [{}]
app.use(cors({origin:"https://chatsapp.heisenberg.in.net"}))

app.get("/",(req,res)=>{res.json('yuyuyuyuyuyuyuyu')})

const server = http.createServer(app)
const io = socket(server)


io.on("connect",(socket)=>{

socket.on("first",({Dish})=>{
    users[socket.id] = Dish
socket.broadcast.emit('userjoined',{message:`${users[socket.id]} has Joined`})
})
socket.on('message',({messagety,it})=>{
    
   io.emit('wholesome',{user:users[it],messagety,it})
})
socket.on("dumb",()=>{
    
    socket.broadcast.emit("left",{message:`${users[socket.id]} have left the chat`})
    
})






})

server.listen(4000)