import React from "react";
import { Texts } from "../../../../config";
import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";
import DeleteBalanceCashback from "./modalInside/DeleteBalanceCashback";
import { ModalStyles as Styles } from "../styles";
import { Block } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { Creators } from "../reduxSagas";

function ButtonDeleteCashBackModal({ tableData, DeleteCashback, reloadTable }) {
  const text = Texts["pt-BR"].cashBack.DeletebalanceCashbackModal;

  const handleOpenModal = () => {
    customModal.setInfos(
      null,
      text.Title,
      [text.subTitleText],
      null,
      null,

      <DeleteBalanceCashback
        tableData={tableData}
        DeleteCashback={DeleteCashback}
        reloadTable={reloadTable}
        //isFetching={isFetching}
      />
    );
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={6}>
      <Styles.ButtonTableModal
        $defaultColor
        endIcon={<Block />}
        onClick={handleOpenModal}
      >
        {text.buttonModalName}
      </Styles.ButtonTableModal>
    </Grid>
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  const { DeleteCashback } = Creators;
  return {
    DeleteCashback: function (UserId, cashBackValue, reloadTable) {
      return dispatch(DeleteCashback(UserId, cashBackValue, reloadTable));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonDeleteCashBackModal);
