import { AccountBox, ArrowRightAltRounded } from "@material-ui/icons";
import DropdownActionSelect from "../../../../components/buttons/DropdownActionSelect";
import { customModal } from "../../../modals/utils";
import { Texts } from "../../../../config";
import TransferCheckInModalInside from "./modalInsides/TransferCheckInModalInside";
import GuestSheetModalInside from "./modalInsides/GuestSheetModalInside";

export default function TableActionDropdown({
  pendingCheckInData,
  reloadTable,
}) {
  const modalTransferTexts =
    Texts["pt-BR"].beHome.PendingCheckIns.modalTransferCheckIn;

  const modalGuestSheetTexts =
    Texts["pt-BR"].beHome.PendingCheckIns.modalCustomerDetails;

  const openTransferCheckInModal = () => {
    customModal.setInfos(
      <ArrowRightAltRounded />,
      modalTransferTexts.title,
      [modalTransferTexts.description],
      null,
      null,
      <TransferCheckInModalInside
        reloadTable={reloadTable}
        pendingCheckInData={pendingCheckInData}
      />
    );
  };

  const openGuestSheetModal = () => {
    customModal.setInfos(
      <AccountBox />,
      modalGuestSheetTexts.title,
      [modalTransferTexts.description],
      null,
      null,
      <GuestSheetModalInside pendingCheckInData={pendingCheckInData} />
    );
  };

  console.log("PENDING CHECK IN DATA", pendingCheckInData);

  return (
    <DropdownActionSelect
      options={[
        {
          name: modalTransferTexts.title,
          icon: () => <ArrowRightAltRounded />,
          action: openTransferCheckInModal,
        },
        pendingCheckInData.checkIn === null ||
        pendingCheckInData.checkIn === undefined
          ? null
          : {
              name: modalGuestSheetTexts.title,
              icon: () => <AccountBox />,
              action: openGuestSheetModal,
            },
      ]}
    />
  );
}
