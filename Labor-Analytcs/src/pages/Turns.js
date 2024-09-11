import React from "react";
import { Setup } from "../features";
import { OpportunityStyles as Styles } from "./styles";
import { Content } from "./styles/defaultStyles";

function Turns() {
  return (
    <>
      <Styles.Container>
        <Content $startCol={1} $endCol={16} $startRow={1} $endRow={6}>
          <Setup.TurnsList.Container />
          <Setup.TurnsList.TurnsTable />
        </Content>
      </Styles.Container>
    </>
  );
}

export default Turns;
