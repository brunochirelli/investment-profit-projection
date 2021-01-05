import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { DataProvider } from "store/DataProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
