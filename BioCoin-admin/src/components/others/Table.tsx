import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import FontStyles from "../styles/fontStyles";

import { Button, Tooltip } from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp, FilterList } from "@material-ui/icons";
import CustomText from "./CustomText";
import { Colors } from "../../config";

const TableWrapper = styled.div(() => ({
  overflow: "auto",
  width: "100%",
  border: "solid 1.162px",
  borderRadius: "5.811px",
  borderColor: Colors.gray,
  backgroundColor: Colors.gray,
  borderCollapse: "collapse",
}));

const Table = styled.table(({ theme }) => ({
  borderSpacing: "1.5px",
  width: "100%",
}));

const HeaderRow = styled.tr(({ theme }) => {
  return {
    padding: theme.spacing(1),
    position: "sticky",
    top: 0,
    zIndex: 10,
    ...FontStyles.regular12,
    color: "#616161",
    fontSize: "12.783px",
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "right",
    //color: theme.palette.text.secondary,

    backgroundColor: theme.palette.primary.main,
  };
});

const GridData = styled.tr(({ theme, $isOdd }) => ({
  backgroundColor: $isOdd
    ? Colors.softGray
    : theme.palette.action.disabledBackground,
}));

const HeaderItem = styled.th(
  ({ theme, $firstColumn, $last, $firstColumnCustom }) => ({
    display: $last ? "flex" : "blocked",
    justifyContent: $last ? "flex-end" : null,
    padding: theme.spacing(1, 2, 1, 2),

    ...FontStyles.bold12,
    color: theme.palette.text.primary,
    whiteSpace: "normal",
    wordWrap: "break-word",
    overflowWrap: "break-word",

    backgroundColor: $firstColumn
      ? theme.palette.action.disabledBackground
      : $firstColumnCustom
      ? theme.palette.action.disabledBackground
      : theme.palette.background.paper,
  })
);

const ColumnItem = styled.td(
  ({ theme, $small, $firstColumn, $firstColumnCustom }) => ({
    padding: theme.spacing(1, 2, 1, 2),
    marginBlock: theme.spacing(2),

    ...FontStyles.regular12,
    fontSize: "12.783px",
    fontWeight: 400,

    color: theme.palette.text.primary,

    width: $firstColumn ? "1%" : "fit-content",
    backgroundColor: $firstColumn
      ? theme.palette.action.disabledBackground
      : $firstColumnCustom
      ? theme.palette.action.disabledBackground
      : theme.palette.background.paper,
  })
);

const ItemContainer = styled.div(({ $last, theme }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: $last ? "flex-end" : "flex-start",
}));

const ButtonT = styled(Button)(({ theme, $last }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiButton-root": {
      display: "flex",
      justifyContent: $last ? "flex-end" : "flex-start",
      width: "auto",
      height: "auto",
      lineHeight: "normal",
      padding: "0",
      ...FontStyles.regular12,
      color: "#616161",
      fontSize: "12.783px",
      fontWeight: 700,
      textTransform: "capitalize",
      textAlign: "left",
      //color: theme.palette.text.primary,
    },
  };
});

type CustomTableProps = {
  data: any[];

  renderItemColumns: (item: any) => any[];
  headers: {
    table: string[];
    keys: string[];
  };

  id?: any;
  sortContent?: (str1?: string, str2?: boolean) => any;
  sortDirection?: boolean;
  currentSortKey?: string;
  sortLast?: boolean;
  lastAlign?: boolean;
  firstColumn?: boolean;
  firstColumnCustom?: boolean;
};

function CustomTable({
  data,

  renderItemColumns,
  headers,

  id,
  firstColumn = false,
  firstColumnCustom = false,
  lastAlign = false,
  sortContent,
  sortDirection = false,
  currentSortKey,
  sortLast = true,
}: CustomTableProps) {
  return (
    <TableWrapper>
      <Table id={id}>
        <thead style={{ position: "sticky", top: 0, zIndex: 1 }}>
          <HeaderRow>
            {headers.table.map((text, key) => {
              return (
                <HeaderItem
                  $firstColumn={firstColumn ? false : key === 0 ? true : false}
                  $firstColumnCustom={
                    firstColumnCustom ? false : key === 0 ? true : false
                  }
                  key={key}
                  $last={lastAlign ? false : key === headers.table.length - 1}
                >
                  <ButtonT
                    $last={lastAlign ? false : key === headers.table.length - 1}
                    $small={headers.table.length > 7 ? true : false}
                    onClick={() => {
                      if (sortLast) {
                        if (sortContent) {
                          sortContent?.(headers.keys[key], !sortDirection);
                        }
                      } else if (key < headers.table.length - 1) {
                        if (sortContent) {
                          sortContent?.(headers.keys[key], !sortDirection);
                        }
                      }
                    }}
                    endIcon={
                      !sortContent ||
                      (key >= headers.table.length - 1 &&
                        !sortLast) ? undefined : currentSortKey ===
                        headers?.keys[key] ? (
                        !sortDirection ? (
                          <Tooltip
                            title={
                              <CustomText textColor={"white"} fontSize={1.6}>
                                Ordem decrescente
                              </CustomText>
                            }
                            aria-label="Decrescente"
                          >
                            <ArrowDropUp />
                          </Tooltip>
                        ) : (
                          <Tooltip
                            title={
                              <CustomText textColor={"white"} fontSize={1.6}>
                                Ordem crescente
                              </CustomText>
                            }
                            aria-label="Crescente"
                          >
                            <ArrowDropDown />
                          </Tooltip>
                        )
                      ) : (
                        <Tooltip
                          title={
                            <CustomText textColor={"white"} fontSize={1.6}>
                              {!sortDirection
                                ? "Ordem decrescente"
                                : "Ordem crescente"}
                            </CustomText>
                          }
                          aria-label={
                            !sortDirection ? "Decrescente" : "Crescente"
                          }
                        >
                          <FilterList />
                        </Tooltip>
                      )
                    }
                  >
                    {text}
                  </ButtonT>
                </HeaderItem>
              );
            })}
          </HeaderRow>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <GridData $isOdd={(index + 1) % 2 === 1} key={index}>
                {renderItemColumns(item).map((itemToRender, key) => (
                  <ColumnItem
                    $firstColumn={
                      firstColumn
                        ? index + 1
                          ? key ===
                            renderItemColumns(item).length -
                              headers.table.length
                          : null
                        : null
                    }
                    $firstColumnCustom={
                      firstColumnCustom
                        ? false
                        : index + 1
                        ? key ===
                          renderItemColumns(item).length - headers.table.length
                        : null
                    }
                    $small={headers.table.length > 7 ? true : false}
                    key={key}
                    $first={key === 0 ? true : false}
                    $last={
                      lastAlign
                        ? false
                        : key === renderItemColumns(item).length - 1
                        ? true
                        : false
                    }
                  >
                    <ItemContainer
                      $last={
                        lastAlign
                          ? false
                          : key === renderItemColumns(item).length - 1
                          ? true
                          : false
                      }
                    >
                      {itemToRender}
                    </ItemContainer>
                  </ColumnItem>
                ))}
              </GridData>
            ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

export default CustomTable;
