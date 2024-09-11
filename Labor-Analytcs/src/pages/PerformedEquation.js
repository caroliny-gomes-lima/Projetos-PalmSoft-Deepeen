import React from "react";
import { Setup } from "../features";
import { OpportunityStyles as Styles } from "./styles";
import { Content } from "./styles/defaultStyles";

function PerformedEquation() {
  return (
    <Styles.Container>
      <Content $startCol={1} $endCol={12} $startRow={1} $endRow={10}>
        <Setup.PerformedEquation.ParametersPerformed />
      </Content>

      <Content $startCol={1} $endCol={12} $startRow={10} $endRow={20}>
        <Setup.PerformedEquation.StandardRuleTable />
        <Setup.PerformedEquation.PerformedEquationTable />
      </Content>
    </Styles.Container>
  );
}

export default PerformedEquation;
