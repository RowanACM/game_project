
import {Server, Socket} from "socket.io";
import {Express} from "express";

const port = 3001;
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app: Express = express();
const server = http.createServer(app);
const io = socketIO(server);

let n = 0;

io.on("connection", (socket: Socket) => {

    const c = n++;
    console.log(`new connection ${c}`);

    socket.on("disconnect", () => {
        console.log(`connection ${c} ended`);
    });

});

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
