import React from "react";
import { Table, Pagination } from "../../../../components";
import { Texts } from "../../../../config";
import { Filters } from "../../../../lib";
import { ButtonEditCashBackModal, ButtonDeleteCashBackModal } from "./index";
import { Grid } from "@material-ui/core";

function CashBackTable({ data, page, setPage, loading, reload }) {
  const texts = Texts["pt-BR"].cashBack;

  return (
    <>
      {data ? (
        <>
          <Table
            sortContent={() => {}}
            id="cashBackTable"
            headers={texts}
            data={data.content}
            placeholderSize={15}
            columnSize={6}
            withGroup
            justify={2}
            defaltAlign={2}
            firstDivision={5}
            secondDivision={5}
            loading={loading}
            renderItemColumns={(item) => [
              item.name,
              Filters.fixDateToLabel(item.infoDate),
              Filters.convertMoneyTextMask(item.purchaseValue),
              "R$ " + Filters.convertNumberInputMask(item.cashbackValue),
              item.sector.verticalName,
              <>&nbsp;</>,

              <Grid container spacing={2} direction="row">
                <ButtonDeleteCashBackModal
                  tableData={item}
                  //isFetching={loading}
                  reloadTable={reload}
                />
                <ButtonEditCashBackModal
                  tableData={item}
                  //isFetching={loading}
                  reloadTable={reload}
                />
              </Grid>,
            ]}
          />

          <Pagination
            page={page}
            setPage={setPage}
            totalPages={data?.totalPages}
          />
        </>
      ) : null}
    </>
  );
}

export default CashBackTable;
