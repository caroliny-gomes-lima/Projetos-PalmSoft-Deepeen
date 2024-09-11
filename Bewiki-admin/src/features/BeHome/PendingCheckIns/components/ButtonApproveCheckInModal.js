import React from "react";
import { Texts } from "../../../../config";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";
import { customModal } from "../../../modals/utils";
import TableApproveButton from "../../components/buttons/TableApproveButton";
import ApproveCheckInModalInside from "./modalInsides/ApproveCheckInModalInside";

function ButtonApproveCheckInModal({ pendingCheckInData, reloadTable }) {
  const texts = Texts["pt-BR"].beHome.PendingCheckIns.modalApproveCheckIn;
  const userName = `${pendingCheckInData.guest.firstName} ${pendingCheckInData.guest.lastName}`;

  const handleOpenModal = () => {
    customModal.setInfos(
      null,
      texts.title,
      [texts.description],
      null,
      null,
      <ApproveCheckInModalInside
        userName={userName}
        pendingCheckInData={pendingCheckInData}
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
  const { ApproveCheckInRequest } = Creators;
  return {
    ApproveCheckInRequest: function (checkInId, setCheckInCancelled) {
      return dispatch(ApproveCheckInRequest(checkInId, setCheckInCancelled));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonApproveCheckInModal);
