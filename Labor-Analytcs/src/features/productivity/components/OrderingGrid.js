import React from "react";
import Style from "../styles/OrderingGridStyle";
import OrderingGridGraph from "./OrderingGridGraph";
import { Texts } from "../../../config";
import { Table } from "../../../components";

// const arrows = {
//   "-1": <Style.ArrowDown />,
//   0: <Style.Circle />,
//   1: <Style.ArrowUp />,
// };

function OrderingGrid({ data, loading }) {
  const texts = Texts["pt-BR"].charts.productivityOrdering.table;
  return (
    <Table
      id="productivityTable"
      headers={texts}
      data={data}
      placeholderSize={14}
      columnSize={14}
      loading={loading}
      withGroup
      renderItemColumns={(item) => [
        item.name,
        item.registrationId,
        item.process,
        <>
          <Style.GraphContainer>
            <OrderingGridGraph data={item.chartData} />
          </Style.GraphContainer>
          {item.productivityTax}
        </>,
        item.currentRank.replaceAll("=", "").replaceAll('"', ""),
        item.lastMonthRank,
        "",
        item.separationdisplacement,
        item.separationLinesPerOt,
        item.separationWeightPerOt,
        "",
        item.checkoutEquipments,
        item.checkoutLinesPerOt,
        item.checkoutWeightPerOt,
      ]}
    />
  );
}
export default OrderingGrid;
