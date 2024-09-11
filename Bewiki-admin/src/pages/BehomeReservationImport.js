import React from "react";
import { Behome } from "../features";
import { Grid } from "@material-ui/core";

function BehomeReservationImport() {
  return (
    <>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Behome.ImportReservations.Container />
      </Grid>
    </>
  );
}

export default BehomeReservationImport;
