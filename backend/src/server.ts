import { createConnection } from 'typeorm';
import { UserDBEntity } from './entities/UserDBEntity';
import { Socket } from 'socket.io';
import { Express } from 'express';
import 'reflect-metadata';
import Client from './Client';
import * as socketIO from 'socket.io';
import User from './User';

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

createConnection(dbConnectionOptions).then(() => {
  let n = 0;

  let user: User = new User("test");
      user.addUser("test").then(() => {
        user.checkPassword("test").then((valid: boolean) => {
          console.log(valid);
        })
        
      })

  io.on('connection', (socket: Socket) => {
    const c = n++;
    console.log(`new connection ${c}`);
    const client = new Client();
    clients[socket.id] = client;
    
    // socket.on('submit', (username: string, password: string) => {
    //   const dbentity: UserDBEntity = new UserDBEntity();
    //   let user: User = new User(username);
    //   user.addUser()
    //   user.checkPassword(password).then((valid: boolean) => {
    //     if (valid) {
    //       console.log("valid");
    //     }
    //   })
      
    // })

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
