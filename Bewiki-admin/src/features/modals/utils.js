// Configuração de modais customizados - Modais que podem ser customizados e chamados de outras telas
let customModalCallback = null;
function setCustomModalCallback(callback) {
  customModalCallback = callback;
}
function setCustomModalInfos(
  icon,
  title,
  texts = [],
  confirmButton,
  exitButton,
  extraField
) {
  customModalCallback({
    open: true,
    infos: { icon, title, texts, exitButton, confirmButton, extraField },
  });
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
let errorModalCallback = null;
function setErrorModalCallback(callback) {
  errorModalCallback = callback;
}
function setErrorModalInfos(title, texts = [], confirmButton, exitButton) {
  errorModalCallback({
    open: true,
    infos: { title, texts, exitButton, confirmButton },
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

// Configuração de modais de informação;
/*let usabilityInfoModalCallback = null;
function setUsabilityInfoModalCallback(callback) { //usabilityInfoModal
  usabilityInfoModalCallback = callback;
}
function setUsabilityInfoModal(title, texts = [], confirmButton, exitButton) { //usabilityInfoModal
  usabilityInfoModalCallback({
    open: true,
    infos: { title, texts, exitButton, confirmButton },
  });
}
function closeUsabilityInfoModal() { //usabilityInfoModal
  usabilityInfoModalCallback({
    open: false,
    infos: {},
  });
}
const usabilityInfoModal = { //usabilityInfoModal
  setCallback: setUsabilityInfoModalCallback,
  setInfos: setUsabilityInfoModal,
  close: closeUsabilityInfoModal,
};*/

export { customModal, errorModal };
