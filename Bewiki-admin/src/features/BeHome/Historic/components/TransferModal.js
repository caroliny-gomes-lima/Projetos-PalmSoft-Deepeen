import React from "react";
import { Forward } from "@material-ui/icons";
import { ModalStyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Input, Select } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
//import { Creators } from "../reduxSagas";
//import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";

function TransferModal({
  tableData,
  isFetching,
  RequestedReservationsCancell,
  reloadTable,
}) {
  const text = Texts["pt-BR"].beHome.HistoricList.ModalTransfer;

  const typeStay = [
    {
      value: 0,
      label: "Todos",
    },
    {
      value: "S",
      label: "Hospedagem",
    },
    {
      value: "L",
      label: "Moradia",
    },
  ];

  const handleOpenModal = () => {
    customModal.setInfos(
      <Forward style={{ marginRight: 10, color: "black" }} />,
      text.titleTransfer,
      [text.text1],
      null,
      null,
      <FormHolder onSubmit={sendParameters}>
        <Styles.HeaderContainer $defaultMargin>
          <Styles.Title>{text.currentData}</Styles.Title>
        </Styles.HeaderContainer>

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
                    defaultValue={"Moradia"}
                    readOnly
                  />
                }
              />
            </Grid>
          </Grid>
        </Styles.ModalContent>

        <Styles.HeaderContainer>
          <Styles.Title $defaultColor>{text.transferData}</Styles.Title>
        </Styles.HeaderContainer>
        <Styles.SubTitle $defaultFonts $defaultMargin>
          {text.text2}
        </Styles.SubTitle>

        <Styles.ModalContent>
          <Grid container spacing={1} direction="row">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{text.selectCategory}</Styles.InputTitle>
                }
                children={
                  <Select
                    small
                    name="category"
                    disableError
                    options={typeStay}
                    //onChange={setSelectedCategoryId}
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{text.idBedroom}</Styles.InputTitle>
                }
                children={
                  <Select
                    name="idBedroom"
                    small
                    disableError
                    options={typeStay}
                    //options={generateStayRoomList()}
                  />
                }
              />
            </Grid>
          </Grid>
        </Styles.ModalContent>

        <Styles.FooterModal>
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

  function sendParameters(data) {
    /*  RequestedReservationsCancell(
      tableData.stayType,
      tableData.id,
      reloadTable,
      data
    );*/
    handleCloseModal();
  }

  return (
    <>
      <Styles.Container>
        <Styles.ButtonTableModal
          $defaultColor={1}
          onClick={() => handleOpenModal()}
          endIcon={<Forward />}
        >
          {text.titleTransfer}
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
export default TransferModal;
