import React from "react";
import { createStyles, Grid, Box } from "@material-ui/core";

import FilterContainerComponent from "./FilterContainer";
import { InputNumber } from "components";
import { Spacing } from "config";

function InvalidHoursInput({ name, title, required = false }) {
  return (
    <FilterContainerComponent
      styledStyles={styles.inputStyle}
      title={title}
      bgColor={1}
    >
      <Box gridColumnGap={5} display="flex" flexDirection="row">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div style={{ marginTop: -Spacing(1.2) }}></div>
          <InputNumber
            defaultValue={0}
            name={name}
            required={required}
            small
            alternativeColors={2}
          />
        </Grid>
      </Box>
    </FilterContainerComponent>
  );
}
export default InvalidHoursInput;
const styles = createStyles({
  inputStyle: {
    width: "120px",
    height: "95px",
  },
});
