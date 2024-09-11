import { Box, Grid } from "@material-ui/core";
import React from "react";
import { FilterButtonContained, InputDate } from "../../../components";
import { Texts } from "../../../config";
import { TransferRight } from "../../../config/icons";
import Style from "../styles/EquationParametersStyle";

function Inputs({ isFetching, formConfig }) {
  const [fromDate, setFromDate] = React.useState(null);

  /**
   *
   * @param {Date} newDate
   */
  function setToDate(newDate) {
    setFromDate(newDate);
    let toDate = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
    formConfig.setValue("end", toDate);
  }

  const texts = Texts["pt-BR"].report.reportFilter;
  return (
    <Box display="flex" flexDirection="column">
      <Style.Label>{texts.period}</Style.Label>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <InputDate
            name="start"
            maxDate={new Date()}
            onChange={(value, value2) => setToDate(value2)}
            placeholder={texts.from}
            openTo="month"
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <InputDate
            name="end"
            minDate={fromDate}
            maxDate={new Date()}
            disabled={fromDate === null}
            placeholder={texts.to}
            openTo="month"
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={4}>
          <Grid alignItems="center" container spacing={2}>
            <Grid item xs={7}>
              <FilterButtonContained
                loading={isFetching}
                type="submit"
                name="button"
                disabled={isFetching}
                startIcon={<TransferRight />}
              >
                {texts.apply}
              </FilterButtonContained>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Inputs;
