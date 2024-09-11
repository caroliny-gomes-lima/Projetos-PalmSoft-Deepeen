import React from "react";
import { CancelModalStyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Input, InputMultiline } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";
import TableCancelButton from "../../components/buttons/TableCancelButton";

function ButtonCancelModal({
  tableData,
  isFetching,
  RequestedReservationsCancell,
  reloadTable,
}) {
  const text = Texts["pt-BR"].beHome.RequestedReservations.ModalcancelReserve;

  const handleOpenModal = () => {
    customModal.setInfos(
      null,
      text.titleCancel,
      [text.text1],
      null,
      { onClick: customModal.close },
      <FormHolder onSubmit={sendParameters}>
        <Styles.HeaderContainer $defaultMargin>
          <Styles.Title>{text.residentData}</Styles.Title>
        </Styles.HeaderContainer>
        <Styles.SubTitle $defaultFonts $defaultMargin>
          {text.text2}
        </Styles.SubTitle>

        <Styles.ModalContent>
          <Grid container spacing={1} direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{text.inputUser}</Styles.InputTitle>
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
                  <Styles.InputTitle>{text.inputStay}</Styles.InputTitle>
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
                  <Styles.InputTitle>{text.inputModality}</Styles.InputTitle>
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
            <Grid item xs={12}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{text.observations}</Styles.InputTitle>
                }
                children={
                  <InputMultiline name="cancelReason" maxlenght={200} />
                }
              />
            </Grid>
          </Grid>
        </Styles.ModalContent>

        <Styles.FooterModal>
          <Styles.TextFieldButtonCancel
            fullWidth={false}
            onClick={() => handleCloseModal()}
          >
            {text.back}
          </Styles.TextFieldButtonCancel>
          <Styles.TextFieldButtonAccept
            fullWidth={false}
            type="submit"
            name="button"
            loading={isFetching}
            disabled={isFetching}
          >
            {text.confirm}
          </Styles.TextFieldButtonAccept>
        </Styles.FooterModal>
      </FormHolder>
    );
  };
  const handleCloseModal = () => {
    customModal.close();
  };

  function sendParameters(data) {
    RequestedReservationsCancell(
      tableData.stayType,
      tableData.id,
      reloadTable,
      data
    );
    handleCloseModal();
  }

  return (
    <>
      <Styles.Container>
        <TableCancelButton onClick={handleOpenModal} />
      </Styles.Container>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  const { RequestedReservationsCancell } = Creators;
  return {
    RequestedReservationsCancell: function (
      stayType,
      StaySubscriptionId,
      reloadTable,
      data
    ) {
      return dispatch(
        RequestedReservationsCancell(
          stayType,
          StaySubscriptionId,
          reloadTable,
          data
        )
      );
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonCancelModal);
