import React from "react";
import { OpportunityStyles as Styles } from "./styles";
import { BlockTitle, Content } from "./styles/defaultStyles";
import { CdMap } from "../features";
import { Texts } from "../config";

function CDMap() {
  const refC = React.useRef(null);
  const texts = Texts["pt-BR"].pagesConfig.cdMap;
  return (
    <Styles.Container>
      <Content ref={refC} $startCol={1} $endCol={12} $startRow={1} $endRow={16}>
        <BlockTitle>{texts.title}</BlockTitle>
        <CdMap refC={refC} />
      </Content>
    </Styles.Container>
  );
}

export default CDMap;
