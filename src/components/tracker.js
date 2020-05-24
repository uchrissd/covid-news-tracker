import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingTop: "40px",
  },
  textStyle: {
    minWidth: 345,
  },
  cardStyle: {
    backgroundColor: "#f7f5f5",
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

export default function Tracker() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card className={(classes.rootclasses, classes.cardStyle)}>
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
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={(classes.rootclasses, classes.cardStyle)}>
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
        </Grid>
      </Grid>
    </div>
  );
}
