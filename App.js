const express = require('express');
const http = require('http');
const app = express();
const config = require('./config');
const database = require('./database/database');
const path = require('path')
const cors = require('cors');

require('./passport');


//Applying middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'build')))

//Web Page end point
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'build','index.html'))
})


//Importing rotues
const signInRoute = require('./routes/signinRouter');
const interviewerRoute=require('./routes/interviewerRouter');
const roomRoute = require('./routes/roomRouter');
const candidateRoute = require('./routes/candidateRouter')
const chatRoute = require('./routes/chatRouter');

//Applying routes
app.use('/api/signin',signInRoute);
app.use('/api/interviewer',interviewerRoute);
app.use('/api/room',roomRoute);
app.use('/api/candidate',candidateRoute);
app.use('/api/chat',chatRoute);
const server = http.createServer(app);

//Websocket configuration
const io = require('socket.io')(server);
module.exports.io = io;
const websocket = require('./websocket');

io.on("connection",(socket)=>{
    console.log("Client Connected...")
    websocket.codeWebSocket(socket,io);
    websocket.joinRoomRequestSocket(socket,io);
    websocket.acceptRoomRequestSocket(socket,io);
    websocket.chatRequestSocket(socket,io);
    websocket.interviewerAcceptRoomRequest(socket,io);
    websocket.interviewerRoomRequestSocket(socket,io);
    websocket.interviewerStatusSocket(socket,io);
    websocket.candidateStatusSocket(socket,io);
})

server.listen(config.app.port, ()=>{
    console.log("\n\n App listening... \n\n");
})