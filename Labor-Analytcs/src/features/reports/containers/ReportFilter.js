import React from "react";
import { connect } from "react-redux";
import { Texts } from "../../../config";
import { FormHolder } from "../../../FormConfig";
import Inputs from "../components/Inputs";
import { Creators } from "../reduxSagas";
import Style from "../styles/EquationParametersStyle";

function ReportFilter({ isFetching, reportsRequestLoad }) {
  const [formConfig, setFormConfig] = React.useState(null);
  const texts = Texts["pt-BR"].report.reportFilter;

  function sendParameters(data) {
    if (!isFetching) {
      reportsRequestLoad(data);
    }
  }

  return (
    <>
      <div>{texts.title}</div>
      <Style.Content>
        <FormHolder formRef={setFormConfig} onSubmit={sendParameters}>
          <Style.InputContainer>
            <Inputs formConfig={formConfig} isFetching={isFetching} />
          </Style.InputContainer>
        </FormHolder>
      </Style.Content>
    </>
  );
}

function mapStateToProps(state) {
  const { reportData, isFetching } = state.report;
  return {
    reportData,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  const { reportsRequestLoad } = Creators;
  return {
    reportsRequestLoad: function (data) {
      return dispatch(reportsRequestLoad(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportFilter);
