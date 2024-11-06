// Configuração de modais customizados - Modais que podem ser customizados e chamados de outras telas
let customModalCallback = (data: any) => { };
function setCustomModalCallback(callback: any) {
  customModalCallback = callback;
}
function setCustomModalInfos(
  title: string,
  texts: string[] = [],
  confirmButton?: { onClick: () => void; label: string } | null,
  exitButton?: { onClick: () => void; label: string } | null,
  extraField?: JSX.Element | null,
  noExit?: boolean | null,
  noMaxWidth?: boolean | null
) {
  if (customModalCallback) {
    customModalCallback({
      open: true,
      infos: {
        title,
        texts,
        exitButton,
        confirmButton,
        extraField,
        noExit,
        noMaxWidth,
      },
    });
  }
}
function closeCustomModal() {
  customModalCallback({
    open: false,
    infos: {},
  });
}
const customModal = {
  setCallback: setCustomModalCallback,
  setInfos: setCustomModalInfos,
  close: closeCustomModal,
};

// Configuração de modais de erro - Modais de erro padrão;
let errorModalCallback = (data: any) => { };
function setErrorModalCallback(callback) {
  errorModalCallback = callback;
}
function setErrorModalInfos(
  title: string,
  text: string[],
  confirmButton: { onClick: () => void; label: string } | null,
  exitButton: { onClick: () => void; label: string } | null,
  icon: any | null
) {
  errorModalCallback({
    open: true,
    infos: { title, text, exitButton, confirmButton, icon },
  });
}
function closeErrorModal() {
  errorModalCallback({
    open: false,
    infos: {},
  });
}
const errorModal = {
  setCallback: setErrorModalCallback,
  setInfos: setErrorModalInfos,
  close: closeErrorModal,
};

export { customModal, errorModal };
