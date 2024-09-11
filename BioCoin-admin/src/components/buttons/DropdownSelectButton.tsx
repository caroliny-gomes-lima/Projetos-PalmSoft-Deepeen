import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import { FontStyles } from "../index";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

const StyledButton = styled(Button)(({ theme, fullWidth }) => {

  return {
    "&&.MuiButton-root": {
      width: fullWidth ? "100%" : "fit-content",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(0.5, 1.5),
      flexShrink: 0,
      overflow: "hidden",
      textTransform: "uppercase",
      marginTop: theme.spacing(0.75),
      ...FontStyles.bold14,
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.primary.contrastText,
      border: "solid 2px",
      borderColor: theme.palette.action.active,
      borderRadius: theme.spacing(3),
      "&:hover": {
        backgroundColor: theme.palette.action.active + 60,
        color: theme.palette.secondary.main,
      },
    },

    "&&.MuiButton-endIcon": {
      fill: theme.palette.primary.main,
      width: 50,
    },

    "&&.Mui-disabled": {
      backgroundColor: theme.palette.action.disabled,
      opacity: 0.6,
    },
  };
});

const useStyles = makeStyles((theme) => ({
  menuPaper: {
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    boxShadow: "0 2px 4px #494949",
  },
  menuItem: {
    ...FontStyles.medium14,
    borderBottom: "solid 1px",
    borderBottomColor: theme.palette.secondary.main,
    justifyContent: "flex-end",
    display: "flex",
    gap: 5,
  },
  menuItemLast: {
    ...FontStyles.medium14,
    justifyContent: "flex-end",
    display: "flex",
    gap: 5,
  },
}));

interface Props {
  //fullWidth?: boolean;
  label?: string;
  customIcon?: any;
  children?: React.ReactNode;
  options: Array<{
    action: () => void;
    name: string;
  }>;
  disabled?: boolean;
}

export default function DropdownSelectButton({
  label,
  customIcon,
  children,
  options,
  disabled,
  ...props
}: Props): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <StyledButton
        aria-label="more"
        id="buttonMenu-select"
        variant="contained"
        aria-controls={open ? "menu-select" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={(event: any) => setAnchorEl(event.currentTarget)}
        endIcon={anchorEl ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        {...props}
      >
        {label ? label : children}
        <Menu
          id="menu-select"
          classes={{ paper: classes.menuPaper }}
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          MenuListProps={{
            "aria-labelledby": "buttonMenu-select",
          }}
          open={open}
          onBlur={() => setAnchorEl(null)}
        >
          {options?.map(({ action, name }, index: number) => (
            <MenuItem
              classes={{
                root:
                  index === options?.length - 1
                    ? classes.menuItemLast
                    : classes.menuItem,
              }}
              key={name}
              onClick={() => {
                action();
                () => setAnchorEl(null);
              }}
            >
              {name}
            </MenuItem>
          ))}
        </Menu>
      </StyledButton>
    </div>
  );
}
