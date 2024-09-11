import React from "react";
import Chart from "chart.js";

function OrderingGridGraph({ data }) {
  const chartRef = React.useRef();

  React.useEffect(() => {
    if (data) {
      new Chart(chartRef.current, data);
    }
  }, [data]);

  return <canvas height="4" ref={chartRef} />;
}
export default React.memo(OrderingGridGraph);
