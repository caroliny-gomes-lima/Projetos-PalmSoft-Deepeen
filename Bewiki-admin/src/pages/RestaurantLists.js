import React from "react";
import { BeMarket } from "../features";
import { Grid } from "@material-ui/core";

function BeMarketRestaurantLists() {
  return (
    <>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <BeMarket.RestaurantLists.Container />
      </Grid>
    </>
  );
}

export default BeMarketRestaurantLists;
