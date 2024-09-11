import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import FontStyles from "../styles/fontStyles";
import { Button, Select, MenuItem, Grid, colors } from "@material-ui/core";
import {
  ArrowBack,
  ArrowForward,
  ExpandMoreOutlined,
} from "@material-ui/icons";
import { Colors } from "../../config";

export type PaginationProps = {
  page?: any;
  setPage: any;
  totalPages?: any;
  headerTable: any;
  table?: any;
  itemRowPages: any;
  totalRowPages: any;
  size?: any;
  defaultAlignItems?: boolean;
};

const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: spacing(2),
  };
});

const BottomNav = styled(Button)(({ theme }) => {
  const { spacing } = theme;
  return {
    "&&.MuiButton-root": {
      ...FontStyles.regular12,
      fontSize: "13.95px",
      fontWeight: 400,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1.75rem",
      height: "1.75rem",
      minHeight: "1.75rem",
      minWidth: "1.75rem",
      margin: spacing(0, 0.3),
      backgroundColor: Colors.gray,
    },
  };
});

const PageList = styled.tbody(({ theme }) => {
  return {
    display: "flex",
  };
});

const PageListButton = styled(Button)(({ theme, $show, $focus }) => {
  const { spacing } = theme;
  return {
    "&&.MuiButton-root": {
      ...FontStyles.regular12,
      fontSize: "13.95px",
      fontWeight: 400,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1.75rem",
      height: "1.75rem",
      minHeight: "1.75rem",
      minWidth: "1.75rem",
      margin: spacing(0, 0.3),
      backgroundColor: $focus ? Colors.white : Colors.gray,
      color: $focus ? Colors.black : Colors.white,
      "&:hover": {
        backgroundColor: Colors.lightBlue + 60,
        color: Colors.white,
      },
    },
  };
});

const PageSelectText = styled.text(({ theme }) => {
  const { spacing } = theme;
  return {
    alignSelf: "center",
    ...FontStyles.regular12,
    fontSize: "17.12px",
    fontWeight: 400,
    marginLeft: spacing(1.5),
  };
});

const PageSelect = styled(Select)(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "4rem",
    height: "1.75rem",
    padding: spacing(0.75, 1.875),
    //marginRight: spacing(1.875),
    backgroundColor: Colors.white,
    ".MuiSelect-outlined.MuiSelect-outlined": { padding: 0 },
    ".MuiOutlinedInput-input": {
      padding: 0,
      ...FontStyles.regular12,
      fontSize: "13.95px",
      fontWeight: 400,
    },
    ".MuiSelect-icon": {
      color: Colors.black,
      alignSelf: "center",
      width: "1.5rem",
      height: "1.5rem",
    },
  };
});

const ItemMenu = styled(MenuItem)(({ theme }) => {
  const { spacing } = theme;
  return {
    "&&.MuiMenuItem-root": {
      ...FontStyles.regular12,
      fontSize: "13.95px",
      fontWeight: 400,
      backgroundColor: Colors.white,
      width: "5.25rem",
      height: "1.75rem",
      padding: spacing(0.75, 1.875),
      "&:hover": {
        backgroundColor: Colors.lightBlue,
      },
    },
  };
});

const HeaderTable = styled.div(({ $defaultAlignItems }) => {
  return {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: $defaultAlignItems ? "flex-end" : "center",
    flexDirection: "row",
    marginBottom: "10px",
    gap: 10,
  };
});

const TextPaginationInfo = styled.p(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.regular12,
    fontSize: "13.95px",
    fontWeight: 400,
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
  };
});

function backPage(page, setPage, size: any) {
  if (page > 1) {
    setPage(page - 1, size);
  }
}

const nextPage = (page, totalPages, setPage, size: any) => {
  if (page !== totalPages) {
    setPage(page + 1, size);
  }
};

