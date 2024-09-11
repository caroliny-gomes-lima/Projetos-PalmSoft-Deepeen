import React from "react";
import { InputNumber } from "components";
import { Texts } from "../../../../config";
import { createStyles, Grid, Box } from "@material-ui/core";

import FilterContainerComponent from "../components/FilterContainer";

function SaturdayHours() {
  const texts = Texts["pt-BR"].setup.Turns.turnsInputs;
  return (
    <FilterContainerComponent
      styledStyles={styles.inputStyle}
      title={texts.Saturday}
      bgColor={1}
    >
      <Box gridColumnGap={5} display="flex" flexDirection="row">
        <Grid item xs={10} sm={12} md={6} lg={6}>
          <InputNumber
            name="WeekendTimeStart"
            alternativeColors={2}
            marginTopInput={2}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <InputNumber
            name="WeekendTimeEnd"
            alternativeColors={2}
            marginTopInput={2}
          />
        </Grid>
      </Box>
    </FilterContainerComponent>
  );
}
export default SaturdayHours;
const styles = createStyles({
  inputStyle: {
    width: "240px",
    height: "95px",
  },
});
