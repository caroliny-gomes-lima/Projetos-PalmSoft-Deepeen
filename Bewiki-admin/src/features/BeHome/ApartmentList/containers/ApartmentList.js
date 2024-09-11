import React from "react";
import Styles from "../styles/Styles";
import { BlockTitle } from "../../../../pages/styles/defaultStyles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";

function Container({
  HistoricReleaseData,
  isFetching,
  HistoricReleaseRequest,
}) {
  const Title = Texts["pt-BR"].beHome;

  return (
    <Styles.Container>
      <Grid container spacing={1} direction="column">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={12} md={8} lg={12}>
            <Styles.Content>
              <Styles.HeaderContainer>
                <BlockTitle>{Title.RegisterApartment.Title}</BlockTitle>
              </Styles.HeaderContainer>
            </Styles.Content>
          </Grid>
        </Grid>
      </Grid>
    </Styles.Container>
  );
}

/*function mapStateToProps(state) {
  //const { HistoricReleaseData, isFetching } = state.behomeHistoricRelease;
  return {
    //HistoricReleaseData,
    //isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  //const { HistoricReleaseRequest } = Creators;
  return {
    /*HistoricReleaseRequest: function () {
      return dispatch(HistoricReleaseRequest());
    },
  };
}*/

export default Container;
