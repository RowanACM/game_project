import { createConnection } from 'typeorm';
import { UserDBEntity } from './entities/UserDBEntity';
import { Server, Socket } from 'socket.io';
import { Express } from 'express';
import 'reflect-metadata';

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

createConnection(dbConnectionOptions).then(connection => {
  let n = 0;

  io.on('connection', (socket: Socket) => {
    const c = n++;
    console.log(`new connection ${c}`);

    socket.on('disconnect', () => {
      console.log(`connection ${c} ended`);
    });
  });

  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
