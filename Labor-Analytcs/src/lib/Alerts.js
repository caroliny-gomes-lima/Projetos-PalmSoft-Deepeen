import { customModal, errorModal } from "../features/modals/utils";
import { Texts } from "../config";

function setErrorModal(title, texts) {
  errorModal.setInfos(title, texts, {
    label: Texts["pt-BR"].modals.errors.buttonLabel,
    onClick: errorModal.close,
  });
}

function setCustomModal(title, texts) {
  customModal.setInfos(title, texts, {
    label: Texts["pt-BR"].modals.success.buttonLabel,
    onClick: customModal.close,
  });
}

function setSetUpModal(title, texts, setPeriodModalApply) {
  customModal.setInfos(
    title,
    texts,
    {
      label: Texts["pt-BR"].setup.ModalDefault.apply,
      onClick: setPeriodModalApply,
    },
    {
      label: Texts["pt-BR"].setup.ModalDefault.cancel,
      onClick: customModal.close,
    }
  );
}

function setSetupDeleteModal(title, texts, deletePeriod) {
  customModal.setInfos(
    title,
    texts,
    {
      label: Texts["pt-BR"].setup.DeleteModalPeriod.deleteModalConfirn,
      onClick: deletePeriod,
    },
    {
      label: Texts["pt-BR"].setup.DeleteModalPeriod.deleteModalCancel,
      onClick: customModal.close,
    }
  );
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
  setErrorModal("Erro", texts);
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
  setCustomModal,
  setSetUpModal,
  setSetupDeleteModal,
};

export default alerts;
