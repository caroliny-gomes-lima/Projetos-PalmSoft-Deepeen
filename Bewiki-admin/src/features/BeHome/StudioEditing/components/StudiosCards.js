import React from "react";
import Styles from "../styles/Styles";
//import { Creators } from "../reduxSagas";
//import { Creators as GlobalCreators } from "../../../globalReduxSagas";
import { connect } from "react-redux";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";

function StudiosCards({ changeScreen }) {
  const texts = Texts["pt-BR"].beHome.StudiosEditing;

  return (
    <>
      <Styles.Content>
        <Styles.HeaderContent>
          <Styles.Title>{texts.subTitle}</Styles.Title>
        </Styles.HeaderContent>
        <Styles.StudiosCards>
          <Styles.HeaderContent>
            <Styles.SubTitle>{texts.studio}</Styles.SubTitle>
          </Styles.HeaderContent>
          <Styles.TextsCardsContent>
            {texts.studioName}
          </Styles.TextsCardsContent>
          <Styles.TextsCardsContent $defaultFont $setMargin>
            {"Studio Basic"}
          </Styles.TextsCardsContent>
          <Styles.Line $defaultColor $defaultMarginTop />
          <Grid container spacing={1} direction="row" justify="flex-end">
            <Grid item xs={12} sm={6} md={5} lg={3}>
              <Styles.EditStudioButton onClick={changeScreen}>
                {texts.editStudioButtom}
              </Styles.EditStudioButton>
            </Grid>
          </Grid>
        </Styles.StudiosCards>
      </Styles.Content>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(StudiosCards);
