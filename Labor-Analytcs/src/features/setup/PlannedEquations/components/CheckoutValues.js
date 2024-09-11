import { Grid } from "@material-ui/core";
import React from "react";
import { Texts } from "../../../../config";
import Style from "../styles/EquationParametersStyle";
import ValueOfL from "./ValueOfL";
import {
  Input,
  InputNumber,
  FilterButtonContained,
} from "../../../../components";

function CheckoutValues({ isFetching, data }) {
  const texts = Texts["pt-BR"].setup.PlannedEquations.equationParameters;

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={5} sm={6} md={2} lg={1}>
          <Input
            name="processS"
            inputLabel={<Style.Label>{texts.process}</Style.Label>}
            readOnly
            defaultValue="Checkout"
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xacheckout"
            inputLabel={<ValueOfL letter="a" />}
            defaultValue={data?.xacheckout}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xbcheckout"
            inputLabel={<ValueOfL letter="b" />}
            defaultValue={data?.xbcheckout}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xccheckout"
            inputLabel={<ValueOfL letter="c" />}
            defaultValue={data?.xccheckout}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xdcheckout"
            inputLabel={<ValueOfL letter="d" />}
            defaultValue={data?.xdcheckout}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xecheckout"
            inputLabel={<ValueOfL letter="e" />}
            defaultValue={data?.xecheckout}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xfcheckout"
            inputLabel={<ValueOfL letter="f" />}
            defaultValue={data?.xfcheckout}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xgcheckout"
            inputLabel={<ValueOfL letter="g" />}
            defaultValue={data?.xgcheckout}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xhcheckout"
            inputLabel={<ValueOfL letter="h" />}
            defaultValue={data?.xhcheckout}
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={6} sm={3} md={3} lg={2}>
          <FilterButtonContained
            style={{ marginTop: 29 }}
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
