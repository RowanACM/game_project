import { createConnection } from 'typeorm';
import { UserDBEntity } from './entities/UserDBEntity';
import { Server, Socket } from 'socket.io';
import { Express } from 'express';
import 'reflect-metadata';
import Client from './Client';
import * as socketIO from 'socket.io';

const port = 3001;
const express = require('express');
const http = require('http');

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

const clients: { [key: string]: Client } = {};

interface Coords {
  x: number;
  y: number;
}

createConnection(dbConnectionOptions).then(connection => {
  let n = 0;

  io.on('connection', (socket: Socket) => {
    const c = n++;
    console.log(`new connection ${c}`);
    const client = new Client();
    clients[socket.id] = client;

    socket.on('disconnect', () => {
      console.log(`connection ${c} ended`);
      delete clients[socket.id];
    });

    socket.on('move', (target: Coords) => {
      const { x, y } = target;
      console.log(`Moving to ${x}, ${y}`);
      socket.broadcast.emit('move', target);
    });
  });

  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
