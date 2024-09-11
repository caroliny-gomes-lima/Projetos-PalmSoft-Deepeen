import React from "react";
import { Box } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { DrawerMenuStyles as Styles } from "../styles";
import { DefaultLogo } from "../../../components";
import { MenuGroupContainer } from "../components";

function TemporaryDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <div>
      <React.Fragment>
        <Styles.MenuButton onClick={toggleDrawer(true)}>
          <Styles.MenuIcon />
        </Styles.MenuButton>
        <Styles.Drawer
          anchor="left"
          open={isOpen}
          onClose={toggleDrawer(false)}
        >
          <Styles.ListContainer role="presentation">
            <Styles.Header>
              <Box display="flex" pb="10px">
                <DefaultLogo />
                <Styles.ButtonClose onClick={toggleDrawer(false)}>
                  <Close />
                </Styles.ButtonClose>
              </Box>
            </Styles.Header>
            <MenuGroupContainer toggleDrawer={toggleDrawer} />
          </Styles.ListContainer>
        </Styles.Drawer>
      </React.Fragment>
    </div>
  );
}

export default React.memo(TemporaryDrawer);
