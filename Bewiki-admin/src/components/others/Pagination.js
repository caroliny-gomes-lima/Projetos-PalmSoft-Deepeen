import React from "react";
import styled from "styled-components";
import FontStyles from "../styles/fontsStyles";
import { Button, Select, MenuItem } from "@material-ui/core";
import Text from "../strings/Text";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { ChartsColors } from "../../config";

const colors = ChartsColors.Behome;

const BottomNav = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: spacing(1),
  };
});

const PageNav = styled(Button)(({ theme }) => {
  //const { palette: colors } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1.75rem",
    height: "1.75rem",

    minHeight: "1.75rem",
    minWidth: "1.75rem",

    backgroundColor: "transparent",
    borderWidth: "0",
    color: colors.text,
  };
});

const PageList = styled.tbody(({ theme }) => {
  return {
    display: "flex",
  };
});

const PageListButton = styled(Button)(({ theme, $show }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "1.75rem",
    height: "1.75rem",
    minHeight: "1.75rem",
    minWidth: "1.75rem",

    margin: spacing(0, 0.125),
    backgroundColor: "transparent",
    color: colors.white,
    border: $show ? "0.125rem solid" + colors.text : "none",
  };
});

const PageSelectText = styled(Text)(({ theme }) => {
  const { spacing } = theme;
  return {
    alignSelf: "center",
    //color: colors.white,
    ...FontStyles.medium14,
    margin: spacing(0, 0.625),
  };
});

const PageSelect = styled(Select)(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "5.25rem",
    height: "1.75rem",
    padding: spacing(0.75, 1.875),
    //marginRight: spacing(1.875),
    backgroundColor: "black", // mudar cor depois ajustar tema
    color: "white",
    ".MuiOutlinedInput-input": {
      padding: 0,
      ...FontStyles.roman14,
    },
    ".MuiSelect-icon": {
      alignSelf: "center",
      width: "1.25rem",
      height: "1.25rem",
      filter: "brightness(0) invert(1)",
    },
  };
});

const ItemMenu = styled(MenuItem)(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: "white", //mudar cor ajustar tema depois
    width: "5.25rem",
    height: "1.75rem",
    padding: spacing(0.75, 1.875),
  };
});

function PaginationComponent({ page, setPage, totalPages }) {
  return (
    <BottomNav>
      <PageNav
        onClick={() => {
          backPage(page, setPage);
        }}
      >
        {" < "}
      </PageNav>
      <PageList>{getPaginationContent(setPage, totalPages, page)}</PageList>
      <PageNav
        onClick={() => {
          nextPage(page, totalPages, setPage);
        }}
      >
        {" > "}
      </PageNav>
      <PageSelectText> Ir para: </PageSelectText>
      <PageSelect
        variant="outlined"
        labelId="Seleção-da-pagina"
        id="Seleção-da-pagina"
        value={page}
        onChange={(value) => {
          setPage(value.target.value);
        }}
        IconComponent={ExpandMoreOutlined}
        label="Pagina"
      >
        {checkTotalPages(totalPages, page)}
      </PageSelect>
    </BottomNav>
  );
}

export default React.memo(PaginationComponent);

const checkTotalPages = (totalPages, page) => {
  let components = [];
  for (let i = 0; i < totalPages; i++) {
    components.push(
      <ItemMenu selected={i === page} value={i + 1}>
        {i + 1}
      </ItemMenu>
    );
  }

  return components;
};
const getPaginationContent = (setPage, totalPages, page) => {
  let content = [];
  const changePageTo = (toPage) => {
    setPage(toPage);
  };
  for (let i = 0; i < totalPages; i++) {
    if (page > 3 && page < totalPages - 4) {
      if (i >= page - 3 && i <= page + 1) {
        content.push(
          <PageListButton
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(i + 1, setPage)}
          >
            {" "}
            {i + 1}{" "}
          </PageListButton>
        );
      }
      if (i === page + 3) {
        content.push(
          <PageListButton
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(totalPages, setPage)}
          >
            {"..."}
          </PageListButton>
        );
      }
    } else if (page < 4) {
      if (i <= 5) {
        content.push(
          <PageListButton
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(i + 1, setPage)}
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
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(1, setPage)}
          >
            {"..."}
          </PageListButton>
        );
      }

      content.push(
        <PageListButton
          $show={i + 1 === page ? true : false}
          onClick={() => changePageTo(i + 1, setPage)}
        >
          {" "}
          {i + 1}{" "}
        </PageListButton>
      );
    }
  }
  return content;
};

function nextPage(page, totalPages, setPage) {
  if (page !== totalPages) {
    setPage(page + 1);
  }
}

function backPage(page, setPage) {
  if (page > 1) {
    setPage(page - 1);
  }
}
