import React from "react";
import styled from "styled-components";

import { IconButton, Button, Select, MenuItem } from "@material-ui/core";

import { ExpandMoreOutlined } from "@material-ui/icons";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import { Colors } from "../../config";
import FontStyles from "../styles/fontStyles";

const BottomNav = styled.div(({ theme, $style }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "flex-end",
    margin: spacing(1.875, 0),
    alignSelf: "flex-end",
    ...$style,
  };
});

const PageNav = styled(IconButton)(({ theme, alternative }) => {
  const { palette: colors } = theme;
  return {
    "&&.MuiIconButton-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1.75rem",
      height: "1.75rem",

      minHeight: "1.75rem",
      minWidth: "1.75rem",

      backgroundColor: "transparent",
      borderWidth: "0",
      color: alternative ? "white" : colors.text.primary,
    },
  };
});

const PageList = styled.div(({ theme }) => {
  return {
    display: "flex",
  };
});

const PageListButton = styled(Button)(({ theme, $show, alternative }) => {
  const { spacing, palette: colors } = theme;
  return {
    "&&.MuiButtonBase-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      width: "1.75rem",
      height: "1.75rem",
      minHeight: "1.75rem",
      minWidth: "1.75rem",
      margin: spacing(0, 0.125),

      color: $show
        ? alternative
          ? colors.text.primary
          : "white"
        : "none",
      border: $show
        ? alternative
          ? "white"
          : "none"
        : `0.125rem solid ${colors.text.primary}`,
      backgroundColor: $show
        ? alternative
          ? "red"
          : colors.text.primary
        : "none",
    },
  };
});

const PageSelectText = styled.p(({ theme, alternative }) => {
  const { spacing } = theme;
  return {
    alignSelf: "center",
    ...FontStyles.medium14,
    margin: spacing(0, 0.625),
    color: alternative ? "white" : theme.palette.text.primary,
  };
});

const PageSelect = styled(Select)(({ theme, alternative }) => {
  const { spacing, palette: colors } = theme;
  return {
    "&&.MuiInputBase-root": {
      width: "3.75rem",
      height: "1.75rem",
      padding: spacing(0.75, 1.875),
      //marginRight: spacing(1.875),
      color: alternative ? colors.text.primary : colors.text.secondary,
      backgroundColor: alternative
        ? colors.text.secondary
        : colors.text.primary,
      borderRadius: spacing(1),
      ".MuiFilledInput-input": {
        "$hover $notchedOutline": { borderColor: "orange" },
        padding: 0,
        ...FontStyles.medium14,
        color: alternative ? colors.text.primary : colors.primary.contrastText,
      },
      ".MuiSelect-icon": {
        alignSelf: "center",
        width: spacing(2.315),
        height: spacing(2.315),
        top: "4px",
        color: alternative ? colors.text.primary : colors.primary.contrastText,
        fill: alternative ? colors.text.primary : colors.primary.contrastText,
      },
    },
  };
});

const ItemMenu = styled(MenuItem)(({ theme, $color }) => {
  const { spacing, palette: colors } = theme;
  return {
    width: "5.25rem",
    height: "1.75rem",
    padding: spacing(0.75, 1.875),
    "&:hover": {
      backgroundColor: colors.text.primary,
      color: "white",
    },
    "&.MuiListItem-root.Mui-selected": {
      backgroundColor: colors.text.primary,
      color: "white",
    },
    "&.MuiListItem-root.Mui-selected:hover": {
      backgroundColor: colors.text.primary,
      color: "white",
    },
  };
});

const SelectPageIcon = styled(ExpandMoreOutlined)(({ theme, alternative }) => {
  const { spacing } = theme;
  return {
    margin: spacing(0.4),
    color: alternative && theme.palette.text.primary,
    fill: alternative && theme.palette.text.primary,
  };
});
const PagContainer = styled.div(({ theme, $color }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    flexDirection: "row",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  };
});
function PaginationComponent({
  page,
  setPage,
  totalPages,
  style,
  alternative,
}: any) {
  return (
    <BottomNav $style={style}>
      <PageNav
        alternative={alternative}
        onClick={() => {
          backPage(page, setPage);
        }}
      >
        <KeyboardArrowLeftIcon />
      </PageNav>
      <PageList>
        {getPaginationContent(setPage, totalPages, page, alternative)}
      </PageList>
      <PageNav
        alternative={alternative}
        onClick={() => {
          nextPage(page, totalPages, setPage);
        }}
      >
        <KeyboardArrowRightIcon />
      </PageNav>
      <PagContainer>
        <PageSelectText alternative={alternative}>Ir à página: </PageSelectText>
        <PageSelect
          alternative={alternative}
          variant="filled"
          labelId="Seleção-da-pagina"
          id="Seleção-da-pagina"
          value={page}
          onChange={(value) => {
            setPage(value.target.value);
          }}
          IconComponent={ExpandMoreOutlined}
          disableUnderline={true}
          inputProps={{ disableUnderline: true }}
          label="Pagina"
        >
          {checkTotalPages(totalPages, page, alternative)}
        </PageSelect>
      </PagContainer>
    </BottomNav>
  );
}

export default React.memo(PaginationComponent);

const checkTotalPages = (totalPages, page, alternative) => {
  let components: any = [];
  for (let i = 0; i < totalPages; i++) {
    components.push(
      <ItemMenu
        alternative={alternative}
        key={"key_" + (i + 1)}
        selected={i === page}
        value={i + 1}
      >
        {i + 1}
      </ItemMenu>
    );
  }

  return components;
};
const getPaginationContent = (setPage, totalPages, page, alternative): any => {
  let content: any = [];
  const changePageTo = (toPage) => {
    setPage(toPage);
  };
  for (let i = 0; i < totalPages; i++) {
    if (page > 3 && page < totalPages - 4) {
      if (i >= page - 3 && i <= page + 1) {
        content.push(
          <PageListButton
            alternative={alternative}
            key={"keyPage_" + (i + 1)}
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(i + 1)}
          >
            {" "}
            {i + 1}{" "}
          </PageListButton>
        );
      }
      if (i === page + 3) {
        content.push(
          <PageListButton
            alternative={alternative}
            key={"keyPage_" + (i + 1)}
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(totalPages)}
          >
            {"..."}
          </PageListButton>
        );
      }
    } else if (page < 4) {
      if (i <= 5) {
        content.push(
          <PageListButton
            alternative={alternative}
            key={"keyPage_" + (i + 1)}
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(i + 1)}
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
            alternative={alternative}
            key={"keyPage_" + (i + 1)}
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(1)}
          >
            {"..."}
          </PageListButton>
        );
      }

      content.push(
        <PageListButton
          alternative={alternative}
          key={"keyPage_" + (i + 1)}
          $show={i + 1 === page ? true : false}
          onClick={() => changePageTo(i + 1)}
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
