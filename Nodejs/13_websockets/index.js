import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (data) => {
    console.log(data);
    io.emit("chat message", data);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
