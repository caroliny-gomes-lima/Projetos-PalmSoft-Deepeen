import { errorModal } from "../components/modals/utils";

function setErrorModal(title: string, texts: string[], icon: any) {
  errorModal.setInfos(title, texts, {
    label: "Ok",
    onClick: errorModal.close,
  });
}

function alertError(msg: string) {
  const texts = typeof msg === "string" ? [msg] : msg;
  setErrorModal("Erro", texts, "error");
}

function alertWarning(msg: string) {
  const texts = typeof msg === "string" ? [msg] : msg;
  setErrorModal("Aviso", texts, "warning");
}

function alertSuccess(msg: string) {
  const texts = typeof msg === "string" ? [msg] : msg;
  setErrorModal("Sucesso", texts, "success");
}

const alerts = {
  alertError,
  alertWarning,
  alertSuccess,
};

export default alerts;
