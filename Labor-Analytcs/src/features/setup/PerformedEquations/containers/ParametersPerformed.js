import React from "react";
import { connect } from "react-redux";
import { Texts, ChartsColors } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import CheckoutValues from "../components/CheckoutValues";
import { Creators } from "../../PlannedEquations/reduxSagas";
import Style from "../../PlannedEquations/styles/EquationParametersStyle";
import { Alerts } from "../../../../lib";
import { customModal } from "../../../modals/utils";
import { BlockTitle } from "../../../../pages/styles/defaultStyles";

function PerformedEquation({
  performedEquationsHistoryData,
  isFetching,
  PerformedEquationsRequestLoad,
  EquationsRequestSave,
}) {
  const texts =
    Texts["pt-BR"].setup.performedEquations.performedEquationParameters;
  const mount = React.useCallback(() => {
    PerformedEquationsRequestLoad();
  }, [PerformedEquationsRequestLoad]);

  React.useEffect(mount, [mount]);

  function sendParameters(data) {
    data["type"] = 2;
    EquationsRequestSave(data);
  }

  function setPeriodModalApply(props) {
    const textModal = Texts["pt-BR"].setup.ModalDefault;
    const colors = ChartsColors.orderingProductivity;

    if (props.isDefault === "true") {
      Alerts.setSetUpModal(
        textModal.title,
        [
          textModal.textYes1,
          <span style={{ color: colors.chartFill }}>
            {(new Date(props.period).getMonth() + 1)
              .toString()
              .padStart(2, "0") +
              " / " +
              new Date(props.period).getFullYear()}
          </span>,
          textModal.textYes2,
        ],
        () => sendParameters(props, customModal.close())
      );
    } else {
      Alerts.setSetUpModal(textModal.title, [textModal.textNo], () =>
        sendParameters(props, customModal.close())
      );
    }
  }

  return (
    <>
      <BlockTitle>{texts.title}</BlockTitle>
      <Style.Content>
        {performedEquationsHistoryData ? (
          <FormHolder onSubmit={setPeriodModalApply}>
            <Style.InputContainer>
              <CheckoutValues
                data={
                  performedEquationsHistoryData.filter(
                    (s) => s.isDefault === true
                  )[0]
                }
                isFetching={isFetching}
              />
            </Style.InputContainer>
          </FormHolder>
        ) : null}
      </Style.Content>
    </>
  );
}

function mapStateToProps(state) {
  const { performedEquationsHistoryData, isFetching } = state.setupEquations;
  return {
    performedEquationsHistoryData,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { PerformedEquationsRequestLoad, EquationsRequestSave } = Creators;
  return {
    PerformedEquationsRequestLoad: function () {
      return dispatch(PerformedEquationsRequestLoad());
    },
    EquationsRequestSave: function (data) {
      return dispatch(EquationsRequestSave(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PerformedEquation);
