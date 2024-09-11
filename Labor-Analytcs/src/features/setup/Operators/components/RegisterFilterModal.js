import React from "react";
import { Texts } from "../../../../config";
import { FormHolder } from "FormConfig";
import { FilterButtonContained, Select } from "../../../../components";
import { Input, InputDate } from "../../../../components";
import FilterContainerComponent from "../components/FilterContainer";
import { Grid } from "@material-ui/core";
import { HoursRegisterStyles as Styles } from "../Styles";
import { createStyles } from "@material-ui/core";
import alerts from "lib/Alerts";
import { customModal } from "features/modals/utils";

function RegisterFilterModal({
  OperatorsData,
  isFetching,
  form,
  sendOperators,
  operatorType,
  operatorStatus,
  sectors,
  shifts,
}) {
  const texts = Texts["pt-BR"].setup.Operators.OperatorRegisterFilters;

  const setConfirmModal = (props) => {
    const textModal = texts.modal;
    alerts.setSetUpModal(textModal.text, [textModal.text], () => {
      sendOperators(props);
      customModal.close();
    });
  };

  return (
    <>
      <FormHolder onSubmit={setConfirmModal}>
        <Styles.InputContainer>
          <Grid container spacing={1}>
            <Grid item xs={5} sm={6} md={2} lg={6}>
              <Styles.Label>{texts.fullName}</Styles.Label>
              <Input name="name" required alternativeColors={2} />
            </Grid>
            <Grid item xs={5} sm={6} md={2} lg={6}>
              <Styles.Label>{texts.idOperator}</Styles.Label>
              <Input name="registry" required alternativeColors={2} />
            </Grid>
            <Grid item xs={5} sm={6} md={2} lg={3}>
              <Styles.Label>{texts.Sector}</Styles.Label>
              <Select
                name="sector"
                required
                options={sectors}
                alternativeColors={2}
                customInput
              />
            </Grid>
            <Grid item xs={5} sm={6} md={2} lg={3}>
              <Styles.Label>{texts.Shift}</Styles.Label>
              <Select
                name="workShift"
                required
                options={shifts}
                alternativeColors={2}
                customInput
              />
            </Grid>
            <Grid item xs={5} sm={6} md={2} lg={3}>
              <Styles.Label>{texts.typeCollaborator}</Styles.Label>
              <Select
                name="opType"
                required
                options={operatorType}
                alternativeColors={2}
                customInput
              />
            </Grid>
            <Grid item xs={5} sm={6} md={2} lg={3}>
              <Styles.Label>{texts.Status}</Styles.Label>
              <Select
                name="status"
                required
                options={operatorStatus}
                alternativeColors={2}
                customInput
              />
            </Grid>

            <Grid item xs={5} sm={6} md={2} lg={2}>
              <FilterContainerComponent
                styledStyles={styles.dateStartStyle}
                required
                bgColor={2}
                title={texts.dateStart}
              >
                <InputDate
                  name="admissionDate"
                  required
                  alternativeColors={2}
                />
              </FilterContainerComponent>
            </Grid>
            <Grid item xs={5} sm={6} md={2} lg={5}>
              <FilterContainerComponent
                styledStyles={styles.vacationDateStyle}
                bgColor={2}
                title={texts.statusDate}
              >
                <Grid container spacing={2} direction="row">
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <InputDate
                      name="statusStart"
                      placeholder={texts.fromLabel}
                      alternativeColors={2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <InputDate
                      name="statusEnd"
                      placeholder={texts.toLabel}
                      alternativeColors={2}
                    />
                  </Grid>
                </Grid>
              </FilterContainerComponent>
            </Grid>

            <Grid item xs={2} sm={3} md={3} lg={3}>
              <FilterButtonContained
                style={{
                  marginTop: 27,
                  width: "310px",
                }}
                loading={isFetching}
                type="submit"
                name="button"
                disabled={isFetching}
              >
                {texts.register}
              </FilterButtonContained>
            </Grid>
          </Grid>
        </Styles.InputContainer>
      </FormHolder>
    </>
  );
}
export default RegisterFilterModal;
const styles = createStyles({
  dateStyle: {
    flexGrow: 1.5,
    flexShrink: 0,
    width: "100%",
    padding: "8px",
    paddingLeft: "1px",
    paddingTop: "1px",
  },
  vacationDateStyle: {
    width: "100%",
    padding: "8px",
    paddingLeft: "1px",
    paddingTop: "1px",
  },
  dateStartStyle: {
    flexGrow: 1.5,
    flexShrink: 0,
    width: "100%",
    padding: "8px",
    paddingLeft: "1px",
    paddingTop: "1px",
  },
});
