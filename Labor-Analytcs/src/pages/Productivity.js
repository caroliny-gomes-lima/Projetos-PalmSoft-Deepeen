import React from "react";
import { Texts } from "../config";
import { Productivity } from "../features";
import { ProductivityStyles as Styles } from "./styles";
import { Content, BlockTitle } from "./styles/defaultStyles";

function ProductivityPage() {
  const texts = Texts["pt-BR"].charts;
  return (
    <Styles.Container>
      <Content $startCol={1} $endCol={1}>
        <Productivity.GlobalProductivity />
      </Content>
      <Content $startCol={2} $endCol={2}>
        <BlockTitle>{texts.productivityProcess.name}</BlockTitle>
        <Productivity.Process />
      </Content>
      <Content $startCol={3} $endCol={3}>
        <BlockTitle>{texts.geralDataProductivity.name}</BlockTitle>
        <Productivity.GeralDataProductivity />
      </Content>
      <Content $startCol={1} $endCol={4}>
        <BlockTitle>{texts.historicProductivity.name}</BlockTitle>
        <Productivity.HistoricProductivity />
      </Content>
      <Content $startCol={1} $endCol={4}>
        <Productivity.OrderingProductivity />
      </Content>
    </Styles.Container>
  );
}

export default ProductivityPage;
