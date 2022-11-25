import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Router from "./infraestructure/Router";
import { createBroswerContext } from 'use-sse';

const BroswerDataContext = createBroswerContext();

ReactDOM.hydrate(
    <React.StrictMode>
        <BroswerDataContext>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </BroswerDataContext>
    </React.StrictMode>,
  document.getElementById("app")
);