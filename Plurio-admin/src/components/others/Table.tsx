import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import FontStyles from "../styles/fontStyles";

import { Button, Tooltip } from "@material-ui/core";
import { ArrowDropDown, ArrowDropUp, FilterList } from "@material-ui/icons";
import CustomText from "./CustomText";

const TableWrapper = styled.div(() => ({
  overflow: "auto",
  width: "100%",
}));

const Table = styled.table(({ theme }) => ({
  borderSpacing: theme.spacing(0, 0.5),
  width: "100%",
  tableLayout: "auto",
}));

const HeaderRow = styled.tr(({ theme, alternative }) => {
  return {
    ...FontStyles.bold12,
    backgroundColor: "none",
    textTransform: "uppercase",
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
    textAlign: "left",
    position: "sticky",
    top: 0,
    zIndex: 10,
  };
});

const GridData = styled.tr(({ theme, $isOdd, alternative }) => ({
  backgroundColor: alternative
    ? $isOdd
      ? "#8D9B9C"
      : "#ABB0B1"
    : $isOdd
      ? "#F2F2F2"
      : "#E8E8E8",
}));

const HeaderItem = styled.th(({ theme, $first, $last, alternative }) => ({
  ...FontStyles.semibold14,

  color: alternative ? "white" : theme.palette.text.primary,
  padding: theme.spacing(1),

  whiteSpace: "normal",
  wordWrap: "break-word",
  overflowWrap: "break-word",
}));

const ColumnItem = styled.td(
  ({ theme, $first, $last, $small, alternative }) => ({
    ...($small ? FontStyles.medium12 : FontStyles.regular12),

    color: alternative ? "white" : theme.palette.text.primary,
    padding: $first
      ? theme.spacing(1, 1, 1, 2)
      : $last
        ? theme.spacing(1, 2, 1, 1)
        : theme.spacing(1),
    marginBlock: theme.spacing(2),
  })
);

const ItemContainer = styled.div(({ $last }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: $last ? "flex-end" : "flex-start",
}));

const ButtonT = styled(Button)(({ theme, $last, alternative }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiButton-root": {
      width: "100%",
      ...FontStyles.bold12,
      color: alternative ? "white" : theme.palette.text.primary,
      display: "flex",
      padding: "0",

      justifyContent: $last ? "flex-end" : "flex-start",
      lineHeight: "normal",
      textAlign: "left",

      height: "auto",
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
  alternative?: boolean;
};

function CustomTable({
  data,

  renderItemColumns,
  headers,

  id,
  lastAlign = false,
  sortContent,
  sortDirection = false,
  currentSortKey,
  sortLast = true,
  alternative,
}: CustomTableProps) {
  return (
    <TableWrapper>
      <Table id={id}>
        <thead style={{ position: "sticky", top: 0, zIndex: 1 }}>
          <HeaderRow>
            {headers.table.map((text, key) => {
              return (
                <HeaderItem
                  alternative={alternative}
                  $first={key === 0 ? true : false}
                  key={key}
                  $last={lastAlign ? false : key === headers.table.length - 1}
                >
                  <ButtonT
                    alternative={alternative}
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
              <GridData
                alternative={alternative}
                $isOdd={(index + 1) % 2 === 1}
                key={index}
              >
                {renderItemColumns(item).map((itemToRender, key) => (
                  <ColumnItem
                    alternative={alternative}
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
                      alternative={alternative}
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
