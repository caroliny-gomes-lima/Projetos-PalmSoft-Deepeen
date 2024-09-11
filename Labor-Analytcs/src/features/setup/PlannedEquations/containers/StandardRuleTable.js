import React from "react";
import { connect } from "react-redux";
import { Table } from "../../../../components";
import { Texts } from "../../../../config";
import { Creators } from "../reduxSagas";
import Style from "../styles/EquationParametersStyle";
import TwoLine from "../components/TwoLine";

function StandardRuleTable({ PlannedEquationsHistoryData, isFetching }) {
  const texts = Texts["pt-BR"].setup.PlannedEquations.standardRuleTable;

  return (
    <>
      <div>{texts.title}</div>
      {PlannedEquationsHistoryData ? (
        <Style.Content>
          <Style.InputContainer>
            <Table
              id="equationTable"
              headers={texts.tableHeaders}
              data={PlannedEquationsHistoryData.filter(
                (yes) => yes.isDefault === true
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
                <TwoLine v1={item.xaseparation} v2={item.xacheckout} />,
                <TwoLine v1={item.xbseparation} v2={item.xbcheckout} />,
                <TwoLine v1={item.xcseparation} v2={item.xccheckout} />,
                <TwoLine v1={item.xdseparation} v2={item.xdcheckout} />,
                <TwoLine v1={item.xeseparation} v2={item.xecheckout} />,
                <TwoLine v1={item.xfseparation} v2={item.xfcheckout} />,
                <TwoLine v1={item.xgseparation} v2={item.xgcheckout} />,
                <TwoLine v1={"-"} v2={item.xhcheckout} />,

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
    EquationsRequestDelete: function () {
      return dispatch(EquationsRequestDelete());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StandardRuleTable);
