import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Constants, Themes } from "./config";
import { CoreNavigation } from "./navigation";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "./store";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "./components";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.plugins.unregister(ChartDataLabels);

Chart.pluginService.register({
  beforeDraw: function (chart, easing) {
    if (
      chart.config.options.chartArea &&
      chart.config.options.chartArea.backgroundColor
    ) {
      const ctx = chart.chart.ctx;
      const chartArea = chart.chartArea;

      ctx.save();
      ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
      ctx.fillRect(
        chartArea.left,
        chartArea.top,
        chartArea.right - chartArea.left,
        chartArea.bottom - chartArea.top
      );
      ctx.restore();
    }
  },
});

const { store } = configureStore();
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={Themes.Light}>
          <CssBaseline />
          <CoreNavigation />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

(async (_) => {
  ReactDOM.render(
    <App />,
    document.getElementById(Constants.ELEMENTS.IDS.reactContainer)
  );
})();
