import React from "react";
import Styles from "../styles/Styles";
//import { Creators } from "../reduxSagas";
//import { Creators as GlobalCreators } from "../../../globalReduxSagas";
import { connect } from "react-redux";
import { Colors, Texts } from "../../../../config";
import { Swiper } from "../../../../components";
import { StudiosCards, EditStudioContainer } from "../components";
import { ArrowForwardIos } from "@material-ui/icons";
import { Grid } from "@material-ui/core";

function Container() {
  const texts = Texts["pt-BR"].beHome.StudiosEditing;
  const [studioName, showStudioName] = React.useState(false);
  const studiosCardScreen = ({ goNext }) => {
    showStudioName(false);
    return <StudiosCards changeScreen={goNext} />;
  };

  const editStudioScreen = ({ goPrevious }) => {
    showStudioName(true);
    return (
      <>
        <EditStudioContainer changeScreen={goPrevious} />
      </>
    );
  };

  return (
    <>
      <Styles.Container>
        <Styles.ScrollContainer>
          <Styles.HeaderContainer>
            <Grid item xs={4} sm={4} md={6} lg={3} xl={2}>
              <Styles.Title $defaultFont>{texts.title}</Styles.Title>
            </Grid>
            {studioName === true ? (
              <Grid item xs={11} sm={12} md={12} lg={12} xl={12}>
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  justify="felx-start"
                >
                  <ArrowForwardIos
                    style={{
                      alignSelf: "center",
                      fontSize: 15,
                      marginLeft: 10,
                      marginRight: 15,
                      color: Colors.black,
                    }}
                  />
                  <Styles.SubTitle $defaultFont>
                    {"Studio Basic"}
                  </Styles.SubTitle>
                </Grid>
              </Grid>
            ) : null}
          </Styles.HeaderContainer>
          <Styles.Line $defaultLine $defaultMarginTop />
          <Swiper screens={[studiosCardScreen, editStudioScreen]} />
        </Styles.ScrollContainer>
      </Styles.Container>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
