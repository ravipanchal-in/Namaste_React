import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";import { Provider } from "react-redux";
import appRouter from "./src/router";
import appStore from "./src/redux/appStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={appStore}><RouterProvider  router={appRouter} /></Provider>);