const getPaginationContent = (
  setPage: any,
  totalPages: any,
  page: any,
  size: any
) => {
  let content: any[] = [];
  const changePageTo = (i, size) => {
    setPage(i, size);
  };
  for (let i = 0; i < totalPages; i++) {
    if (page > 3 && page < totalPages - 4) {
      if (i >= page - 3 && i <= page + 1) {
        content.push(
          <PageListButton
            $focus={i + 1 === page}
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(i + 1, size)}
          >
            {" "}
            {i + 1}{" "}
          </PageListButton>
        );
      }
      if (i === page + 3) {
        content.push(
          <PageListButton
            $focus={i + 1 === page}
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(totalPages, size)}
          >
            {"..."}
          </PageListButton>
        );
      }
    } else if (page < 4) {
      if (i <= 5) {
        content.push(
          <PageListButton
            $focus={i + 1 === page}
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(i + 1, size)}
          >
            {" "}
            {i + 1}{" "}
          </PageListButton>
        );
      }
    } else if (i >= totalPages - 6) {
      if (i === 14) {
        content.push(
          <PageListButton
            $focus={i + 1 === page}
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(1, size)}
          >
            {"..."}
          </PageListButton>
        );
      }

      content.push(
        <PageListButton
          $focus={i + 1 === page}
          $show={i + 1 === page ? true : false}
          onClick={() => changePageTo(i + 1, size)}
        >
          {" "}
          {i + 1}{" "}
        </PageListButton>
      );
    }
  }
  return content;
};

const checkTotalPages = (totalPages, page) => {
  let components: any[] = [];
  for (let i = 0; i < totalPages; i++) {
    components.push(
      <ItemMenu selected={i === page} value={i + 1}>
        {i + 1}
      </ItemMenu>
    );
  }

  return components;
};

function TablePagination(props: PaginationProps) {
  const {
    page,
    setPage,
    totalPages,
    headerTable,
    table,
    itemRowPages,
    totalRowPages,
    size,
    defaultAlignItems
  } = props;

  const drawMenuSelectPage = () => {
    return (
      <HeaderTable $defaultAlignItems={defaultAlignItems}>
        <Grid item xs={12} sm={6} md={6} lg={9}>
          <PageSelect
            variant="outlined"
            labelId="Seleção-da-pagina"
            id="Seleção-da-pagina"
            value={size}
            onChange={(value) => {
              
              setPage(page, value.target.value);
            }}
            IconComponent={ExpandMoreOutlined}
            label="Pagina"
          >
            <ItemMenu selected={size === 5} value={5}>
              5
            </ItemMenu>
            <ItemMenu selected={size === 10} value={10}>
              10
            </ItemMenu>
            <ItemMenu selected={size === 15} value={15}>
              15
            </ItemMenu>
            <ItemMenu selected={size === 20} value={20}>
              20
            </ItemMenu>
            <ItemMenu selected={size === 25} value={25}>
              25
            </ItemMenu>
            <ItemMenu selected={size === 30} value={30}>
              30
            </ItemMenu>
          </PageSelect>
          <PageSelectText>itens/página</PageSelectText>
        </Grid>
        {headerTable}
      </HeaderTable>
    );
  };

  const drawButtonsNavPage = () => {
    return (
      <Container>
        <Grid item xs={12} sm={6} md={6} lg={12}>
          <TextPaginationInfo>
            {"Mostrando" +
              " " +
              itemRowPages +
              " " +
              "de" +
              " " +
              totalRowPages}
          </TextPaginationInfo>
        </Grid>

        <BottomNav
          onClick={() => {
            backPage(page, setPage, size);
          }}
        >
          <ArrowBack style={{ color: Colors.white, fontSize: "1rem" }} />
        </BottomNav>
        <PageList>
          {getPaginationContent(setPage, totalPages, page, size)}
        </PageList>
        <BottomNav onClick={() => nextPage(page, totalPages, setPage, size)}>
          <ArrowForward style={{ color: Colors.white, fontSize: "1rem" }} />
        </BottomNav>
      </Container>
    );
  };
  return (
    <>
      {drawMenuSelectPage()}
      {table}
      {drawButtonsNavPage()}
    </>
  );
}
export default TablePagination;
