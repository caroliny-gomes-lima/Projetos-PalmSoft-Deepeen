import React from "react";
import { OpportunityStyles as Styles } from "./styles";
import { Content } from "./styles/defaultStyles";
import { Reports } from "../features";
function Report() {
  return (
    <Styles.Container>
      <Content $startCol={1} $endCol={12}>
        <Reports.ReportFilter />
      </Content>
      <Content $startCol={1} $endCol={12} $startRow={2} $endRow={16}>
        <Reports.ReportTable />
      </Content>
    </Styles.Container>
  );
}

export default Report;
