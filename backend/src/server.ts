
import {Server, Socket} from "socket.io";
import {Express} from "express";

const port = 3001;
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app: Express = express();
const server: Server = http.createServer(app);
const io = socketIO(server);

let n = 0;

io.on("connection", (socket: Socket) => {

    console.log(`new connection (${n++})`);

    socket.on("disconnect", () => {
        console.log(`connection ${n} ended`);
    });

});

server.listen(port);