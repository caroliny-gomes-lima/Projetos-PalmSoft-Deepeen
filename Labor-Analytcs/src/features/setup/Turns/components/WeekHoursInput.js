import React from "react";
import { createStyles, Grid, Box } from "@material-ui/core";

import FilterContainerComponent from "./FilterContainer";
import { InputTime } from "components";

function WeekHoursInput({ title, name1, name2, required = false }) {
  return (
    <FilterContainerComponent
      styledStyles={styles.inputStyle}
      title={title}
      bgColor={1}
    >
      <Box gridColumnGap={5} display="flex" flexDirection="row">
        <Grid item xs={10} sm={12} md={6} lg={6}>
          <InputTime
            required={required}
            autoOk={false}
            name={name1}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <InputTime
            required={required}
            autoOk={false}
            name={name2}
            alternativeColors={2}
          />
        </Grid>
      </Box>
    </FilterContainerComponent>
  );
}
export default WeekHoursInput;
const styles = createStyles({
  inputStyle: {
    width: "240px",
    height: "95px",
  },
});
