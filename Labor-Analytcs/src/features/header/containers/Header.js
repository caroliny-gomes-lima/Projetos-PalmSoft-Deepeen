import React from "react";
import { HeaderStyles as Styles } from "../styles";
import {
  DrawerMenu,
  Filters,
  LeftFunctionalitiesButtons,
  NavigationButtons,
  UserInfos,
  FiltersStatusNotification,
} from "../presentations";
import { DefaultLogo } from "../../../components";
import { Grid } from "@material-ui/core";

function Header() {
  const [visible, setVisible] = React.useState(false);
  const [visibleNot, setVisibleNot] = React.useState(false);

  return (
    <Styles.Container>
      <Styles.Content $maxWidth="xxl">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={7} sm={9} md={11} lg={10}>
            <Styles.FirstContentGroup>
              <DrawerMenu />
              <DefaultLogo />
              <NavigationButtons
                showFilters={() => {
                  if (!visible) {
                    setVisible(true);
                  }
                }}
              />
            </Styles.FirstContentGroup>
          </Grid>

          <Grid item xs={5} sm={3} md={1} lg={2}>
            <Grid container spacing={1} alignItems="center" justify="flex-end">
              <Styles.ThirdContentGroup>
                <UserInfos />
                <LeftFunctionalitiesButtons />
              </Styles.ThirdContentGroup>
            </Grid>

            <FiltersStatusNotification
              visible={visibleNot}
              hideStatusFilter={() => {
                if (visible) {
                  setVisibleNot(false);
                }
              }}
            />
            <Filters
              visible={visible}
              hideFilters={() => {
                if (visible) {
                  setVisible(false);
                }
              }}
            />
          </Grid>
        </Grid>
      </Styles.Content>
    </Styles.Container>
  );
}

export default React.memo(Header);
