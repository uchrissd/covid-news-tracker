import React, { Component } from "react";
import Tracker from "./tracker";
import { Grid } from "@material-ui/core";

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={4}
          justify="center"
          // direction="column"
          alignItems="center"
        >
          <Grid item xs={8}>
            <p>
              The coronavirus pandemic has spread rapidly across California.
              Experts say the true number of people infected is unknown and
              likely much higher than official tallies.
            </p>
            <p>
              To better understand the spread of the virus, The Times is
              conducting an independent, continual survey of dozens of local
              health agencies across the state. So far today, six of the 61
              agencies we’re monitoring have reported new numbers.
            </p>
          </Grid>
        </Grid>

        <Tracker />
      </div>
    );
  }
}

export default Landing;
