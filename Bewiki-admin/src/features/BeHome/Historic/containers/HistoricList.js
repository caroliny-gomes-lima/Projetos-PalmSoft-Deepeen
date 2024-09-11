import React from "react";
import Styles from "../styles/Styles";
import { BlockTitle } from "../../../../pages/styles/defaultStyles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import HistoricTable from "../components/HistoricTable";

function Container({
  HistoricReleaseData,
  isFetching,
  HistoricReleaseRequest,
}) {
  const texts = Texts["pt-BR"].beHome.HistoricList;

  return (
    <Styles.Container>
      <Grid container spacing={1} direction="column">
        <Grid item xs={12} sm={12} md={8} lg={12}>
          <Styles.Content>
            <Styles.HeaderContainer>
              <BlockTitle>{texts.title}</BlockTitle>
            </Styles.HeaderContainer>

            <HistoricTable />
          </Styles.Content>
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
