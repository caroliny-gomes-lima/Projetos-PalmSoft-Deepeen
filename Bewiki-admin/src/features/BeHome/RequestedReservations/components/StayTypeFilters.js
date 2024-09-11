import React from "react";
import { Texts } from "../../../../config";
import Styles from "../styles/Styles";
import { Select } from "../../../../components";
import { FormHolder } from "../../../../FormConfig";
function StayTypeFilters({ name, onChange, options, defaultValue }) {
  const Title = Texts["pt-BR"].beHome;

  return (
    <>
      <FormHolder>
        <Styles.FilterContainer>
          <Styles.FilterTitle>
            {Title.RequestedReservations.filterTitle}
          </Styles.FilterTitle>

          <Select
            name={name}
            onChange={onChange}
            options={options}
            defaultValue={defaultValue}
            disableError
            disableBorder
          />
        </Styles.FilterContainer>
      </FormHolder>
    </>
  );
}

export default StayTypeFilters;
