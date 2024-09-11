import React from "react";
import { Setup } from "../features";
import { OpportunityStyles as Styles } from "./styles";
import { Content } from "./styles/defaultStyles";

function SetupEquation() {
  return (
    <Styles.Container>
      <Content $startCol={1} $endCol={12} $startRow={1} $endRow={10}>
        <Setup.PlannedEquation.EquationParameters />
      </Content>
      <Content $startCol={1} $endCol={12} $startRow={10} $endRow={20}>
        <Setup.PlannedEquation.StandardRuleTable />
        <Setup.PlannedEquation.EquationTable />
      </Content>
    </Styles.Container>
  );
}

export default SetupEquation;
