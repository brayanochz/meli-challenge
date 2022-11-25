import React from 'react';
import express from 'express'
import path from 'path'
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../client/app";
import { Helmet } from 'react-helmet';
import { createServerContext } from "use-sse";
const { ServerDataContext, resolveData } = createServerContext();

const server = express()

server.use('/', express.static(path.join(__dirname, 'static')))
server.use('/public', express.static('assets'))

server.get("*", async (req, res) => {
  ReactDOMServer.renderToString(
    <ServerDataContext>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </ServerDataContext>
  );
  const data = await resolveData();
  const helmet = Helmet.renderStatic();
  res.write(`<!DOCTYPE html>
  <html lang="es">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>`);
  res.write(data.toHtml());
  res.write('</html>');
  const htmlStream  = ReactDOMServer.renderToPipeableStream(
    <ServerDataContext>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </ServerDataContext>
  );
  htmlStream.pipe(res)
});

server.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})