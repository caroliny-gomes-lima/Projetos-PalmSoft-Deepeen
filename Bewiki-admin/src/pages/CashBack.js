import React from "react";
import { Principal } from "../features";
import { Grid } from "@material-ui/core";

function CashBackPage() {
  return (
    <>
      <Grid item xs={12} sm={12} md={9} lg={12}>
        <Principal.CashBack.Container />
      </Grid>
    </>
  );
}
export default CashBackPage;
