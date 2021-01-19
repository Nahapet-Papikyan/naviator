const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const socketIO = require('socket.io');
const http = require('http');
const history = require('connect-history-api-fallback');

const SocketInit = require('./socket/index')

const app = express();
  
//Body parser
app.use(bodyParser.json({ extended: true, limit: '10mb' }));

//cors
app.use(cors());

//routes

const port = process.env.PORT || 3000;

const httpServer = http.createServer(app);
const io = socketIO(httpServer);  

console.log(`Port is ${port}`);

//Set static folder
app.use(history());
app.use(express.static(path.join(__dirname, 'rocket')));

app.get('/', (req, res) => {
  res.send('Invalid response');
});


SocketInit(io)

httpServer.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


