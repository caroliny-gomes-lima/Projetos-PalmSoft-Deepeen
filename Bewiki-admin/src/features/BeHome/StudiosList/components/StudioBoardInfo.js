import { Grid } from "@material-ui/core";
import React from "react";
import CardView from "./CardView";
import {
  CardTravel,
  DeleteSweep,
  Lock,
  MeetingRoom,
  Notifications,
  NotificationsActive,
} from "@material-ui/icons";
import { Colors, Texts } from "../../../../config";
import CardButton from "./CardButton";
import { Pagination, Table } from "../../../../components";
import Styles from "../styles/StyledCard";

function StudioBoardInfo({
  occupancyData,
  isFetchingOccupancyData,
  studioListData,
  isFetchingStudioListData,
  page,
  setPage,
  changeScreen,
  textCard,
  textStatusLabels,
  gridViewSelect,
}) {
  const texts = Texts["pt-BR"].beHome.StudioInfoList;
  const StatusVisualizationMap = {
    DISPONIVEL: {
      title: Colors.green,
      border: Colors.disabledGreen,
      button: Colors.disabledGreen,
      hover: Colors.onHoverDisabledGreen,
      icon: <MeetingRoom />,
      label: textStatusLabels.vacantClean,
      text: Colors.black,
    },
    VAGO_SUJO: {
      title: Colors.green,
      border: Colors.black,
      button: Colors.white0,
      hover: Colors.onHoverWhite,
      icon: <DeleteSweep />,
      label: textStatusLabels.vacantDirty,
      text: Colors.black,
    },
    OCUPADO: {
      title: Colors.white0,
      border: Colors.orange,
      button: Colors.orange,
      hover: Colors.onHoverOrange,
      icon: <Lock />,
      label: textStatusLabels.occupied,
      text: Colors.white0,
    },
    CHECKIN: {
      title: Colors.white0,
      border: Colors.green,
      button: Colors.green,
      hover: Colors.onHoverGreen,
      icon: <Notifications />,
      label: textStatusLabels.checkIn,
      text: Colors.white0,
    },
  };

  const getStatusVisualizationMapEntry = (studioData) => {
    if (studioData.occupied) {
      return StatusVisualizationMap["OCUPADO"];
    }
    return StatusVisualizationMap[studioData.status];
  };

  return (
    <>
      <Grid container spacing={0} direction="row">
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <CardView
            borderColor={Colors.orange}
            TitleCard={textCard.currentOccupation}
            IconCard={<CardTravel />}
            IconColor={Colors.orange}
            lineHeaderColor={Colors.orange}
            occupation={occupancyData?.currentOccupation || 0}
            isFetching={isFetchingOccupancyData}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <CardView
            borderColor={Colors.green}
            TitleCard={textCard.checkIns}
            IconCard={<NotificationsActive />}
            IconColor={Colors.green}
            lineHeaderColor={Colors.green}
            occupation={occupancyData?.expectedCheckIns || 0}
            isFetching={isFetchingOccupancyData}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <CardView
            borderColor={Colors.grayDisabled}
            TitleCard={textCard.checkOuts}
            IconCard={<MeetingRoom />}
            lineHeaderColor={Colors.gray1}
            occupation={occupancyData?.expectedCheckOuts || 0}
            isFetching={isFetchingOccupancyData}
          />
        </Grid>
      </Grid>
      {gridViewSelect ? (
        <>
          <Grid container spacing={0} direction="row">
            {isFetchingStudioListData ? (
              <Styles.LoadingContainer>
                <Styles.CircleLoading
                  style={{ width: "50%", height: "50%", margin: "50px" }}
                />
              </Styles.LoadingContainer>
            ) : (
              studioListData?.content.map((data) => {
                const visualizationMapItem =
                  getStatusVisualizationMapEntry(data);
                return (
                  <>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                      <CardButton
                        TitleCard={data.studioName}
                        externalIdTitleCard={data.externalId}
                        dataCard={visualizationMapItem.label}
                        buttonColor={visualizationMapItem.button}
                        borderColor={visualizationMapItem.border}
                        hoverColor={visualizationMapItem.hover}
                        titleColor={visualizationMapItem.title}
                        IconCard={visualizationMapItem.icon}
                        colorFont={visualizationMapItem.text}
                        onPress={changeScreen}
                      />
                    </Grid>
                  </>
                );
              })
            )}
          </Grid>
          <Pagination
            page={page}
            totalPages={studioListData?.totalPages}
            setPage={setPage}
          />
        </>
      ) : (
        <>
          <Table
            sortContent={() => {}}
            id="infoTable"
            headers={texts}
            data={studioListData?.content}
            totalPage={50}
            withGroup
            firstDivision={5}
            secondDivision={5}
            // loading={isFetching}
            renderItemColumns={(item) => [
              item.studioType,
              item.studioName,
              item.studioName,
              <>&nbsp;</>,
              getStatusVisualizationMapEntry(item).label,
            ]}
          />
          <Pagination
            page={page}
            totalPages={studioListData?.totalPages}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
}

export default StudioBoardInfo;
