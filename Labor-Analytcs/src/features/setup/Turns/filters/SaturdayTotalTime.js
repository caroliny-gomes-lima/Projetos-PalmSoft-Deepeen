import React from "react";
import { InputNumber } from "components";
import { Texts } from "../../../../config";
import { createStyles, Grid, Box } from "@material-ui/core";

import FilterContainerComponent from "../components/FilterContainer";

function SaturdayTotalTime() {
  const texts = Texts["pt-BR"].setup.Turns.turnsInputs;
  return (
    <FilterContainerComponent
      styledStyles={styles.inputStyle}
      title={texts.Saturday}
      bgColor={1}
    >
      <Box gridColumnGap={5} display="flex" flexDirection="row">
        <Grid item xs={10} sm={12} md={6} lg={12}>
          <InputNumber
            name="SaturdayTotalTime"
            alternativeColors={2}
            marginTopInput={2}
          />
        </Grid>
      </Box>
    </FilterContainerComponent>
  );
}
export default SaturdayTotalTime;
const styles = createStyles({
  inputStyle: {
    width: "180px",
    height: "95px",
  },
});
