import React from "react";
import { Texts } from "../../../../config";
import { customModal } from "../../../modals/utils";
import CancelCheckInModalInside from "./modalInsides/CancelCheckInModalInside";
import TableCancelButton from "../../components/buttons/TableCancelButton";

export default function ButtonCancelCheckInModal({
  pendingCheckInData,
  reloadTable,
}) {
  const texts = Texts["pt-BR"].beHome.PendingCheckIns.modalCancelCheckIn;

  const handleOpenModal = () => {
    customModal.setInfos(
      null,
      texts.title,
      [texts.description],
      null,
      null,
      <CancelCheckInModalInside
        pendingCheckInData={pendingCheckInData}
        reloadTable={reloadTable}
      />
    );
  };
  return <TableCancelButton onClick={handleOpenModal} />;
}
