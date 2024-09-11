import { Grid } from "@material-ui/core";
import React from "react";
import {
  Input,
  InputNumber,
  FilterButtonContained,
} from "../../../../components";
import { Texts } from "../../../../config";
import Style from "../../PlannedEquations/styles/EquationParametersStyle";
import EquationsFilters from "../../PlannedEquations/filters/EquationsFilters";

function CheckoutValues({ isFetching, data }) {
  const texts =
    Texts["pt-BR"].setup.performedEquations.performedEquationParameters;

  return (
    <>
      <Grid container spacing={1} direction="row">
        <Grid item xs={8} sm={6} md={2} lg={1}>
          <Input
            name="processS"
            inputLabel={<Style.Label>{texts.process}</Style.Label>}
            readOnly
            defaultValue="Separação"
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={11} sm={6} md={2} lg={2}>
          <InputNumber
            name="timeSeparation"
            inputLabel={texts.separationTime}
            defaultValue={data?.timeSeparation}
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={8} sm={6} md={2} lg={1}>
          <Input
            name="processS"
            inputLabel={<Style.Label>{texts.process}</Style.Label>}
            readOnly
            defaultValue="Checkout"
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={11} sm={6} md={2} lg={2}>
          <InputNumber
            name="timeCheckout"
            inputLabel={texts.checkoutTime}
            defaultValue={data?.timeCheckout}
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4}>
          <EquationsFilters />
        </Grid>

        <Grid item xs={6} sm={6} md={2} lg={2}>
          <FilterButtonContained
            style={{
              marginTop: 28,
            }}
            loading={isFetching}
            type="submit"
            name="button"
            disabled={isFetching}
          >
            {texts.apply}
          </FilterButtonContained>
        </Grid>
      </Grid>
    </>
  );
}

export default CheckoutValues;
