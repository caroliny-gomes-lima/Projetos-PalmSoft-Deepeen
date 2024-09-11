import React from "react";
import { connect } from "react-redux";
import { Table } from "../../../../components";
import { Texts } from "../../../../config";
import { Creators } from "../../PlannedEquations/reduxSagas";
import Style from "../../PlannedEquations/styles/EquationParametersStyle";
import TwoLine from "../../PlannedEquations/components/TwoLine";

function StandardRuleTable({ performedEquationsHistoryData, isFetching }) {
  const texts = Texts["pt-BR"].setup.performedEquations.standardRuleTable;

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
                (s) => s.isDefault === true
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
                <TwoLine v1={item.timeSeparation} v2={item.timeCheckout} />,
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
  const { PlannedEquationsRequestLoad, EquationsRequestDelete } = Creators;
  return {
    PlannedEquationsRequestLoad: function () {
      return dispatch(PlannedEquationsRequestLoad());
    },

    EquationsRequestDelete: function () {
      return dispatch(EquationsRequestDelete());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StandardRuleTable);
