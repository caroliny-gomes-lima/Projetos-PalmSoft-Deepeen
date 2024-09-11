import React from "react";
import { ChartsColors } from "../../config";
import styled from "styled-components";
import FontStyles from "../styles/fontsStyles";
import SkeletonLoader from "./SkeletonLoader";
import { Button } from "@material-ui/core";

const colors = ChartsColors.Behome;
let invertOrder = false;

const Table = styled.table(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "100%",
    borderSpacing: spacing(0, 0.7),
  };
});

const HeaderRow = styled.tr(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.semibold12,
    backgroundColor: colors.headerBackground,
    textTransform: "uppercase",
    padding: spacing(0),
    textAlign: "left",
    position: "sticky",
    top: 0,
    zIndex: 10,
  };
});

const GridData = styled.tr(({ $isOdd }) => {
  return {
    backgroundColor: $isOdd ? "#e9e9e9" : "#f3f6f4",
  };
});

const HeaderItem = styled.th(({ theme, $first, $last }) => {
  const { spacing } = theme;
  return {
    fontWeight: "normal",
    padding: spacing(0.25),
    display: $last ? "flex" : null,
    justifyContent: $last ? "flex-end" : "flex-start",

    whiteSpace: "normal",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    position: "sticky",
  };
});

const ColumnItem = styled.td(({ theme, $first, $last }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.medium14,
    color: colors.text,
    padding: spacing(1),
  };
});

const ItemContainer = styled.div(({ $last }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: $last ? "flex-end" : "flex-start",
}));

const ButtonT = styled(Button)(() => {
  return {
    justifyContent: "space-between",
    padding: 0,
    ...FontStyles.medium14,
    color: colors.text,
    lineHeight: "normal",
    textAlign: "left",
    width: "auto",
    height: "auto",
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
  withGroup,
  firstDivision,
  secondDivision,
  sortContent = null,
}) {
  const placeholderList = createArray(placeholderSize);
  const columnList = createArray(columnSize);

  return (
    <>
      <Table id={id}>
        <thead style={{ position: "sticky", top: 0 }}>
          {withGroup ? (
            <HeaderRow>
              {headers.table.map((text, key) => {
                if (typeof text === "object") {
                  return text.data.map((t, k) => {
                    if (k === 1) {
                      return text.name;
                    } else {
                      return (
                        <HeaderItem
                          $first={key === 0 ? true : false}
                          $last={key === headers.table.length}
                          key={key + k}
                        >
                          {""}
                        </HeaderItem>
                      );
                    }
                  });
                } else {
                  return (
                    <HeaderItem
                      $first={key === 0 ? true : false}
                      $last={key === headers.table.length - 1}
                      key={key}
                    >
                      {key === 10 ? headers.FirstRow : ""}
                    </HeaderItem>
                  );
                }
              })}
            </HeaderRow>
          ) : null}
          <HeaderRow>
            {headers.table.map((text, key) => {
              if (typeof text === "object" && withGroup) {
                return (
                  <>
                    {text.data.map((t, k) => {
                      return (
                        <HeaderItem
                          $first={key === 0 ? true : false}
                          $loc={k !== 0 ? true : false}
                          $last={key === headers.table.length - 1}
                          key={k + key}
                        >
                          {k !== 0 ? (
                            <ButtonT
                              onClick={() => {
                                sortContent !== null &&
                                  sortContent(
                                    key < 7
                                      ? k + firstDivision - 1
                                      : k + secondDivision - 1,
                                    data
                                  );
                                invertOrder = !invertOrder;
                              }}
                            >
                              {t}
                            </ButtonT>
                          ) : null}
                        </HeaderItem>
                      );
                    })}
                  </>
                );
              } else {
                if (key !== firstDivision || key !== secondDivision) {
                  return (
                    <HeaderItem
                      $first={key === 0 ? true : false}
                      key={key}
                      $last={key === headers.table.length - 1}
                    >
                      <ButtonT
                        onClick={() => {
                          sortContent !== null && sortContent(key, data);
                          invertOrder = !invertOrder;
                        }}
                      >
                        {text}
                      </ButtonT>
                    </HeaderItem>
                  );
                } else {
                  return (
                    <>
                      <td
                        style={{
                          width: "10px",
                          padding: 0,
                          margin: 0,
                        }}
                      ></td>
                      <HeaderItem
                        $first={key === 0 ? true : false}
                        key={key}
                        $last={key === headers.table.length - 1}
                      >
                        {text}
                      </HeaderItem>
                    </>
                  );
                }
              }
            })}
          </HeaderRow>
        </thead>
        <tbody>
          {data && !loading
            ? data.map((item, index) => (
                <GridData $isOdd={(index + 1) % 2 === 1} key={index}>
                  {renderItemColumns(item).map((itemToRender, key) => (
                    <ColumnItem
                      key={key}
                      $first={key === 0 ? true : false}
                      $last={
                        key === renderItemColumns(item).length - 1
                          ? true
                          : false
                      }
                    >
                      <ItemContainer
                        $last={
                          key === renderItemColumns(item).length - 1
                            ? true
                            : false
                        }
                      >
                        {itemToRender}
                      </ItemContainer>
                    </ColumnItem>
                  ))}
                </GridData>
              ))
            : placeholderList.map((keyI) => (
                <GridData $isOdd={(keyI + 1) % 2 === 1} key={keyI}>
                  {columnList.map((KeyJ) => (
                    <ColumnItem
                      key={KeyJ}
                      $first={KeyJ === 0 ? true : false}
                      $last={KeyJ === columnList.length - 1 ? true : false}
                    >
                      <ItemContainer>
                        <SkeletonLoader width="100%">&nbsp;</SkeletonLoader>
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
