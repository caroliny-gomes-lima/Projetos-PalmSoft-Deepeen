import {
  Button,
  CircularProgress,
  Fade,
  ListItemIcon,
  makeStyles,
  Menu,
  MenuItem
} from "@material-ui/core";
import { ArrowDownward, ExpandMore } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Colors, Spacing } from "../../config";
import FontStyles from "../styles/fontStyles";

const StyledButton = styled(Button)(({ theme, alternative }) => {
  const { spacing, palette: colors } = theme;

  return {
    "&&.MuiButton-root": {
      display: "flex",
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
      padding: spacing(0.75, 1.1),
      flexShrink: 0,
      letterSpacing: "0px",
      overflow: "hidden",
      textTransform: "unset",
      backgroundColor: alternative ? "white" : Colors.purple,
      color: alternative ? colors.text.primary : "white",
      ...FontStyles.regular12,
      ".MuiButton-startIcon": {
        fill: "white",
        width: 17
      },
      "&:disabled": {
        opacity: 0.7
      },
      ":hover": {
        backgroundColor: alternative ? "white" : Colors.purple + 90
      }
    }
  };
});
const StyledButtonList = styled(MenuItem)(({ theme, alternative, $color }) => {
  const { spacing, palette: colors } = theme;
  return {
    "&&.MuiMenuItem-root": {
      display: "flex",
      height: "fit-content",
      alignItems: "center",
      justifyContent: " flex-end",
      padding: spacing(0.9, 1.25),
      flexShrink: 0,
      overflow: "hidden",

      color: "#4D585A",
      ...FontStyles.regular12,
      background: "white",
      "&.MuiListItem-button:hover": {
        background: "white"
      },
      "&.Mui-focusVisible": {
        background: "white"
      },
      "&.Mui-selected": {
        background: "white"
      },

      "& .MuiPaper-root": {
        background: "white",
        padding: 0
      }
    }
  };
});

const StyledCircularProgress = styled(CircularProgress)(({ theme, $show }) => {
  const { palette: colors } = theme;
  return {
    position: "absolute",
    color: colors.primary.main,
    transition: ".5s",
    opacity: $show ? 1 : 0
  };
});

const ChildrenContainer = styled.div(({ $show }) => {
  return {
    transition: ".5s",
    opacity: $show ? 1 : 0.5
  };
});
const Icon = styled(ListItemIcon)(({ theme, alternative }) => {
  const { palette: colors, spacing } = theme;
  return {
    "&&.MuiListItemIcon-root": {
      minWidth: 0,
      maxWidth: "20px",
      marginLeft: spacing(1.1),
      color: "#4D585A"
    }
  };
});

const useStyles = makeStyles((theme) => {
  const { palette: colors, spacing } = theme;
  return {
    menuPaper: {
      backgroundColor: "#fff",
      boxShadow: "0px 0px 10px #00000010",
      ...FontStyles.medium12,
      marginTop: spacing(0.6)
    },
    menuPaperAlt: {
      backgroundColor: "white",
      boxShadow: "0px 0px 10px #00000010",
      ...FontStyles.medium12,
      marginTop: spacing(0.6)
    }
  };
});

interface Props {
  label?: string;
  children?: React.ReactNode;

  disabled?: boolean;

  name?: string;
  feedback?: boolean;
  action?: "submit" | "clear" | "clearDefault";

  onClick?: (event: any) => void;

  fullWidth?: boolean;
  loading?: boolean | string;

  buttons: any[];

  endIcon?: any;
  alternative?: boolean;
}

function ButtonMenuComponent({
  fullWidth = false,
  loading,
  children,
  buttons,
  disabled,
  name,

  endIcon,
  alternative,
  ...props
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function ordenarPorLabel(lista, chave) {
    return lista.sort((a, b) => {
      const labelA = a[chave].toUpperCase();
      const labelB = b[chave].toUpperCase();

      if (labelA < labelB) {
        return -1;
      }
      if (labelA > labelB) {
        return 1;
      }

      return 0;
    });
  }
  return (
    <div>
      <StyledButton
        alternative={alternative}
        endIcon={endIcon}
        variant="contained"
        type={null}
        fullWidth={fullWidth}
        disabled={disabled}
        {...props}
        onClick={(e) => {
          handleClick(e);
          props.onClick && props.onClick(e);
        }}
      >
        <StyledCircularProgress size={Spacing(3)} $show={loading} />
        <ChildrenContainer alternative={alternative} $show={!loading}>
          {children}
        </ChildrenContainer>
      </StyledButton>
      <Menu
        classes={{
          paper: alternative ? classes.menuPaperAlt : classes.menuPaper
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        elevation={0}
        getContentAnchorEl={null}
      >
        {buttons?.length > 0 ? (
          buttons?.map((item) => (
            <StyledButtonList
              alternative={alternative}
              style={{
                paddingInline: Spacing(1)
              }}
              onClick={() => {
                item?.onClick();
              }}
            >
              {item?.label}
              {item?.icon && (
                <Icon>
                  <item.icon
                    style={{
                      maxWidth: "20px",
                      width: "100%",
                      color: "#4D585E",
                      ...item.style
                    }}
                    fontSize="medium"
                  />
                </Icon>
              )}
            </StyledButtonList>
          ))
        ) : (
          <StyledButtonList
            alternative={alternative}
            style={{
              paddingInline: Spacing(1)
            }}
            onClick={() => { }}
          >
            Sem opções
          </StyledButtonList>
        )}
      </Menu>
    </div>
  );
}

export default ButtonMenuComponent;
