import React from "react";
import { Table, Pagination } from "../../../../components";
import { Texts } from "../../../../config";
import LogoModal from "./LogoModal";
import Styles from "../styles/Styles";
import { Filters } from "../../../../lib";

function RestaurantsListTable({ dataTable, loading, page, setPage }) {
  const texts = Texts["pt-BR"].beMarket.RestaurantLists;

  return (
    <>
      {dataTable ? (
        <>
          <Table
            sortContent={() => {}}
            id="restaurantsListTable"
            headers={texts}
            data={dataTable.content}
            placeholderSize={15}
            columnSize={6}
            withGroup
            firstDivision={6}
            secondDivision={6}
            loading={loading}
            renderItemColumns={(item) => [
              item.name,
              item.corporateName,
              Filters.FixPhoneData(item.contactPhones),
              item.address,
              Filters.fixDateToLabel(item.createdAt),
              "",
              <>&nbsp;</>,
              <LogoModal dataTable={item} />,
            ]}
          />
          <Styles.FooterPagination>
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={dataTable.totalPages}
            />
          </Styles.FooterPagination>
        </>
      ) : null}
    </>
  );
}

export default RestaurantsListTable;
