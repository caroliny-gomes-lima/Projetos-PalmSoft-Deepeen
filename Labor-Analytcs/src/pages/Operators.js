import React from "react";
import { Setup } from "../features";
import { OpportunityStyles as Styles } from "./styles";
import { Content } from "./styles/defaultStyles";
function Operators() {
  return (
    <Styles.Container>
      <Content $startCol={1} $endCol={12} $startRow={1} $endRow={1}>
        <Setup.operatorsFilters.Container />
      </Content>
      <Content $startCol={1} $endCol={12} $startRow={2} $endRow={40}>
        <Setup.operatorsFilters.OperatorsTable />
      </Content>
    </Styles.Container>
  );
}

export default Operators;
