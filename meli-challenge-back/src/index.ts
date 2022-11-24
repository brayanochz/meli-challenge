require('dotenv').config();
import express from 'express';
import { initRoutes } from './Infraestructure/Routes';
var cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors());

initRoutes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});