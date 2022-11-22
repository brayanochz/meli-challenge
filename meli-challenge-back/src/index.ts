require('dotenv').config();
import express from 'express';
var cors = require('cors');
import { initRoutes } from "./infraestructure/controllers";

const app = express();
const port = process.env.PORT;

app.use(cors());

initRoutes(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});