import React from "react";
import { FormHolder } from "FormConfig";
import { Texts } from "../../../../config";
import { Input } from "../../../../components";
import { Search } from "@material-ui/icons";
import colors from "../../../../config/colors";
import Styles from "../Styles/ExtraHoursStyle";
import { Grid, InputAdornment } from "@material-ui/core";
import InputAutoComplete from "../../../../components/inputs/InputAutoComplete";

//import InputSearch from "components/inputs/InputSearch";
import FilterContainerComponent from "../components/FilterContainer";

function InputsHeader({ isFetching, sendParameters, operatorData, data }) {
  const texts = Texts["pt-BR"].setup.ExtraHours.inputs;
  const [formRef, setformRef] = React.useState(null);

  const onChangeOperator = (event, operatorId) => {
    if (operatorId) {
      sendParameters(operatorId, changeForm);
    }
  };

  function changeForm(data) {
    formRef.setValue("opSector", data.opSector);

    if (formRef.getFieldValue("opSector") === "separador") {
      formRef.setValue("opSector", "Separação");
    } else if (formRef.getFieldValue("opSector") === "checkout") {
      formRef.setValue("opSector", "Checkout");
    }
    formRef.setValue("opShift", data.opShift);
    formRef.setValue("opStatus", data.opStatus);
  }

  return (
    <>
      <FormHolder formRef={setformRef}>
        <Grid container spacing={0} direction="row" justifyContent="center">
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <FilterContainerComponent bgColor={1} title={"Buscar Operador"}>
              <InputAutoComplete
                name="opName"
                color="secondary"
                iconEnd={<Search style={{ color: colors.grayText }} />}
                options={operatorData}
                onChange={onChangeOperator}
                loading={isFetching}
                disabled={isFetching}
                alternativeColors
                endAdornment={
                  <InputAdornment position="end">{Search}</InputAdornment>
                }
              />
            </FilterContainerComponent>
          </Grid>

          <Grid item xs={12} sm={6} md={2} lg={3}>
            <FilterContainerComponent>
              <Input
                name="opSector"
                inputLabel={<Styles.Label>{texts.sector}</Styles.Label>}
                alternativeColors={2}
                readOnly
                defaultValue={data ? data.opSector : ""}
                loading={isFetching}
                disabled={isFetching}
              />
            </FilterContainerComponent>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={3}>
            <FilterContainerComponent>
              <Input
                name="opShift"
                inputLabel={<Styles.Label>{texts.shift}</Styles.Label>}
                alternativeColors={2}
                readOnly
                defaultValue={data ? data.opShift : ""}
                loading={isFetching}
                disabled={isFetching}
              />
            </FilterContainerComponent>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}>
            <FilterContainerComponent>
              <Input
                name="opStatus"
                inputLabel={<Styles.Label>{texts.status}</Styles.Label>}
                alternativeColors={2}
                readOnly
                defaultValue={data ? data.opStatus : ""}
                loading={isFetching}
                disabled={isFetching}
              />
            </FilterContainerComponent>
          </Grid>
        </Grid>
      </FormHolder>
    </>
  );
}

export default InputsHeader;
