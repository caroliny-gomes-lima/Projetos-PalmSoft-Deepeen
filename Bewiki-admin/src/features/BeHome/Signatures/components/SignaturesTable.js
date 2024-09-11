import React from "react";
import { Table, Pagination } from "../../../../components";
import { Texts } from "../../../../config";
import { Filters } from "../../../../lib";
import { HistoricButtonModal, ButtonCancelModal } from "./index";
import { Grid } from "@material-ui/core";

function SignaturesTable({
  dataSubscriptions,
  loading,
  page,
  setPage,
  reload,
}) {
  const texts = Texts["pt-BR"].beHome.Signatures;

  function displayDate(checkIn, checkOut) {
    return `${Filters.fixDateToLabel(checkIn)} ${
      texts.until
    } ${Filters.fixDateToLabel(checkOut)}`;
  }

  return (
    <>
      {dataSubscriptions ? (
        <>
          <Table
            sortContent={() => {}}
            id="SignatureTable"
            headers={texts}
            data={dataSubscriptions.content}
            placeholderSize={50}
            columnSize={6}
            withGroup
            defaltAlign
            firstDivision={3}
            secondDivision={3}
            justify={1}
            loading={loading}
            renderItemColumns={(item) => [
              item.behomeStay,
              item.name,
              displayDate(item.checkIn, item.checkOut),
              <>&nbsp;</>,
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <ButtonCancelModal tableData={item} reloadTable={reload} />
              </Grid>,
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <HistoricButtonModal tableData={item} reloadTable={reload} />
              </Grid>,
            ]}
          />

          <Pagination
            page={page}
            setPage={setPage}
            totalPages={dataSubscriptions.totalPages}
          />
        </>
      ) : null}
    </>
  );
}

export default SignaturesTable;
