import React, { useState } from "react";
import { createStyles, Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { InputDateMMyyyy, Select } from "../../../../components";
import { FiltersContainer, FilterContainer } from "../filters";
import { Validations } from "../../../../lib";

import { connect } from "react-redux";

function EquationFilters() {
  const texts = Texts["pt-BR"].header.setupFilters;
  const [isDefault, setDefault] = useState(false);
  const options = [
    {
      value: true,
      label: texts.standardRule.yes,
    },

    {
      value: false,
      label: texts.standardRule.no,
    },
  ];

  const onChange = () => {
    setDefault(!isDefault);
  };

  return (
    <div>
      <Grid container spacing={1} direction="row">
        <FiltersContainer>
          <Grid item xs={8} sm={4} md={2} lg={6}>
            <FilterContainer
              styledStyles={styles.period}
              title={texts.standardRule.title}
            >
              <Select
                name="isDefault"
                disbleError
                defaultValue={isDefault}
                onChange={onChange}
                options={options}
              />
            </FilterContainer>
          </Grid>

          <Grid item xs={8} sm={4} md={2} lg={6}>
            <FilterContainer
              styledStyles={styles.period}
              title={texts.period.title}
            >
              <InputDateMMyyyy
                disableError
                small
                alternativeColors
                defaultValue={new Date()}
                name="period"
                disabled={!isDefault}
                validation={(value) => Validations.isDATE(value)}
              />
            </FilterContainer>
          </Grid>
        </FiltersContainer>
      </Grid>
    </div>
  );
}

export default connect()(EquationFilters);

const styles = createStyles({
  period: {
    flexGrow: 1.5,
    flexShrink: 0,
  },
});
