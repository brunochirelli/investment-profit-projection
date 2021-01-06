import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#263238",
      dark: "#000a12",
      light: "#4f5b62",
      contrastText: "#fff",
    },
    secondary: {
      main: "#cfd8dc",
      dark: "#9ea7aa",
      light: "#fff",
      contrastText: "#000a12",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
