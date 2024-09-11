import React, { useState } from "react";
import Styles from "../styles/ShortCutsStyles";
import { BlockTitle } from "../../../pages/styles/defaultStyles";
import { Texts } from "../../../config";
import {
  ChartArea,
  FileDocument,
  MapIcon,
  ArrowLeftRightBold,
  AccountGroup,
  AccessHandKey,
  KeyAccess,
} from "../../../config/icons";
import {
  WatchLater,
  SwapHoriz,
  AssignmentInd,
  AccountBox,
} from "@material-ui/icons";
import { FilterButtonContained } from "../../../components";
import { Grid } from "@material-ui/core";
import colors from "../../../config/colors";
import { navigateTo } from "../../../navigation/navigate";

function ShortCutsHomePage({ item, index, lastOne, goto, firstItem }) {
  const classes = Styles.useStyles();
  const [open, setOpen] = React.useState(false);
  const [isLightBlue, setLightBlue] = useState(false);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={12} lg={12}>
          <Styles.ContainerButtonGroup
            $firstOne={firstItem}
            $lastOne={index === lastOne}
            $withoutPadding={!open}
            onClick={() => {
              !isLightBlue
                ? setLightBlue(colors.lightBlue + 70)
                : setLightBlue(!isLightBlue);
            }}
            style={{ backgroundColor: isLightBlue }}
          >
            <Styles.ButtonGroup
              startIcon={
                item.icon ? <item.icon className={classes.icon} /> : null
              }
            >
              <Styles.ContainerButtonPage onClick={() => setOpen(!open)}>
                <Styles.GroupTitle>{item.groupTitle}</Styles.GroupTitle>
                <Styles.TextButtonPage>{item.textTitles}</Styles.TextButtonPage>
              </Styles.ContainerButtonPage>
              <Styles.StyledChevronDown $open={open} />
            </Styles.ButtonGroup>
            <Styles.HideGroupButtons $open={open}>
              <Styles.ContentPage>
                <Grid container spacing={1}>
                  {item.pages.map((page, pageIndex) => {
                    return page.dontShow ? null : (
                      <Grid item xs={12} sm={8} md={3} lg={2}>
                        <FilterButtonContained
                          onClick={page.working ? () => goto(page) : null}
                          key={page.title + pageIndex}
                          style={{ marginTop: 9, height: 42 }}
                          startIcon={page.icon ? <page.icon /> : null}
                        >
                          {page.titleButton}
                        </FilterButtonContained>
                      </Grid>
                    );
                  })}
                </Grid>
              </Styles.ContentPage>
            </Styles.HideGroupButtons>
          </Styles.ContainerButtonGroup>
        </Grid>
      </Grid>
    </>
  );
}

export default React.memo(ShortCutsHomePage);
