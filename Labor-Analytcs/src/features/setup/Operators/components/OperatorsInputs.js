import { createStyles, Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import FilterContainerComponent from "./FilterContainer";
import { Select } from "../../../../components";
import Styles from "../Styles/OperatorStyle";
import InputAutoComplete from "components/inputs/InputAutoComplete";

function OperatorsInputs({
  ops,
  sectors,
  shifts,
  isFetching,
  form,
  getOperators,
  operatorStatus,
}) {
  const texts = Texts["pt-BR"].setup.Operators;
  const onChange = () => {
    const data = form.getValues();
    data["operator"] = data["operator"] ? data["operator"] : -1;
    data["sector"] = data["sector"] === "0" ? "" : data["sector"];

    getOperators(
      data["operator"],
      data["sector"],
      data["shift"],
      data["status"]
    );
  };
  return (
    <>
      <Grid container spacing={1} direction="row">
        <Grid item xs={8} sm={6} md={4} lg={4}>
          <FilterContainerComponent styledStyles={styles.operatorStyle}>
            <Styles.Label>{texts.filtersInput.name}</Styles.Label>
            <InputAutoComplete
              name="operator"
              options={ops}
              alternativeColors={2}
              loading={isFetching}
              onChange={onChange}
              customInput
            />
          </FilterContainerComponent>
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={2}>
          <FilterContainerComponent styledStyles={styles.sectorStyle}>
            <Styles.Label>{texts.filtersInput.sector}</Styles.Label>
            <Select
              name="sector"
              options={sectors}
              loading={isFetching}
              alternativeColors={2}
              onChange={onChange}
              defaultValue={0}
              customInput
            />
          </FilterContainerComponent>
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={2}>
          <FilterContainerComponent styledStyles={styles.shiftStyle}>
            <Styles.Label>{texts.filtersInput.shift}</Styles.Label>
            <Select
              name="shift"
              options={shifts}
              loading={isFetching}
              alternativeColors={2}
              onChange={onChange}
              defaultValue={0}
              customInput
            />
          </FilterContainerComponent>
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={2}>
          <FilterContainerComponent styledStyles={styles.shiftStyle}>
            <Styles.Label>{texts.filtersInput.status}</Styles.Label>
            <Select
              name="status"
              options={operatorStatus}
              loading={isFetching}
              alternativeColors={2}
              onChange={onChange}
              defaultValue={0}
              customInput
            />
          </FilterContainerComponent>
        </Grid>
      </Grid>
    </>
  );
}
export default OperatorsInputs;

const styles = createStyles({
  idOperatorStyle: {
    flexGrow: 1.5,
    flexShrink: 0,
    width: "367px",
  },
  sectorStyle: {
    flexGrow: 1.5,
    flexShrink: 0,
    width: "245px",
  },
  shiftStyle: {
    flexGrow: 1.5,
    flexShrink: 0,
    width: "245px",
  },
  statusStyle: {
    flexGrow: 1.5,
    flexShrink: 0,
    width: "240px",
  },
});
