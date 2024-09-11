import React from "react";
import { Table } from "../../../../components";
import { Texts } from "../../../../config";
import { AccountBox } from "@material-ui/icons";
import TransferModal from "./TransferModal";
import CancelModal from "./CancelModal";
import ReturnReservationModal from "./ReturnReservationModal";
import HistoricCheckinModal from "./HistoricCheckinModal";
import GuestRecordModal from "./GuestRecordModal";
import { customModal } from "../../../modals/utils";
import { Payments, PendingActions } from "@mui/icons-material";
import DropdownActionSelect from "../../../../components/buttons/DropdownActionSelect";
import Styles from "../styles/ModalStyles";

function HistoricTabel({ isFetching, list, sort, HistoricReleaseData }) {
  const texts = Texts["pt-BR"].beHome.HistoricList;

  const returnReservationText = Texts["pt-BR"].beHome.HistoricList.ReturnModal;
  const HistoricCheckinText =
    Texts["pt-BR"].beHome.HistoricList.HistoricCheckinModal;
  const GuestRecordText = Texts["pt-BR"].beHome.HistoricList.guestRecordModal;

  const handleReturnReservationModal = (userData) => {
    customModal.setInfos(
      <Payments style={{ marginRight: 10, color: "black" }} />,
      <Styles.Title>{returnReservationText.title}</Styles.Title>,
      [returnReservationText.text1],
      null,
      null,
      <ReturnReservationModal
      //InfoCancellationRequest={InfoCancellationRequest}
      //userData={userData}
      //InfoCancellationData={InfoCancellationData}
      />
    );
  };

  const handleHistoricCheckinModal = (userData) => {
    customModal.setInfos(
      <PendingActions style={{ marginRight: 10, color: "black" }} />,
      <Styles.Title>{HistoricCheckinText.title}</Styles.Title>,
      null,
      null,
      null,
      <HistoricCheckinModal
      //InfoCancellationRequest={InfoCancellationRequest}
      //userData={userData}
      //InfoCancellationData={InfoCancellationData}
      />
    );
  };

  const handleGuestRecordModal = (userData) => {
    customModal.setInfos(
      <AccountBox style={{ marginRight: 10, color: "black" }} />,
      <Styles.Title>{GuestRecordText.title}</Styles.Title>,
      null,
      null,
      null,
      <GuestRecordModal
      //InfoCancellationRequest={InfoCancellationRequest}
      //userData={userData}
      //InfoCancellationData={InfoCancellationData}
      />
    );
  };

  const ptBr = {
    months: [
      {
        name: "Afonso Mathias Santos Jr",
        checkIn: "01/04/2022",
        checkOut: "01/07/2022",
        modality: "Hospedagem",
        statusCheckIn: "Aprovado",
      },
      {
        name: "André Mattos",
        checkIn: "01/04/2022",
        checkOut: "01/07/2022",
        modality: "Moradia",
        statusCheckIn: "Aguardando",
      },
      {
        name: "Daniel Guimarães",
        checkIn: "01/04/2022",
        checkOut: "01/07/2022",
        modality: "Moradia",
        statusCheckIn: "Cancelado",
      },
      {
        name: "Afonso Mathias Santos Jr",
        checkIn: "01/04/2022",
        checkOut: "01/07/2022",
        modality: "Hospedagem",
        statusCheckIn: "Aprovado",
      },
      {
        name: "André Mattos",
        checkIn: "01/04/2022",
        checkOut: "01/07/2022",
        modality: "Moradia",
        statusCheckIn: "Aguardando",
      },
      {
        name: "Daniel Guimarães",
        checkIn: "01/04/2022",
        checkOut: "01/07/2022",
        modality: "Moradia",
        statusCheckIn: "Cancelado",
      },
    ],
  };
  //const [r, setR] = React.useState(false);
  //const listSec = React.useRef(null);
  //const data = ptBr.months;

  /*const sortContent = (key, list) => {
    let keylist = Object.keys(list[0]);
    let keyName = keylist[key];
    function compare(a, b) {
      if (r) {
        if (a[keyName] < b[keyName]) {
          return -1;
        }
        if (a[keyName] > b[keyName]) {
          return 1;
        }
        return 0;
      } else {
        if (a[keyName] > b[keyName]) {
          return -1;
        }
        if (a[keyName] < b[keyName]) {
          return 1;
        }
        return 0;
      }
    }

    listSec.current = list.sort(compare);
    setR(!r);
  };

  function convertData() {
    listSec.current = data.map((item) => {
      return {
        initials: item.initials,
        fullName: item.fullName,
      };
    });
  }
  if (data) {
    convertData();
  }*/

  return (
    <>
      <Table
        sortContent={() => {}}
        id="historicTable"
        headers={texts}
        data={ptBr.months}
        totalPage={50}
        withGroup
        firstDivision={5}
        secondDivision={5}
        loading={isFetching}
        renderItemColumns={(item) => [
          item.name,
          item.checkIn + "á" + item.checkOut,
          item.modality,
          item.statusCheckIn,

          <DropdownActionSelect
            options={[
              {
                action: () => handleReturnReservationModal(item),
                icon: () => <Payments />,
                name: returnReservationText.title,
              },
              {
                action: () => handleHistoricCheckinModal(item),
                icon: () => <PendingActions />,
                name: HistoricCheckinText.title,
              },
              {
                action: () => handleGuestRecordModal(item),
                icon: () => <AccountBox />,
                name: GuestRecordText.buttomName,
              },
            ]}
          />,
          <CancelModal />,
          <TransferModal />,
          /*<CanceledModal />,*/
        ]}
      />
    </>
  );
}

export default HistoricTabel;
