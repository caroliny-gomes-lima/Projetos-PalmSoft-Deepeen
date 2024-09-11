import React from "react";
import { createStyles, Grid, Box } from "@material-ui/core";

import FilterContainerComponent from "./FilterContainer";
import InputData from "./InputData";

function WeekHours({ value1, value2, title }) {
  return (
    <FilterContainerComponent
      styledStyles={styles.inputStyle}
      title={title}
      bgColor={1}
    >
      <Box gridColumnGap={5} display="flex" flexDirection="row">
        <Grid item xs={10} sm={12} md={6} lg={6}>
          <InputData data={value1} type={1} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <InputData data={value2} type={1} />
        </Grid>
      </Box>
    </FilterContainerComponent>
  );
}
export default WeekHours;
const styles = createStyles({
  inputStyle: {
    width: "240px",
    height: "95px",
  },
});
