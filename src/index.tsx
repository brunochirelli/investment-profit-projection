import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { ThemeProvider as StyledTheme } from "styled-components";
import { DataProvider } from "store/DataProvider";
import App from "./App";
import theme from "theme/themes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledTheme theme={theme}>
        <CssBaseline />
        <DataProvider>
          <App />
        </DataProvider>
      </StyledTheme>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
