import { Grid } from "@material-ui/core";
import { TransferModalStyles as Styles } from "../../styles";
import { Texts } from "../../../../../config";
import { ContainerInputs } from "../../../../../components/inputs/inputsComponents";
import { Input, Select } from "../../../../../components";
import { customModal } from "../../../../modals/utils";
import React from "react";
import { connect } from "react-redux";
import { Creators } from "../../reduxSagas";
import { FormHolder } from "../../../../../FormConfig";

function TransferReservationModalInside({
  tableData,
  reloadTable,
  isFetching,
  ReservationsStayTransfer,
  BeHomeStayRoomRequest,
  BeHomeStayCategoryRequest,
  StayCategorytData,
  StayRoomData,
}) {
  const text = Texts["pt-BR"].beHome.RequestedReservations;
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(null);

  const mount = React.useCallback(() => {
    const stayTypeMap = {
      S: "SHORT_STAY",
      L: "LONG_STAY",
    };
    BeHomeStayCategoryRequest(stayTypeMap[tableData.stayType]);
  }, [BeHomeStayCategoryRequest, tableData]);
  React.useEffect(mount, [mount]);

  React.useEffect(() => {
    if (selectedCategoryId !== null && selectedCategoryId !== undefined) {
      BeHomeStayRoomRequest(selectedCategoryId);
    }
  }, [selectedCategoryId, BeHomeStayRoomRequest]);

  const generateCategoryList = () => {
    if (StayCategorytData === undefined || StayCategorytData === null) {
      return [];
    }
    return StayCategorytData.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  const generateStayRoomList = () => {
    if (StayRoomData === undefined || StayRoomData === null) {
      return [];
    }
    return StayRoomData.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  function sendParameters(data) {
    ReservationsStayTransfer(
      tableData.stayType,
      tableData.id,
      data.idBedroom,
      reloadTable
    );
    customModal.close();
  }
  return (
    <FormHolder onSubmit={sendParameters}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Styles.HeaderContainer $defaultMargin>
          <Styles.Title $defaultFontsSize>
            {text.ModalTransferReserve.currentData}
          </Styles.Title>
        </Styles.HeaderContainer>

        <Styles.ModalContent>
          <Grid container spacing={1} direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>
                    {text.ModalTransferReserve.inputUser}
                  </Styles.InputTitle>
                }
                children={
                  <Input
                    small
                    marginDefault
                    defaultBorder
                    name="user"
                    defaultValue={tableData.name}
                    readOnly
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>
                    {text.ModalTransferReserve.inputStay}
                  </Styles.InputTitle>
                }
                children={
                  <Input
                    name="stay"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={tableData.checkIn}
                    readOnly
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>
                    {text.ModalTransferReserve.inputModality}
                  </Styles.InputTitle>
                }
                children={
                  <Input
                    name="type"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={
                      tableData.stayType === "L" ? "Moradia" : "Hospedagem"
                    }
                    readOnly
                  />
                }
              />
            </Grid>
          </Grid>
        </Styles.ModalContent>

        <Styles.HeaderContainer $defaultMargin>
          <Styles.Title $defaultColor $defaultFonts>
            {text.ModalTransferReserve.transferData}
          </Styles.Title>
        </Styles.HeaderContainer>
        <Styles.SubTitle $defaultFonts>
          {text.ModalTransferReserve.text2}
        </Styles.SubTitle>

        <Styles.ModalContent>
          <Grid container spacing={1} direction="row">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>
                    {text.ModalTransferReserve.selectCategory}
                  </Styles.InputTitle>
                }
                children={
                  <Select
                    small
                    name="category"
                    disableError
                    options={generateCategoryList()}
                    onChange={setSelectedCategoryId}
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>
                    {text.ModalTransferReserve.idBedroom}
                  </Styles.InputTitle>
                }
                children={
                  <Select
                    name="idBedroom"
                    small
                    disableError
                    options={generateStayRoomList()}
                  />
                }
              />
            </Grid>
          </Grid>
        </Styles.ModalContent>
      </Grid>

      <Styles.Container>
        <Grid item xs={12} sm={6} md={6} lg={2}>
          <Styles.TextFieldButton
            $defaultCancelButton
            fullWidth={false}
            onClick={customModal.close}
          >
            {text.ModalTransferReserve.back}
          </Styles.TextFieldButton>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Styles.TextFieldButton
            $defaultFontColor={1}
            fullWidth={false}
            type="submit"
            name="button"
            loading={isFetching}
            disabled={isFetching}
          >
            {text.ModalTransferReserve.confirm}
          </Styles.TextFieldButton>
        </Grid>
      </Styles.Container>
    </FormHolder>
  );
}

function mapStateToProps(state) {
  const { StayRoomData, StayCategorytData, isFetching } =
    state.BeHomeRequestedReservations;
  return {
    isFetching,
    StayCategorytData,
    StayRoomData,
  };
}

function mapDispatchToProps(dispatch) {
  const {
    ReservationsStayTransfer,
    BeHomeStayRoomRequest,
    BeHomeStayCategoryRequest,
  } = Creators;
  return {
    BeHomeStayCategoryRequest: function (stayType) {
      return dispatch(BeHomeStayCategoryRequest(stayType));
    },
    ReservationsStayTransfer: function (
      stayType,
      StaySubscriptionId,
      BehomeStayId,
      reloadTable
    ) {
      return dispatch(
        ReservationsStayTransfer(
          stayType,
          StaySubscriptionId,
          BehomeStayId,
          reloadTable
        )
      );
    },
    BeHomeStayRoomRequest: function (categoryId) {
      return dispatch(BeHomeStayRoomRequest(categoryId));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransferReservationModalInside);
