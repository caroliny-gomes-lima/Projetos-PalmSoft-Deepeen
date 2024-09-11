import { ArrowRightAltRounded } from "@material-ui/icons";
import DropdownActionSelect from "../../../../components/buttons/DropdownActionSelect";
import { customModal } from "../../../modals/utils";
import TransferReservationModalInside from "./modalInsides/TransferReservationModalInside";
import { Texts } from "../../../../config";

export default function TableActionDropdown({ tableData, reloadTable }) {
  const modalTransferTexts =
    Texts["pt-BR"].beHome.RequestedReservations.ModalTransferReserve;

  const openAcceptReservationModal = () => {
    customModal.setInfos(
      <ArrowRightAltRounded />,
      modalTransferTexts.titleTransfer,
      [modalTransferTexts.text1],
      null,
      null,
      <TransferReservationModalInside
        tableData={tableData}
        reloadTable={reloadTable}
      />
    );
  };

  return (
    <DropdownActionSelect
      options={[
        {
          name: modalTransferTexts.titleTransfer,
          icon: () => <ArrowRightAltRounded />,
          action: openAcceptReservationModal,
        },
      ]}
    />
  );
}
