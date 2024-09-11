import React from "react";
import { ChartsColors } from "../../config";
import styled from "styled-components";
import FontStyles from "../styles/fontsStyles";
import SkeletonLoader from "./SkeletonLoader";

const colors = ChartsColors.orderingProductivity;

const Table = styled.table(({ height }) => {
  return {
    width: "100%",
    height: height ? height : null,
    borderCollapse: "collapse",
  };
});
//aqui      //aqui
const HeaderRow = styled.tr(({ theme, $headerbg, $alignText }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.medium14,
    textTransform: "uppercase",
    padding: spacing(2),
    textAlign: $alignText === 2 ? "center" : "left", //aqui
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: $headerbg === 2 ? colors.darkBlue : colors.bg, //aqui
  };
});

const GridData = styled.tr(({ $isOdd }) => {
  return {
    backgroundColor: $isOdd ? colors.backgroundColor1 : colors.backgroundColor2,
  };
});

const HeaderItem = styled.th(({ theme }) => {
  const { spacing } = theme;
  return {
    fontWeight: "normal",
    padding: spacing(1),
    whiteSpace: "normal",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  };
});

const ColumnItem = styled.td(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    ...FontStyles.roman12,
    color: colors.text.primary + "E0",
    padding: spacing(1),
  };
});

const ItemContainer = styled.div(({ theme, $justify }) => {
  return {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: $justify === 2 ? "center" : null, //aqui
  };
});

function TableComponent({
  data,
  placeholderSize = 0,
  columnSize = 0,
  renderItemColumns,
  headers,
  loading,
  id,
  headerBg, //aqui
  justify, //aqui
  alignText, //aqui
  withGroup,
  height,
}) {
  const placeholderList = createArray(placeholderSize);
  const columnList = createArray(columnSize);
  return (
    <Table height={height} id={id}>
      <thead style={{ position: "sticky", top: 0 }}>
        {withGroup ? (
          <HeaderRow $alignText={alignText} $headerbg={headerBg}>
            {headers.map((text, key) => {
              if (typeof text === "object") {
                return text.data.map((t, k) => {
                  console.log(k);
                  if (k === 2) {
                    return text.name;
                  } else {
                    return <HeaderItem key={key}>{""}</HeaderItem>;
                  }
                });
              } else {
                return <HeaderItem key={key}>{""}</HeaderItem>;
              }
            })}
          </HeaderRow>
        ) : null}
        <HeaderRow $alignText={alignText} $headerbg={headerBg}>
          {headers.map((text, key) => {
            if (typeof text === "object" && withGroup) {
              return (
                <>
                  {text.data.map((t, k) => (
                    <HeaderItem key={k}>{t}</HeaderItem>
                  ))}
                </>
              );
            } else {
              return <HeaderItem key={key}>{text}</HeaderItem>;
            }
          })}
        </HeaderRow>
      </thead>
      <tbody>
        {data > 0 || !loading
          ? data.map((item, index) => (
              <GridData $isOdd={(index + 1) % 2 === 1} key={index}>
                {renderItemColumns(item).map((itemToRender, key) => (
                  <ColumnItem key={key}>
                    <ItemContainer $justify={justify}>
                      {itemToRender}
                    </ItemContainer>
                  </ColumnItem>
                ))}
              </GridData>
            ))
          : placeholderList.map((keyI) => (
              <GridData $isOdd={(keyI + 1) % 2 === 1} key={keyI}>
                {columnList.map((KeyJ) => (
                  <ColumnItem key={KeyJ}>
                    <ItemContainer $justify={justify}>
                      <SkeletonLoader width="100%">&nbsp;</SkeletonLoader>
                    </ItemContainer>
                  </ColumnItem>
                ))}
              </GridData>
            ))}
      </tbody>
    </Table>
  );
}

export default React.memo(TableComponent);

function createArray(size) {
  const newArray = new Array(size);
  let i = 0;
  const iMax = size;
  for (; i < iMax; i++) {
    newArray[i] = i;
  }
  return newArray;
}
