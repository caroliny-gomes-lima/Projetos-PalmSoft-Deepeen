import React, { useEffect, useRef } from "react";

import { Chart } from "chart.js";
import SkeletonLoader from "../others/SkeletonLoader";
export interface Props {
  isFetching?: boolean;
  chartData: any;
  height?: number | string;
  width?: number | string;
  name: string;
}
function ChartBox({ isFetching, chartData, height, width, name }: Props) {
  const chartRef = useRef<any>(null);
  const [, setChart] = React.useState<Chart>();
  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current?.destroy();
      chartRef.current = new Chart(ctx, chartData);
    }
  };
  React.useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = chartData.data;
      chartRef.current.update();
    }
  }, [isFetching, chartData, setChart]);

  return (
    <canvas
      id="teste"
      style={{
        maxWidth: width ? width : "100%",
        maxHeight: height ? height : "250px",
      }}
      ref={canvasCallback}
    ></canvas>
  );
}

export default ChartBox;
