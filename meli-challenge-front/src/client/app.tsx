import React from "react";
import Router from "./infraestructure/Router";

export default function App() {
    return (
        <body>
          <div id="app"><Router /></div>
          <script src="/client.js" />
        </body>
    );
}