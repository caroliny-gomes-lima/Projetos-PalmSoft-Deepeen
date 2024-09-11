import React from "react";
import { connect } from "react-redux";
import { Texts, ChartsColors } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import CheckoutValues from "../components/CheckoutValues";
import SeparationValues from "../components/SeparationValues";
import { Creators } from "../reduxSagas";
import Style from "../styles/EquationParametersStyle";
import { Button } from "@material-ui/core";
import { Info } from "@material-ui/icons";
import { Alerts } from "../../../../lib";
import { customModal } from "../../../modals/utils";
import { BlockTitle } from "../../../../pages/styles/defaultStyles";

function EquationParameters({
  PlannedEquationsHistoryData,
  isFetching,
  PlannedEquationsRequestLoad,
  EquationsRequestSave,
}) {
  const texts = Texts["pt-BR"].setup.PlannedEquations.equationParameters;
  const mount = React.useCallback(() => {
    PlannedEquationsRequestLoad();
  }, [PlannedEquationsRequestLoad]);

  React.useEffect(mount, [mount]);

  function sendParameters(data) {
    data["type"] = 1;
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
      <div>
        <BlockTitle>
          <Button
            type="clearDefault"
            style={{
              justifyContent: "flex-start",
              marginRight: "10px",
            }}
            onClick={() =>
              Alerts.setCustomModal(texts.titleModal, texts.textModal)
            }
          >
            <Info color="primary"></Info>
          </Button>
          {texts.title}
        </BlockTitle>
      </div>

      <Style.Content>
        {PlannedEquationsHistoryData ? (
          <FormHolder onSubmit={setPeriodModalApply}>
            <Style.InputContainer>
              <SeparationValues
                data={
                  PlannedEquationsHistoryData.filter(
                    (s) => s.isDefault === true
                  )[0]
                }
                isFetching={isFetching}
              />
            </Style.InputContainer>

            <Style.InputContainer>
              <CheckoutValues
                data={
                  PlannedEquationsHistoryData.filter(
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
  const { PlannedEquationsHistoryData, isFetching } = state.setupEquations;
  return {
    PlannedEquationsHistoryData,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { PlannedEquationsRequestLoad, EquationsRequestSave } = Creators;
  return {
    PlannedEquationsRequestLoad: function () {
      return dispatch(PlannedEquationsRequestLoad());
    },
    EquationsRequestSave: function (data) {
      return dispatch(EquationsRequestSave(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquationParameters);
