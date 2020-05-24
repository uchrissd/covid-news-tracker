import React from "react";
import "./App.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Landing from "./components/landingPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbarStyle: {
    paddingTop: "20px",
    paddingBottom: "20px",
    textAlign: "center",
    fontFamily: "Arial",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <AppBar
        position="static"
        color="white"
        style={{
          borderBottom: "solid 1px",
        }}
      >
        <Toolbar>
          <Typography variant="h3" className={classes.navbarStyle}>
            <strong>California Coronavirus Tracker</strong>
          </Typography>
        </Toolbar>
      </AppBar>

      <Landing />
    </div>
  );
}

export default App;
