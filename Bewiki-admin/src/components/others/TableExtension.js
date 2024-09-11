import React from "react";
import { ChartsColors } from "../../config";
import styled from "styled-components";
import FontStyles from "../styles/fontsStyles";
import SkeletonLoader from "./SkeletonLoader";
import Pagination from "./Pagination";
import { Button } from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";

const colors = ChartsColors.Behome;
let invertOrder = false;

const Table = styled.table({
  width: "100%",
  borderCollapse: "collapse",
});

const HeaderRow = styled.tr(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.medium14,
    textTransform: "uppercase",
    padding: spacing(1),
    textAlign: "left",
    position: "sticky",
    top: 0,
    backgroundColor: colors.headerBackground,
  };
});

const GridData = styled.tr(({ $isOdd }) => {
  return {
    backgroundColor: "#1FC299",
    border: "solid 6px",
    borderColor: "white",
  };
});

const HeaderItem = styled.th(({ theme }) => {
  const { spacing } = theme;
  return {
    position: "sticky",
    fontWeight: "normal",
    padding: spacing(1),
    whiteSpace: "normal",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  };
});

const ColumnItem = styled.td(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.roman12,
    color: colors.text,
    padding: spacing(1),
  };
});

const ItemContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
}));

const ButtonT = styled(Button)(({ theme }) => {
  return {
    justifyContent: "space-between",
    padding: "0",
    ...FontStyles.semibold12,
    color: colors.text,
    lineHeight: "normal",
    textAlign: "left",
    width: "auto",
    height: "auto",
  };
});

const SortImage = styled(ExpandMoreOutlined)(({ theme, $isDown }) => {
  const { spacing } = theme;
  return {
    width: "0.9rem",
    height: "0.9rem",
    transform: $isDown ? "rotate(180deg)" : "rotate(0deg)",
    margin: spacing(0.625),
    fill: colors.text,
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
  totalPage,
  withPagination = false,
  withGroup,
  firstDivision,
  secondDivision,
  sortList = false,
  sortContent = null,
}) {
  const placeholderList = createArray(placeholderSize);
  const columnList = createArray(columnSize);
  const [page, setPage] = React.useState(1);

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
                          style={{ color: colors.text.primary }}
                          key={key + k}
                        >
                          {""}
                        </HeaderItem>
                      );
                    }
                  });
                } else {
                  return (
                    <HeaderItem key={key}>
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
                if (sortList) {
                  return (
                    <>
                      {text.data.map((t, k) => {
                        return (
                          <HeaderItem
                            $loc={k !== 0 ? true : false}
                            key={k + key}
                          >
                            {k !== 0 ? (
                              <ButtonT
                                onClick={() => {
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
                                <SortImage $isDown={invertOrder} />
                              </ButtonT>
                            ) : null}
                          </HeaderItem>
                        );
                      })}
                    </>
                  );
                } else {
                  return (
                    <>
                      {text.data.map((t, k) => (
                        <HeaderItem $loc={k !== 0 ? true : false} key={k}>
                          {t}
                        </HeaderItem>
                      ))}
                    </>
                  );
                }
              } else {
                if (key !== firstDivision || key !== secondDivision) {
                  if (sortList) {
                    return (
                      <HeaderItem key={key}>
                        <ButtonT
                          onClick={() => {
                            sortContent(key, data);
                            invertOrder = !invertOrder;
                          }}
                        >
                          {text} <SortImage $isDown={invertOrder} />
                        </ButtonT>
                      </HeaderItem>
                    );
                  } else {
                    return <HeaderItem key={key}>{text}</HeaderItem>;
                  }
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
                      <HeaderItem key={key}>{text}</HeaderItem>
                    </>
                  );
                }
              }
            })}
          </HeaderRow>
        </thead>
        <tbody>
          {data || !loading
            ? data.map((item, index) => (
                <GridData $isOdd={(index + 1) % 2 === 1} key={index}>
                  {renderItemColumns(item).map((itemToRender, key) => (
                    <ColumnItem key={key}>
                      <ItemContainer>{itemToRender}</ItemContainer>
                    </ColumnItem>
                  ))}
                </GridData>
              ))
            : placeholderList.map((keyI) => (
                <GridData $isOdd={(keyI + 1) % 2 === 1} key={keyI}>
                  {columnList.map((KeyJ) => (
                    <ColumnItem key={KeyJ}>
                      <ItemContainer>
                        <SkeletonLoader width="100%">&nbsp;</SkeletonLoader>
                      </ItemContainer>
                    </ColumnItem>
                  ))}
                </GridData>
              ))}
        </tbody>
      </Table>
      {withPagination ? (
        <Pagination page={page} setPage={setPage} totalPages={totalPage} />
      ) : null}
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
