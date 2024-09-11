import React from "react";
import Styles from "../styles/StyledDetails";
import { Grid } from "@material-ui/core";
import StudioDataInput from "./StudioDataInput";
import { FormHolder } from "../../../../FormConfig";
import { Texts } from "../../../../config";
import CurrentReservationInput from "./CurrentReservationInput";
import ReservationTable from "./ReservationTable";
import { connect } from "react-redux";

function StudioListDetails({ changeScreen }) {
  console.log(changeScreen);
  const texts = Texts["pt-BR"].beHome.StudioDetailsList;

  return (
    <>
      <FormHolder>
        <Styles.ScrollContainer>
          <Styles.HeaderContainer onClick={changeScreen}>
            <Grid
              container
              item
              xs={3}
              direction="row"
              alignItems="center"
              justify="flex-start"
            >
              <Styles.GoBackIcon />
              <Styles.Title $principal $first>
                STUDIO BASIC: 2-B201
              </Styles.Title>
            </Grid>
            <Styles.Line />
          </Styles.HeaderContainer>

          <Styles.Title $first>{texts.title[0]}</Styles.Title>
          <StudioDataInput />

          <Styles.Title>{texts.title[1]}</Styles.Title>
          <CurrentReservationInput />

          <Styles.Title>{texts.title[2]}</Styles.Title>
          <ReservationTable />
        </Styles.ScrollContainer>
      </FormHolder>
    </>
  );
}

function mapStateToProps(state) {
  //   const {
  //     occupancyData,
  //     studioListData,
  //     categoryData,
  //     isFetchingOccupancyData,
  //     isFetchingStudioListData,
  //   } = state.behomeStudiosList;
  return {
    /*occupancyData,
      studioListData,
    isFetching: isFetchingOccupancyData || isFetchingStudioListData,
     isFetchingOccupancyData,
     isFetchingStudioListData,
     categoryData,*/
  };
}

function mapDispatchToProps(dispatch) {
  /*  const {
       BehomeOccupancyDataGetRequest,
       BehomeStudioListDataGetRequest,
       BehomeCategoryDataGetRequest,
    } = Creators;*/
  return {
    /*BehomeOccupancyDataGetRequest: function () {
    return dispatch(BehomeOccupancyDataGetRequest());
  };*/
    /*BehomeStudioListDataGetRequest: function (
      page,
      size,
       categoryId,
         status,
       stayType
     ) {
        return dispatch(
          BehomeStudioListDataGetRequest(page, size, categoryId, status, stayType)
        );
      },
      BehomeCategoryDataGetRequest: function (stayType) {
        return dispatch(BehomeCategoryDataGetRequest(stayType));
      },*/
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudioListDetails);
