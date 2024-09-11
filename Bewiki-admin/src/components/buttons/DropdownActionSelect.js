import * as React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { MenuItem, Menu, IconButton, makeStyles } from "@material-ui/core";
import { Spacing } from "../../config";
import { FontStyles } from "..";

/*
LEMBRETE

PARA COLOCAR OS BOTÕES NESSE DROPDOWN, PASSAR UM ARRAY DE OBJETOS NO SEGUINTE FORMATO:

{
  action: ação que o botão vai fazer,
  icon: Ícone do botão,
  name: nome do botão
}

EXEMPLO:

{
  action: () => console.log("Teste"),
  name: "Teste",
  icon: (className) => {return <ComponenteDoIcone classes={className}/>}
}

*/

const useStyles = makeStyles((theme) => ({
  menuPaper: {
    borderRadius: Spacing(2),
    marginTop: Spacing(0.5),
  },
  button: {
    // backgroundColor: "white",
    padding: Spacing(0),
  },
  buttonIcon: {
    height: Spacing(2),
    width: Spacing(2),
  },
  menuItemIcon: {
    height: Spacing(1.85),
    width: Spacing(1.85),
  },
  menuItem: {
    ...FontStyles.medium14,
    borderBottom: "0.5px solid #30303622",
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
export default function DropdownActionSelect({ options, customIcon }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        style={customIcon ? { filter: open } : { filter: open && "invert(100%)" }}
        classes={{ root: classes.button }}
        onClick={handleClick}
      >
        {customIcon ? 
          customIcon : (
            <MoreVertIcon classes={{ root: classes.buttonIcon }} />
        )}
      </IconButton>
      <Menu
        classes={{ paper: classes.menuPaper }}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        open={open}
        onClose={handleClose}
      >
        {options.map(({ action, icon, name }, index) => (
          <MenuItem
            classes={{
              root:
                index === options.length - 1
                  ? classes.menuItemLast
                  : classes.menuItem,
            }}
            key={name}
            onClick={() => {
              action();
              handleClose();
            }}
          >
            {name}
            {icon !== null && icon !== undefined
              ? icon({ root: classes.menuItemIcon })
              : null}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
