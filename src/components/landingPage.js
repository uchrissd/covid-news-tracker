import React, { Component } from "react";
import Tracker from "./tracker";
import Grid from "@material-ui/core/Grid";

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Tracker />;
        </Grid>
      </div>
    );
  }
}

export default Landing;
