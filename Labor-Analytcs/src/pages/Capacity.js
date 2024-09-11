import React from "react";
import { Texts } from "../config";
import { Capacity } from "../features";
import { CapacityStyles as Styles } from "./styles";
import { BlockTitle, Content } from "./styles/defaultStyles";

function CapacityPage() {
  const texts = Texts["pt-BR"].charts;
  return (
    <Styles.Container>
      <Content>
        <BlockTitle>{texts.capacityGlobal.name}</BlockTitle>
        <Capacity.GlobalCapacity />
      </Content>
      <Content $startCol={2} $endCol={5}>
        <BlockTitle>{texts.capacityProcess.name}</BlockTitle>
        <Capacity.Process />
      </Content>
      <Styles.Content $startCol={1} $endCol={3}>
        <BlockTitle>{texts.historicCapacity.name}</BlockTitle>
        <Capacity.HistoricCapacity />
      </Styles.Content>
      <Styles.Content $startCol={3} $endCol={5}>
        <BlockTitle>{texts.idleOrdering.name}</BlockTitle>
        <Capacity.OrderingIdle />
      </Styles.Content>
    </Styles.Container>
  );
}

export default CapacityPage;
