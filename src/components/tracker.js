import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const classes = makeStyles({
  root: {
    minWidth: 345,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Tracker extends Component {
  render() {
    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <div></div>
            <Typography>Confirmed Cases</Typography>
          </CardContent>
          <CardContent>
            <div></div>
            <Typography>today</Typography>
          </CardContent>
          <CardContent>
            <div></div>
            <Typography>yesterday</Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <div></div>
            <Typography>Deaths</Typography>
          </CardContent>
          <CardContent>
            <div></div>
            <Typography>today</Typography>
          </CardContent>
          <CardContent>
            <div></div>
            <Typography>yesterday</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Tracker;
