import { Grid } from "@material-ui/core";
import React from "react";
import { Input, InputNumber } from "../../../../components";
import { Texts } from "../../../../config";

import Style from "../styles/EquationParametersStyle";
import ValueOfL from "./ValueOfL";
import { EquationsFilters } from "../filters";

function SeparationValues({ data }) {
  const texts = Texts["pt-BR"].setup.PlannedEquations.equationParameters;

  return (
    <>
      <Grid container spacing={1} direction="row">
        <Grid item xs={5} sm={6} md={2} lg={1}>
          <Input
            name="processS"
            inputLabel={<Style.Label>{texts.process}</Style.Label>}
            readOnly
            defaultValue="Separação"
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={7} sm={6} md={2} lg={1}>
          <InputNumber
            name="xaseparation"
            inputLabel={<ValueOfL letter="a" />}
            defaultValue={data?.xaseparation}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xbseparation"
            inputLabel={<ValueOfL letter="b" />}
            defaultValue={data?.xbseparation}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xcseparation"
            inputLabel={<ValueOfL letter="c" />}
            defaultValue={data.xcseparation}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xdseparation"
            inputLabel={<ValueOfL letter="d" />}
            defaultValue={data?.xdseparation}
            alternativeColors={2}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xeseparation"
            inputLabel={<ValueOfL letter="e" />}
            defaultValue={data?.xeseparation}
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xfseparation"
            inputLabel={<ValueOfL letter="f" />}
            defaultValue={data?.xfseparation}
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={6} sm={6} md={2} lg={1}>
          <InputNumber
            name="xgseparation"
            inputLabel={<ValueOfL letter="g" />}
            defaultValue={data?.xgseparation}
            alternativeColors={2}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4}>
          <EquationsFilters />
        </Grid>
      </Grid>
    </>
  );
}

export default SeparationValues;
