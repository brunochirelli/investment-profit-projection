import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: "3rem",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    bar: {
      background: theme.palette.primary.main,
    },
  })
);

export default function DenseAppBar() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="fixed">
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            variant="h6"
            color="inherit"
            style={{ fontFamily: "roboto mono, sans-serif", fontWeight: 400 }}
          >
            Investimentos
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setToggleDrawer(!toggleDrawer)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="persistent"
            anchor="top"
            open={toggleDrawer}
            onClose={() => setToggleDrawer(false)}
            style={{ marginTop: "3rem" }}
          >
            <Typography>Parici</Typography>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
