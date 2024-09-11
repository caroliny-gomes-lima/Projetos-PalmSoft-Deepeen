import React from "react";
import { Texts } from "../config";
import { Costs } from "../features";
import { CostsStyles as Styles } from "./styles";
import { Content } from "./styles/defaultStyles";

function CostsPage() {
  const texts = Texts["pt-BR"].charts;
  return (
    <Styles.Container>
      <Content>
        {texts.periodResult.name} <Costs.PeriodResultNumbers />
      </Content>
      <Content $startCol={2} $endCol={4}>
        {texts.idleProcessCost.name} <Costs.IdleProcessCost />
      </Content>
      <Content>
        {" "}
        {texts.periodResult.name} <Costs.PeriodResultGraph />
      </Content>
      <Content $startCol={1} $endCol={4}>
        {texts.costsServing.name} <Costs.OrderingCosts />
      </Content>
      <Content>
        {texts.costsByDriversAndProcess.name}
        <Costs.CostsByDriversAndProcess />
      </Content>
    </Styles.Container>
  );
}

export default CostsPage;
