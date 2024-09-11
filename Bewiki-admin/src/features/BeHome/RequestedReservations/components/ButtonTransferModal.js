import React from "react";
import { TransferModalStyles as Styles } from "../styles";
import { Fade, Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Input, Select } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { InfoSharp, ArrowRightAltRounded } from "@material-ui/icons";

function ButtonTransferModal({
  ReservationsStayTransfer,
  BeHomeStayCategoryRequest,
  StayCategorytData,
  BeHomeStayRoomRequest,
  isFetching,
  StayRoomData,
  tableData,
  reloadTable,
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(null);
  const text = Texts["pt-BR"].beHome.RequestedReservations;

  const mount = React.useCallback(() => {
    if (open) {
      const stayTypeMap = {
        S: "SHORT_STAY",
        L: "LONG_STAY",
      };
      BeHomeStayCategoryRequest(stayTypeMap[tableData.stayType]);
    }
  }, [BeHomeStayCategoryRequest, open, tableData]);
  React.useEffect(mount, [mount]);

  React.useEffect(() => {
    if (
      open &&
      selectedCategoryId !== null &&
      selectedCategoryId !== undefined
    ) {
      BeHomeStayRoomRequest(selectedCategoryId);
    }
  }, [open, selectedCategoryId, BeHomeStayRoomRequest]);

  const handleOpenModal = () => {
    setOpen(true, InfoSharp);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

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
    handleCloseModal();
  }

  return (
    <>
      <FormHolder onSubmit={sendParameters}>
        <Styles.Container>
          <Styles.ButtonTableModal
            $defaultHoverColor
            onClick={() => handleOpenModal()}
            endIcon={<ArrowRightAltRounded />}
          >
            {text.TransferButton}
          </Styles.ButtonTableModal>
        </Styles.Container>
        <Styles.StyledIformationModal
          open={open}
          onClose={(a, reason) => {
            if (reason !== "backdropClick") {
              setOpen(false);
            }
          }}
          BackdropComponent={Styles.styledBackDrop}
        >
          <Fade in={open}>
            <Styles.ModalContainer>
              <Styles.HeaderContainer>
                <ArrowRightAltRounded
                  style={{ marginRight: 10, color: "black" }}
                />
                <Styles.Title>
                  {text.ModalTransferReserve.titleTransfer}
                </Styles.Title>
              </Styles.HeaderContainer>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Styles.SubTitle>
                  {text.ModalTransferReserve.text1}
                </Styles.SubTitle>

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
                              tableData.stayType === "L"
                                ? "Moradia"
                                : "Hospedagem"
                            }
                            readOnly
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                </Styles.ModalContent>

                <Styles.HeaderContainer>
                  <Styles.Title $defaultColor $defaultFonts>
                    {text.ModalTransferReserve.transferData}
                  </Styles.Title>
                </Styles.HeaderContainer>
                <Styles.SubTitle $defaultFonts $defaultMargin>
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
                <Styles.TextFieldButtonCancel
                  fullWidth={false}
                  onClick={() => handleCloseModal()}
                >
                  {text.ModalTransferReserve.back}
                </Styles.TextFieldButtonCancel>

                <Styles.TextFieldButtonAccept
                  $defaultFontColor={1}
                  fullWidth={false}
                  type="submit"
                  name="button"
                  loading={isFetching}
                  disabled={isFetching}
                >
                  {text.ModalTransferReserve.confirm}
                </Styles.TextFieldButtonAccept>
              </Styles.Container>
            </Styles.ModalContainer>
          </Fade>
        </Styles.StyledIformationModal>
      </FormHolder>
    </>
  );
}

function mapStateToProps(state) {
  const { StayRoomData, StayCategorytData } = state.BeHomeRequestedReservations;
  return {
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
)(ButtonTransferModal);
