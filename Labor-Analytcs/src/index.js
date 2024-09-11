import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { getCLS, getFID, getLCP } from "web-vitals";

import { Constants, Themes } from "./config";
import { CoreNavigation } from "./navigation";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "./store";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "./components";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import GA4React from "ga-4-react";
// { useGA4React }
// TODO/HINT
/*
 * Por padrão a lib deixa visível todos os valores dos gráficos
 * unregister para remover este padrão
 */
Chart.plugins.unregister(ChartDataLabels);

const ga4react = new GA4React("G-RVBRNT39PB");

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
  //const ga = useGA4React();

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
// TODO/HINT StrictMode removido por questões de incompatibilidade com o Material-UI
(async (_) => {
  if (Constants.HML === true) {
    ReactDOM.render(
      <App />,
      document.getElementById(Constants.ELEMENTS.IDS.reactContainer)
    );
  } else {
    await ga4react
      .initialize()
      .then((res) => console.log("Analytics Success."))
      .catch((err) => console.log("Analytics Failure."))
      .finally(() => {
        ReactDOM.render(
          <App />,
          document.getElementById(Constants.ELEMENTS.IDS.reactContainer)
        );
      });
  }
})();

// TODO/HINT
/*
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
function sendToGoogleAnalytics({ name, delta, value, id }) {
  ga4react.gtag("event", name, {
    // Built-in params:
    value: delta, // Use `delta` so the value can be summed.
    // Custom params:
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_delta: delta, // Optional.

    // OPTIONAL: any additional params or debug info here.
    // See: https://web.dev/debug-web-vitals-in-the-field/
    // metric_rating: 'good' | 'ni' | 'poor',
    // debug_info: '...',
    // ...
  });
}

if (!Constants.HML) {
  getCLS(sendToGoogleAnalytics);
  getFID(sendToGoogleAnalytics);
  getLCP(sendToGoogleAnalytics);
}
