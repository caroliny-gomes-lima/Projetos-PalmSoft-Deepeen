import { Warning } from "@material-ui/icons";
import { errorModal } from "../components/modals/utils";

function setErrorModal(
  title: string,
  texts: string[],
  icon?: any,
  customLabel?: string
) {
  errorModal.setInfos(
    title,
    texts,
    {
      label: customLabel ? customLabel : "Ok",
      onClick: errorModal.close,
    },
    null,
    icon
  );
}

function alertError(msg) {
  const texts = typeof msg === "string" ? [msg] : msg;
  setErrorModal("Erro", texts, <Warning />);
}

function alertWarning(msg) {
  const texts = typeof msg === "string" ? [msg] : msg;
  setErrorModal("Aviso", texts, null);
}

function alertSuccess(msg) {
  const texts = typeof msg === "string" ? [msg] : msg;
  setErrorModal("Sucesso", texts, null);
}

const alerts = {
  alertError,
  alertWarning,
  alertSuccess,
  setErrorModal,
};

export default alerts;
