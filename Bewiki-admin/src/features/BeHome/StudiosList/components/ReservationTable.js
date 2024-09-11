import React from "react";
import { Table } from "../../../../components";
import { Texts } from "../../../../config";
import Styles from "../styles/StyledDetails";

function ReservationTable() {
  const texts = Texts["pt-BR"].beHome.StudioDetailsList;

  const TestData = {
    months: [
      {
        name: "Afonso Mathias Santos Jr",
        checkIn: "01/04/2022 - 11:00",
        checkOut: "01/07/2022 - 11:00",
      },
      {
        name: "André Mattos",
        checkIn: "01/04/2022 - 11:00",
        checkOut: "01/07/2022 - 11:00",
      },
    ],
  };
  
  return (
    <>
      <Table
        sortContent={() => {}}
        id="reservationTable"
        headers={texts}
        data={TestData.months}
        totalPage={50}
        withGroup
        firstDivision={5}
        secondDivision={5}
        // loading={isFetching}
        renderItemColumns={(item) => [
          item.name,
          item.checkIn,
          item.checkOut,
          <>&nbsp;</>,
          <div style={{display: "flex", flexDirection: "row"}}>
            <Styles.TableButton $cancel>
              Cancelar
              <Styles.CancelIcon />
            </Styles.TableButton>
            <Styles.TableButton>
              Transferir
              <Styles.TransferIcon />
            </Styles.TableButton>
          </div>
        ]}
      />
    </>
  );
}

export default ReservationTable;
