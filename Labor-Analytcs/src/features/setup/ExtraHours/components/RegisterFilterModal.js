import React from "react";
import { connect } from "react-redux";
import { Texts } from "../../../../config";
import { FormHolder } from "FormConfig";
import {
  FilterButtonContained,
  Input,
  InputNumber,
  InputDate,
} from "../../../../components";
import { Creators } from "../reduxSagas";
import FilterContainerComponent from "../components/FilterContainer";
import { Grid } from "@material-ui/core";
import { HoursRegisterStyles as Styles } from "../../Operators/Styles";
import { createStyles } from "@material-ui/core";
import { Creators as GlobalCreators } from "../../../globalReduxSagas";
import { Validations } from "../../../../lib";
import { Alerts } from "../../../../lib";
import { customModal } from "../../../modals/utils";

function RegisterFilterModal({
  isFetching,
  ExtraHoursData,
  SendExtraHours,
  extraHours,
  getOperadoresRequest,
}) {
  const texts = Texts["pt-BR"].setup.ExtraHours.inputs;

  const mount = React.useCallback(() => {
    getOperadoresRequest();
  }, [getOperadoresRequest]);
  React.useEffect(mount, [mount]);

  function sendParameters(data) {
    data["idOperator"] = Number(ExtraHoursData.idOperator);
    SendExtraHours(data);
  }

  function setConfirmModal(props) {
    const textModal = Texts["pt-BR"].setup.ExtraHours.modalRegisterConfirm;
    Alerts.setSetUpModal(textModal.Title, [textModal.RegisterAlert], () =>
      sendParameters(props, customModal.close())
    );
  }

  return (
    <>
      <FormHolder onSubmit={setConfirmModal}>
        <Styles.InputContainer>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={7} lg={4}>
              <Input
                name="opName"
                readOnly
                inputLabel={<Styles.Label>{texts.name}</Styles.Label>}
                defaultValue={ExtraHoursData?.opName}
                alternativeColors={2}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={5} lg={2}>
              <Input
                name="opRegistry"
                inputLabel={<Styles.Label>{texts.idOperator}</Styles.Label>}
                readOnly
                defaultValue={ExtraHoursData?.opRegistry}
                alternativeColors={2}
              />
            </Grid>

            <Grid item xs={7} sm={6} md={4} lg={2}>
              <FilterContainerComponent
                styledStyles={styles.DateStyle}
                bgColor={2}
                FontSelect={1}
                title={texts.period}
              >
                <InputDate
                  name="date"
                  disableError
                  defaultValue={new Date()}
                  alternativeColors={2}
                  validation={(value) =>
                    Validations.isDATE(value, null, new Date())
                  }
                  maxDate={new Date()}
                />
              </FilterContainerComponent>
            </Grid>

            <Grid item xs={5} sm={6} md={4} lg={2}>
              <FilterContainerComponent
                styledStyles={styles.HoursStyle}
                bgColor={2}
                FontSelect={1}
                title={texts.hours}
              >
                <InputNumber
                  name="amountHours"
                  defaultValue={extraHours?.amountHours}
                  alternativeColors={2}
                  validation={Validations.validateHoursNumber}
                  marginTopInput={3}
                  required
                />
              </FilterContainerComponent>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={2}>
              <FilterButtonContained
                style={{
                  marginTop: 28,
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
function mapStateToProps(state) {
  const { isFetching, ExtraHoursData } = state.extraHours;
  const { operatorData, isFetchingOperator } = state.global;
  return {
    isFetching,
    isFetchingOperator,
    operatorData,
    ExtraHoursData,
  };
}

function mapDispatchToProps(dispatch) {
  const { GetExtraHours, SendExtraHours } = Creators;
  const { getOperadoresRequest } = GlobalCreators;
  return {
    getOperadoresRequest() {
      return dispatch(getOperadoresRequest());
    },

    GetExtraHours: function (data) {
      return dispatch(GetExtraHours(data));
    },

    SendExtraHours: function (data) {
      return dispatch(SendExtraHours(data));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFilterModal);

const styles = createStyles({
  DateStyle: {
    flexGrow: 1.5,
    flexShrink: 0,
    padding: "8px",
    paddingLeft: "1px",
    paddingRight: "1px",
    paddingTop: "2px",
  },

  HoursStyle: {
    flexGrow: 1.5,
    flexShrink: 0,
    padding: "8px",
    paddingLeft: "5px",
    paddingRight: "10px",
    paddingTop: "2px",
  },
});
