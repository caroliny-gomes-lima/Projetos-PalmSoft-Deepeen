import React from "react";
import { Block } from "@material-ui/icons";
import { ModalStyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Input, InputMultiline } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
//import { Creators } from "../reduxSagas";
//import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";

function CancelModal({
  tableData,
  isFetching,
  RequestedReservationsCancell,
  reloadTable,
}) {
  const text = Texts["pt-BR"].beHome.HistoricList.Modalcancel;

  function sendParameters(data) {
    /*RequestedReservationsCancell(
      tableData.stayType,
      tableData.id,
      reloadTable,
      data
    );*/
    handleCloseModal();
  }

  const handleOpenModal = () => {
    customModal.setInfos(
      <Block style={{ marginRight: 10, color: "black" }} />,
      text.titleCancel,
      [text.text1],
      null,
      null,
      <FormHolder onSubmit={sendParameters}>
        <Styles.HeaderContainer $defaultMargin>
          <Styles.Title>{text.residentData}</Styles.Title>
        </Styles.HeaderContainer>
        <Styles.SubTitle $defaultFonts $defaultMargin>
          {text.text2}
        </Styles.SubTitle>

        <Styles.ModalContent>
          <Grid container spacing={2} direction="row">
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
                    defaultValue={"Afonso Mathias Santos Jr"}
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
                    defaultValue={"01/04/2022 até 01/07/2022"}
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
                    defaultValue={"Hospedagem"}
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

        <Styles.FooterModal $defaultPadding>
          <Grid container justify="flex-end">
            <Styles.TextButton $defaultColor onClick={() => handleCloseModal()}>
              {text.back}
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
  };
  const handleCloseModal = () => {
    customModal.close();
  };

  return (
    <>
      <Styles.Container>
        <Styles.ButtonTableModal
          $defaultColor={3}
          onClick={() => handleOpenModal()}
          endIcon={<Block />}
        >
          {text.titleCancel}
        </Styles.ButtonTableModal>
      </Styles.Container>
    </>
  );
}

/*function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  //const { RequestedReservationsCancell } = Creators;
  return {};
}*/
export default CancelModal;
