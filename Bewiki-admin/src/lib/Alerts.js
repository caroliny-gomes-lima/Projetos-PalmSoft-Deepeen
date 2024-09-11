import { customModal, errorModal } from "../features/modals/utils";
import { Texts } from "../config";

function setPopupInfo(title, texts) {
  customModal.setInfos(null, title, texts, {
    label: Texts["pt-BR"].modals.success.buttonLabel,
    onClick: customModal.close,
  });
}

function setErrorModal(title, texts) {
  errorModal.setInfos(null, title, texts, {
    label: Texts["pt-BR"].modals.errors.buttonLabel,
    onClick: errorModal.close,
  });
}

function setCustomModal(title, texts) {
  customModal.setInfos(null, title, texts, {
    label: Texts["pt-BR"].modals.success.buttonLabel,
    onClick: customModal.close,
  });
}

function setPopUpConfirm(title, texts, comfirm) {
  customModal.setInfos(null, title, texts, {
    label: Texts["pt-BR"].modals.success.buttonLabel,
    onClick: comfirm,
  });
}

function alertNotImplemented() {
  setCustomModal("Aviso", ["Não implementado"]);
}

function alertWithoutServices() {
  setCustomModal("Aviso", [
    "Serviço não existente para a realização desta operação",
  ]);
}

function alertWithoutServicesContinue() {
  setCustomModal("Aviso", [
    "Serviço não existente para esta operação, a operação irá continuar para fins de demonstração",
  ]);
}

function alertError(msg) {
  const texts = typeof msg === "string" ? [msg] : msg;
  setCustomModal("Erro", texts);
}

function alertWarning(msg) {
  const texts = typeof msg === "string" ? [msg] : msg;
  setCustomModal("Alerta", texts);
}

function alertSuccess(msg) {
  const texts = typeof msg === "string" ? [msg] : msg;
  setCustomModal("Sucesso", texts);
}

const alerts = {
  alertWithoutServices,
  alertWithoutServicesContinue,
  alertNotImplemented,
  alertError,
  alertWarning,
  alertSuccess,
  setPopupInfo,
  setPopUpConfirm,
  setErrorModal,
};

export default alerts;
