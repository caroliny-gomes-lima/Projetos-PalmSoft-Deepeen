import React from "react";
import Styles from "../styles/Styles";
import HistoricTable from "../components/HistoricTable";
import { BlockTitle } from "../../../../pages/styles/defaultStyles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

function Container() {
  const Title = Texts["pt-BR"].beWork;

  return (
    <Styles.Container>
      <Grid container spacing={2} direction="column">
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={12} md={8} lg={11}>
            <Styles.Content>
              <Styles.HeaderContainer>
                <BlockTitle>{Title.HistoricRelease.title}</BlockTitle>
              </Styles.HeaderContainer>
              <HistoricTable />
            </Styles.Content>
          </Grid>
        </Grid>
      </Grid>
    </Styles.Container>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
