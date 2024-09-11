import React from "react";
import OrderingGridGraph from "./OrderingGridGraph";
import { Texts } from "../../../config";
import { Table, TableBarChart } from "../../../components";

function OrderingGrid({ data }) {
  const texts = Texts["pt-BR"].charts.idleOrdering.table;

  return (
    <Table
      headers={texts}
      data={data}
      placeholderSize={15}
      columnSize={4}
      renderItemColumns={(item) => [
        item.name,
        item.registrationId,
        item.process,
        <TableBarChart label={item.utilizationTax}>
          <OrderingGridGraph data={item.chartData} />
        </TableBarChart>,
      ]}
    />
  );
}
export default OrderingGrid;
