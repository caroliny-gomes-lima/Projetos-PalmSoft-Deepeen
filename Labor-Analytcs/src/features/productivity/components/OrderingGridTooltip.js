import React from "react";
import { FontStyles } from "../../../components";
import { Tooltip } from "@material-ui/core";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const ColumnItem = styled.td(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.roman12,
    color: colors.text.primary + "E0",
  };
});

const ToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.darkBlue,
    color: theme.palette.white,
  },
}))(Tooltip);

const ItemContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
}));

function OrderingGridTooltip({ item }) {
  return (
    <ToolTip
      arrow
      title={
        <>
          <p>Checkout: {item.checkout}</p> <p> Separação: {item.separator}</p>
        </>
      }
    >
      <ColumnItem>
        <ItemContainer>{item.total}</ItemContainer>
      </ColumnItem>
    </ToolTip>
  );
}
export default React.memo(OrderingGridTooltip);
