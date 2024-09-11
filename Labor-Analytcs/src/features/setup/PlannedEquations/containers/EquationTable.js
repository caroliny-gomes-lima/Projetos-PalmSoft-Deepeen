import React from "react";
import { connect } from "react-redux";
import { Table } from "../../../../components";
import { ChartsColors, Texts } from "../../../../config";
import { Creators } from "../reduxSagas";
import Style from "../styles/EquationParametersStyle";
import TwoLine from "../components/TwoLine";
import { Alerts } from "../../../../lib";
import { Button } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { customModal } from "../../../modals/utils";

function EquationTable({
  PlannedEquationsHistoryData,
  isFetching,
  EquationsRequestDelete,
}) {
  const texts = Texts["pt-BR"].setup.PlannedEquations.equationTable;

  function deleteParameters(data) {
    const infos = {
      type: 1,
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
      {PlannedEquationsHistoryData ? (
        <Style.Content>
          <Style.InputContainer>
            <Table
              id="equationTable"
              headers={texts.tableHeadersCustom}
              data={PlannedEquationsHistoryData.filter(
                (yes) => yes.isDefault === false
              )}
              placeholderSize={15}
              columnSize={6}
              loading={isFetching}
              renderItemColumns={(item) => [
                <TwoLine
                  v2={new Date(item.createDate).toLocaleTimeString()}
                  v1={new Date(item.createDate).toLocaleDateString()}
                />,
                <TwoLine v1={texts.separation} v2={texts.checkout} />,
                <TwoLine v2={item.year} v1={item.month} />,
                <TwoLine v1={item.xaseparation} v2={item.xacheckout} />,
                <TwoLine v1={item.xbseparation} v2={item.xbcheckout} />,
                <TwoLine v1={item.xcseparation} v2={item.xccheckout} />,
                <TwoLine v1={item.xdseparation} v2={item.xdcheckout} />,
                <TwoLine v1={item.xeseparation} v2={item.xecheckout} />,
                <TwoLine v1={item.xfseparation} v2={item.xfcheckout} />,
                <TwoLine v1={item.xgseparation} v2={item.xgcheckout} />,
                <TwoLine v1={"-"} v2={item.xhcheckout} />,
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
  const { PlannedEquationsHistoryData, isFetching } = state.setupEquations;
  return {
    PlannedEquationsHistoryData,
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

export default connect(mapStateToProps, mapDispatchToProps)(EquationTable);
