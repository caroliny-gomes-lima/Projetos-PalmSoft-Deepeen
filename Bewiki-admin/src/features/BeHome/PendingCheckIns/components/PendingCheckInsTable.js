import React from "react";
import { Table, Pagination } from "../../../../components";
import { Texts } from "../../../../config";
import displayDatePeriodText from "../../../../services/helpers/displayDatePeriodText";
import ButtonApproveCheckInModal from "./ButtonApproveCheckInModal";
import ButtonCancelCheckInModal from "./ButtonCancelCheckInModal";
import TableActionDropdown from "./TableActionDropdown";
function PendingCheckInsTable({
  pendingCheckInsData,
  loading,
  page,
  setPage,
  reload,
}) {
  const texts = Texts["pt-BR"].beHome.PendingCheckIns;
  const stayTypeTexts = Texts["pt-BR"].beHome.StayTypes;

  return (
    <>
      {pendingCheckInsData ? (
        <>
          <Table
            sortContent={() => {}}
            id="historicTable"
            headers={texts}
            data={pendingCheckInsData.content}
            placeholderSize={10}
            columnSize={5}
            withGroup
            firstDivision={5}
            secondDivision={5}
            loading={loading}
            renderItemColumns={(item) => [
              `${item.guest.firstName} ${item.guest.lastName}`,
              displayDatePeriodText(
                item.stay.dateCheckIn,
                item.stay.dateCheckOut
              ),
              stayTypeTexts[item.stay.type],
              item.stay.name,
              item.stay.externalId,
              <TableActionDropdown
                pendingCheckInData={item}
                reloadTable={reload}
              />,
              <ButtonCancelCheckInModal
                pendingCheckInData={item}
                reloadTable={reload}
              />,
              <ButtonApproveCheckInModal
                pendingCheckInData={item}
                reloadTable={reload}
                isFetching={loading}
              />,
            ]}
          />
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={pendingCheckInsData.totalPages}
          />
        </>
      ) : null}
    </>
  );
}

export default PendingCheckInsTable;
