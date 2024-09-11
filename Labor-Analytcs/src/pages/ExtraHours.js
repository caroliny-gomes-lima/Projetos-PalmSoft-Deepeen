import React from "react";
import { Setup } from "../features";
import { OpportunityStyles as Styles } from "./styles";
import { Content } from "./styles/defaultStyles";

function ExtraHours() {
  return (
    <>
      <Styles.Container>
        <Content $startCol={1} $endCol={12} $startRow={1} $endRow={30}>
          <Setup.ExtraHoursFilters.Container />
        </Content>
        <Content $startCol={1} $endCol={12} $startRow={17} $endRow={30}>
          <Setup.ExtraHoursFilters.ExtraHoursTable />
        </Content>
      </Styles.Container>
    </>
  );
}

export default ExtraHours;
