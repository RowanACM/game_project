import { createConnection } from 'typeorm';
import { UserDBEntity } from './entities/UserDBEntity';
import { Server, Socket } from 'socket.io';
import { Express } from 'express';
import 'reflect-metadata';
import Client from "./Client";

const port = 3001;
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app: Express = express();
const server = http.createServer(app);
const io = socketIO(server);

const dbConnectionOptions: any = {
  type: 'sqlite',
  database: ':memory:',
  entities: [UserDBEntity],
  synchronize: true,
  logging: true,
};

const clients: any = [];

createConnection(dbConnectionOptions).then(connection => {
  let n = 0;

  io.on('connection', (socket: Socket) => {
    const c = n++;
    console.log(`new connection ${c}`);
    const client = new Client();
    // @ts-ignore
    clients[socket] = client;

    socket.on('disconnect', () => {
      console.log(`connection ${c} ended`);
      // @ts-ignore
      delete client[socket];
    });

    socket.on("move", (target: number[]) => {
      console.log(target);
      // TODO: Handle this
    });

  });

  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
