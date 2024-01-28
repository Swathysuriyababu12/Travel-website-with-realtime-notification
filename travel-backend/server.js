const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

//socket
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.use(cors());
connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("Hello world");
});
// Socket.io connection event
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for 'chat message' events from clients
 socket.on("form submission", (formData) => {
   console.log("Form submitted:", formData);
   socket.broadcast.emit("messagesent",formData)

   // You can broadcast the form data to all connected clients or perform any other logic here
   io.emit("form submitted", formData);
 });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
app.use(errorHandler);

httpServer.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
