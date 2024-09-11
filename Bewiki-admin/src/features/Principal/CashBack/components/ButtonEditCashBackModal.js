import React from "react";
import { Texts } from "../../../../config";
import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";
import EditbalanceCashback from "./modalInside/EditbalanceCashback";
import { ModalStyles as Styles } from "../styles";
import { Edit } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { Creators } from "../reduxSagas";

function ButtonEditCashBackModal({ tableData, AddCashback, reloadTable }) {
  const text = Texts["pt-BR"].cashBack.EditbalanceCashbackModal;

  const handleOpenModal = () => {
    customModal.setInfos(
      null,
      text.Title,
      null,
      null,
      null,

      <EditbalanceCashback
        tableData={tableData}
        //isFetching={isFetching}
        AddCashback={AddCashback}
        reloadTable={reloadTable}
      />
    );
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={6}>
      <Styles.ButtonTableModal endIcon={<Edit />} onClick={handleOpenModal}>
        {text.buttonModalName}
      </Styles.ButtonTableModal>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  const { AddCashback } = Creators;
  return {
    AddCashback: function (UserId, cashBackValue, reloadTable) {
      return dispatch(AddCashback(UserId, cashBackValue, reloadTable));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonEditCashBackModal);
