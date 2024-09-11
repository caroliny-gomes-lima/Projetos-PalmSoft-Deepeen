import React from "react";
import { Table, Pagination } from "../../../../components";
import { Texts } from "../../../../config";
import { ButtonApproveModal, ButtonCancelModal } from "./index";
import TableActionDropdown from "./TableActionDropdown";
function ReservationsTabel({
  reservationsData,
  loading,
  page,
  setPage,
  reload,
}) {
  const texts = Texts["pt-BR"].beHome.RequestedReservations;
  const { StayTypes } = Texts["pt-BR"].beHome;
  return (
    <>
      {reservationsData ? (
        <>
          <Table
            sortContent={() => {}}
            id="historicTable"
            headers={texts}
            data={reservationsData.content}
            placeholderSize={15}
            columnSize={6}
            withGroup
            firstDivision={5}
            secondDivision={5}
            loading={loading}
            renderItemColumns={(item) => [
              item.name,
              item.checkIn,
              StayTypes[item.stayType],
              item.behomeStay,
              item.externalId,
              <TableActionDropdown tableData={item} reloadTable={reload} />,
              <ButtonCancelModal tableData={item} reloadTable={reload} />,
              <ButtonApproveModal tableData={item} reloadTable={reload} />,
            ]}
          />

          <Pagination
            page={page}
            setPage={setPage}
            totalPages={reservationsData.totalPages}
          />
        </>
      ) : null}
    </>
  );
}

export default ReservationsTabel;
