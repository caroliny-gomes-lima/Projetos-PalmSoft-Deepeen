import React from "react";
import { OpportunityStyles as Styles } from "./styles";
import { Content } from "./styles/defaultStyles";

function OpportunityPage() {
  return (
    <Styles.Container>
      <Content $startCol={1} $endCol={3} $startRow={1} $endRow={3}>
        <div>TODO... resultado por dimensão</div>
        <div>TODO... resumo de oportunidades</div>
      </Content>
      <Content $startCol={3} $endCol={6}>
        TODO detalhamento de processos...
      </Content>
      <Content $startCol={3} $endCol={6}>
        TODO utilização de capacidade histórica...
      </Content>
    </Styles.Container>
  );
}

export default OpportunityPage;
