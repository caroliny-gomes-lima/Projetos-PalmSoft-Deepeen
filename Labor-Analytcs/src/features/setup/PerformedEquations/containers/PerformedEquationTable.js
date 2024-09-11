import React from "react";
import { connect } from "react-redux";
import { Table } from "../../../../components";
import { ChartsColors, Texts } from "../../../../config";
import { Creators } from "../../PlannedEquations/reduxSagas";
import Style from "../../PlannedEquations/styles/EquationParametersStyle";
import TwoLine from "../../PlannedEquations/components/TwoLine";
import { Button } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { Alerts } from "../../../../lib";
import { customModal } from "../../../modals/utils";

function PerformedEquationTable({
  performedEquationsHistoryData,
  isFetching,
  EquationsRequestDelete,
}) {
  const texts =
    Texts["pt-BR"].setup.performedEquations.PerformedStandardRuleTable;

  function deleteParameters(data) {
    const infos = {
      type: 2,
      data: data,
    };
    EquationsRequestDelete(infos);
  }

  function deletePeriodModal(item) {
    const textModal = Texts["pt-BR"].setup.DeleteModalPeriod;
    const colors = ChartsColors.orderingProductivity;
    Alerts.setSetupDeleteModal(
      textModal.deleteTitleModal,
      [
        textModal.DeleteModalMessage,
        <span style={{ color: colors.chartFill }}>
          {item.month + " / " + item.year}
        </span>,
      ],
      () => deleteParameters(item, customModal.close())
    );
  }

  return (
    <>
      <div>{texts.title}</div>
      {performedEquationsHistoryData ? (
        <Style.Content>
          <Style.InputContainer>
            <Table
              id="equationTable"
              headers={texts.tableHeaders}
              data={performedEquationsHistoryData.filter(
                (s) => s.isDefault === false
              )}
              placeholderSize={15}
              columnSize={6}
              loading={isFetching}
              renderItemColumns={(item) => [
                <TwoLine
                  v1={new Date(item.createDate).toLocaleDateString()}
                  v2={new Date(item.createDate).toLocaleTimeString()}
                />,
                <TwoLine v1={texts.separation} v2={texts.checkout} />,
                <TwoLine v2={item.year} v1={item.month} />,
                <TwoLine v1={item.timeSeparation} v2={item.timeCheckout} />,
                <TwoLine
                  iconButton={
                    <Button
                      type="clearDefault"
                      onClick={() => deletePeriodModal(item)}
                    >
                      <DeleteForever />
                    </Button>
                  }
                />,
              ]}
            />
          </Style.InputContainer>
        </Style.Content>
      ) : null}
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
  const { EquationsRequestLoad, EquationsRequestDelete } = Creators;
  return {
    EquationsRequestLoad: function () {
      return dispatch(EquationsRequestLoad());
    },
    EquationsRequestDelete: function (data) {
      return dispatch(EquationsRequestDelete(data));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerformedEquationTable);
