const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors'); // Import the cors middleware
const server = http.createServer(app);
const authRoutes = require('./routes/authRoute');
const trip = require('./routes/createTrip');
const mosque = require('./routes/mosque');

const bodyParser = require('body-parser');

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// const io = new Server(server);
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Enable CORS (Cross-Origin Resource Sharing) middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Adjust the origin as needed
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Store user information (username and socket ID)
const users = {};
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('setUsername', (username) => {
    users[socket.id] = username;
    io.emit('userList', Object.values(users));
  });

  socket.on('sendMessage', (data) => {
    const senderUsername = users[socket.id];
    const recipientSocket = Object.keys(users).find((key) => users[key] === data.recipient);

    if (recipientSocket) {
      io.to(recipientSocket).emit('privateMessage', {
        sender: senderUsername,
        message: data.message,
      });
    }
  });

  socket.on('disconnect', () => {
    delete users[socket.id];
    io.emit('userList', Object.values(users));
  });
});
app.use('/auth', authRoutes);
app.use('/user', trip);
app.use('/mosque', mosque);

// Create an HTTP server and pass the request handler function
// Specify the port number the server will listen on
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});