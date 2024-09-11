import React from "react";
import { Texts } from "../../../../config";
import { Creators } from "../reduxSagas";
import { connect } from "react-redux";
import { customModal } from "../../../modals/utils";
import AcceptReservationModalInside from "./modalInsides/AcceptReservationModalInside";
import TableApproveButton from "../../components/buttons/TableApproveButton";

function ButtonApproveModal({
  tableData,
  isFetching,
  RequestedReservationsAccept,
  reloadTable,
}) {
  const text = Texts["pt-BR"].beHome.RequestedReservations.ModalApprove;

  const handleOpenModal = () => {
    customModal.setInfos(
      null,
      text.title,
      [text.text1],
      null,
      null,
      <AcceptReservationModalInside
        tableData={tableData}
        isFetching={isFetching}
        RequestedReservationsAccept={RequestedReservationsAccept}
        reloadTable={reloadTable}
      />
    );
  };

  return <TableApproveButton onClick={handleOpenModal} />;
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  const { RequestedReservationsAccept } = Creators;
  return {
    RequestedReservationsAccept: function (
      stayType,
      StaySubscriptionId,
      reloadTable
    ) {
      return dispatch(
        RequestedReservationsAccept(stayType, StaySubscriptionId, reloadTable)
      );
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonApproveModal);
