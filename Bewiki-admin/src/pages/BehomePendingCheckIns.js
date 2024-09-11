import React from "react";
import { Behome } from "../features";
import { Grid } from "@material-ui/core";
function BehomePendingCheckIns() {
  return (
    <>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Behome.PendingCheckIns.Container />
      </Grid>
    </>
  );
}

export default BehomePendingCheckIns;
