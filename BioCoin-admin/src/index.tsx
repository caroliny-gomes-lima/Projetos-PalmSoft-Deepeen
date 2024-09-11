import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StorageProvider from "./contexts/StorageContext";
import { CssBaseline } from "@material-ui/core";
import { Modal, ModalError } from "./components/modals";
import { ThemeProvider } from "./components";
import { Theme } from "./config";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Fragment>
    <StorageProvider>
      <ModalError />
      <Modal />
      <CssBaseline />
      <ThemeProvider theme={Theme.Light}>
        <App />
      </ThemeProvider>
    </StorageProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
