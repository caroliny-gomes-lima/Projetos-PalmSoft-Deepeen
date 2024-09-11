import React from "react";
import styled from "styled-components";
import FontStyles from "../styles/fontsStyles";

const Table = styled.table({
  width: "100%",
  borderCollapse: "collapse",
});

//tr é TableRowElement
const HeaderRow = styled.tr(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.semibold12,
    textTransform: "uppercase",
    padding: spacing(0),
    textAlign: "left",
    position: "sticky",
    top: 0,
    zIndex: 10,
  };
});

//tr é TableRowElement
const GridData = styled.tr(() => {
  return {
    borderBottom: "solid 0.8px",
    borderColor: "#c4c4c4",
  };
});

//th é TableHeaderCell
const HeaderItem = styled.th(({ theme, $first, $last }) => {
  const { spacing } = theme;
  return {
    fontWeight: "normal",
    padding: $first ? spacing(0, 1, 0, 1) : spacing(1),
    display: $last ? "flex" : null,
    justifyContent: $last ? "flex-end" : "flex-start",

    whiteSpace: "normal",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  };
});

//td é tableDataCell
const ColumnItem = styled.td(({ theme, $first, $last }) => {
  const { spacing, palette: colors } = theme;
  return {
    ...FontStyles.roman12,
    color: colors.text,
    textTransform: "uppercase",
    padding: $first ? spacing(0, 1, 0, 1) : spacing(1),
    marginBlock: spacing(2),
  };
});

const ItemContainer = styled.div(({ $last, $defaultWidth }) => ({
  display: "flex",
  flexDirection: "row",
  width: $defaultWidth ? "20%" : "100%",
  justifyContent: $last ? "flex-end" : "flex-start",
}));

function SimpleTable({ data, renderItemColumns, headers, id, defaultWidth }) {
  return (
    <>
      <Table id={id}>
        <thead style={{ position: "sticky", top: 0 }}>
          <HeaderRow>
            {headers.table.map((text, key) => {
              return (
                <>
                  <HeaderItem
                    $first={key === 0 ? true : false}
                    $last={key === headers.table.length - 1}
                    key={key}
                  >
                    {text}
                  </HeaderItem>
                </>
              );
            })}
          </HeaderRow>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <GridData>
              {renderItemColumns(item).map((itemToRender, key) => (
                <ColumnItem
                  key={key}
                  $first={key === 0 ? true : false}
                  $last={
                    key === renderItemColumns(item).length - 1 ? true : false
                  }
                >
                  <ItemContainer
                    $last={
                      key === renderItemColumns(item).length - 1 ? true : false
                    }
                    $defaultWidth={defaultWidth}
                  >
                    {itemToRender}
                  </ItemContainer>
                </ColumnItem>
              ))}
            </GridData>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default React.memo(SimpleTable);
