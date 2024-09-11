import React from "react";
import { ModalStyles as Styles } from "../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { Select } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
//import { Creators } from "../reduxSagas";
//import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";

function GuestRecordModal({
  tableData,
  isFetching,
  RequestedReservationsCancell,
  reloadTable,
}) {
  const text = Texts["pt-BR"].beHome.HistoricList.guestRecordModal;

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
      <Styles.ModalContent>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{text.selectGuest}</Styles.InputTitle>
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
        </Grid>
      </Styles.ModalContent>

      <Styles.FooterModal>
        <Styles.TextButton $defaultColor onClick={() => customModal.close()}>
          {text.back}
        </Styles.TextButton>
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
export default GuestRecordModal;
