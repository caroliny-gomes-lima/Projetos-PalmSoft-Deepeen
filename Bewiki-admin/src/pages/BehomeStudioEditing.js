import React from "react";
import { Behome } from "../features";
import { Grid } from "@material-ui/core";

function BehomeStudioEditing() {
  return (
    <>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Behome.StudiosEditing.Container />
      </Grid>
    </>
  );
}
export default BehomeStudioEditing;
