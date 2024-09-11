import React from "react";
import { Forum } from "@material-ui/icons";
import { ModalStyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Colors, Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Input, InputMultiline } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
//import { Creators } from "../reduxSagas";
//import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";

function CanceledModal({
  tableData,
  isFetching,
  RequestedReservationsCancell,
  reloadTable,
}) {
  const text = Texts["pt-BR"].beHome.HistoricList.CanceledModal;

  const handleOpenModal = () => {
    customModal.setInfos(
      <Forum style={{ marginRight: 10, color: "black" }} />,
      text.title,
      null,
      null,
      null,
      <FormHolder onSubmit={sendParameters}>
        <Styles.ModalContent>
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={12} md={12} lg={6}>
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
                  <Styles.InputTitle>{text.inputDate}</Styles.InputTitle>
                }
                children={
                  <Input
                    name="stay"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={"25/02/2023 - 15:54"}
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
          <Styles.TextButton $defaultColor onClick={() => handleCloseModal()}>
            {text.back}
          </Styles.TextButton>
        </Styles.FooterModal>
      </FormHolder>
    );
  };
  const handleCloseModal = () => {
    customModal.close();
  };

  function sendParameters(data) {
    /*RequestedReservationsCancell(
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
          $defaultColor={2}
          $defaultFontColor
          $defaultBorder
          onClick={() => handleOpenModal()}
          endIcon={<Forum style={{ color: Colors.red }} />}
        >
          {text.buttonName}
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
export default CanceledModal;
