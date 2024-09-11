import React from "react";
import { InputNumber } from "components";
import { Texts } from "../../../../config";
import { createStyles, Grid, Box } from "@material-ui/core";

import FilterContainerComponent from "../components/FilterContainer";

function WeekTotalTime() {
  const texts = Texts["pt-BR"].setup.Turns.turnsInputs;
  return (
    <FilterContainerComponent
      styledStyles={styles.inputStyle}
      title={texts.week}
      bgColor={1}
    >
      <Box gridColumnGap={5} display="flex" flexDirection="row">
        <Grid item xs={10} sm={12} md={6} lg={12}>
          <InputNumber
            name="WeekTotalTime"
            alternativeColors={2}
            marginTopInput={2}
          />
        </Grid>
      </Box>
    </FilterContainerComponent>
  );
}
export default WeekTotalTime;
const styles = createStyles({
  inputStyle: {
    width: "180px",
    height: "95px",
  },
});
