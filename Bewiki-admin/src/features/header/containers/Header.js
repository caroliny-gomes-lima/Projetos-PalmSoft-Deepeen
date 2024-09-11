import React from "react";
import { HeaderStyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import InputSearch from "../../../components/inputs/InputSearch";
import { Menu } from "@material-ui/icons";
import { FormHolder } from "../../../FormConfig";

function Header({ openMenu, isOpen }) {
  const handleDrawerOpen = () => {
    openMenu(isOpen);
  };

  return (
    <Styles.Container>
      <Styles.Content $maxWidth="xxl">
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Styles.FirstContentGroup>
              <Styles.MenuButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
              >
                <Menu />
              </Styles.MenuButton>
              <FormHolder>
                <InputSearch
                  name="headerSearch"
                  placeholder="Busque no sistema"
                />
              </FormHolder>
            </Styles.FirstContentGroup>
          </Grid>
        </Grid>
      </Styles.Content>
    </Styles.Container>
  );
}

export default React.memo(Header);
