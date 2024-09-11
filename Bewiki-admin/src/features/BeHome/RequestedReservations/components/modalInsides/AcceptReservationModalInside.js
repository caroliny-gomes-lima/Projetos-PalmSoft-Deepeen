import React from "react";
import { Grid } from "@material-ui/core";
import { FormHolder } from "../../../../../FormConfig";
import { ModalStyles } from "../../styles";
import { ContainerInputs } from "../../../../../components/inputs/inputsComponents";
import { Texts } from "../../../../../config";
import { customModal } from "../../../../modals/utils";
import { Input } from "../../../../../components";

export default function AcceptReservationModalInside({
  tableData,
  isFetching,
  RequestedReservationsAccept,
  reloadTable,
}) {
  const modalApproveTexts =
    Texts["pt-BR"].beHome.RequestedReservations.ModalApprove;

  const sendParameters = () => {
    RequestedReservationsAccept(tableData.stayType, tableData.id, reloadTable);
    customModal.close();
  };

  return (
    <FormHolder onSubmit={sendParameters}>
      <ModalStyles.HeaderContainer $defaultMargin>
        <ModalStyles.Title>{modalApproveTexts.residentData}</ModalStyles.Title>
      </ModalStyles.HeaderContainer>

      <ModalStyles.ModalContent>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ContainerInputs
              inputLabel={
                <ModalStyles.InputTitle>
                  {modalApproveTexts.inputUser}
                </ModalStyles.InputTitle>
              }
              children={
                <Input
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
                <ModalStyles.InputTitle>
                  {modalApproveTexts.inputStay}
                </ModalStyles.InputTitle>
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
                <ModalStyles.InputTitle>
                  {modalApproveTexts.inputModality}
                </ModalStyles.InputTitle>
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
      </ModalStyles.ModalContent>

      <ModalStyles.FooterModal>
        <Grid item xs={5} sm={2} md={2} lg={2}>
          <ModalStyles.TextFieldButton
            $defaultCancelButton
            fullWidth={false}
            loading={isFetching}
            disabled={isFetching}
            onClick={customModal.close}
          >
            {modalApproveTexts.back}
          </ModalStyles.TextFieldButton>
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={4}>
          <ModalStyles.TextFieldButton
            loading={isFetching}
            type="submit"
            name="button"
            disabled={isFetching}
          >
            {modalApproveTexts.confirm}
          </ModalStyles.TextFieldButton>
        </Grid>
      </ModalStyles.FooterModal>
    </FormHolder>
  );
}
