import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { Text } from "../../components";
import { MediaQueries } from "../../config";

export const sizes = {
  pageContent: 550,
  minPadding: 0.75,
  maxPadding: 1.5,
};

export const defaultContainerStyles = (spacing) => ({
  position: "relative",
  minHeight: "100%",
  display: "grid",
  alignItems: "stretch",
  justifyItems: "stretch",
  columnGap: spacing(1.5),
  rowGap: spacing(1.5),
  width: "96%",
  [MediaQueries.smDown]: {
    padding: spacing(0, 1, 0, 1),
  },

  [MediaQueries.lgDown]: {
    gridTemplateColumns: "1fr",
    rowGap: spacing(1),
  },
});

export const Content = styled(Paper)(
  ({ theme, $startCol, $endCol, $startRow, $endRow }) => {
    const { spacing,  } = theme;
    return {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: spacing(1),
      gridColumn: $startCol && $endCol ? `${$startCol} / ${$endCol}` : null,
      gridRow: $startRow && $endRow ? `${$startRow} / ${$endRow}` : null,
      [MediaQueries.smDown]: {
        padding: spacing(2, 1),
      },

      [MediaQueries.lgDown]: {
        padding: spacing(2, 1),
        gridColumn: "unset",
        gridRow: "unset",
      },
    };
  }
);

export const BlockTitle = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    fontWeight: "bold",
    color: "black",
    marginBottom: spacing(2),
  };
});
