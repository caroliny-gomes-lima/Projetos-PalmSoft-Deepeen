import React from "react";
import { ModalStyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Input } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
//import { Creators } from "../reduxSagas";
//import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";
import { Filters } from "../../../../lib";

function ReturnReservationModal({
  tableData,
  isFetching,
  RequestedReservationsCancell,
  reloadTable,
}) {
  const text = Texts["pt-BR"].beHome.HistoricList.ReturnModal;

  function sendParameters(data) {
    /*  RequestedReservationsCancell(
      tableData.stayType,
      tableData.id,
      reloadTable,
      data
    );*/
    customModal.close();
  }

  return (
    <FormHolder onSubmit={sendParameters}>
      <Styles.HeaderContainer $defaultMargin>
        <Styles.Title $defaultColor>{text.reserveData}</Styles.Title>
      </Styles.HeaderContainer>

      <Styles.ModalContent>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} md={6} lg={6}>
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
                  defaultValue={"Afonso Mathias Santos Jr"}
                  readOnly
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{text.inputValue}</Styles.InputTitle>
              }
              children={
                <Input
                  name="stay"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={Filters.convertMoneyTextMask("2345")}
                  readOnly
                />
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{text.inputStayDate}</Styles.InputTitle>
              }
              children={
                <Input
                  name="stay"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={"01/04/2022 até 01/07/2022"}
                  readOnly
                />
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{text.inputDateCancel}</Styles.InputTitle>
              }
              children={
                <Input
                  name="stay"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={"05/06/2022"}
                  readOnly
                />
              }
            />
          </Grid>
        </Grid>
      </Styles.ModalContent>

      <Styles.HeaderContainer>
        <Styles.Title $defaultColor>{text.StudioData}</Styles.Title>
      </Styles.HeaderContainer>

      <Styles.ModalContent>
        <Grid container spacing={1} direction="row">
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
                  defaultValue={"Hospedagem"}
                  readOnly
                />
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{text.inputStudio}</Styles.InputTitle>
              }
              children={
                <Input
                  name="stay"
                  small
                  marginDefault
                  defaultBorder
                  defaultValue={"B-401"}
                  readOnly
                />
              }
            />
          </Grid>
        </Grid>
      </Styles.ModalContent>

      <Styles.FooterModal>
        <Grid container justify="flex-end">
          <Styles.TextButton $defaultColor onClick={() => customModal.close()}>
            {text.cancel}
          </Styles.TextButton>
          <Styles.TextButton
            type="submit"
            name="button"
            loading={isFetching}
            disabled={isFetching}
          >
            {text.confirm}
          </Styles.TextButton>
        </Grid>
      </Styles.FooterModal>
    </FormHolder>
  );
}

/*function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  //const { RequestedReservationsCancell } = Creators;
  return {};
}*/
export default ReturnReservationModal;
