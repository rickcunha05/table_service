import { router } from './routers/Router';
import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';



mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use(express.json());

    //chamo meu arquivo de rotas para que meu app express o execute
    app.use(router);

    app.listen(port, () => {
      console.log(`😂 server is running on port 3001 ${port}`);
    });
  })
  .catch(() => console.log('não conectou'));

