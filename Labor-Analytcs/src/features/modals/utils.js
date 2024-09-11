// Configuração de modais customizados - Modais que podem ser customizados e chamados de outras telas
let customModalCallback = null;
function setCustomModalCallback(callback) {
  customModalCallback = callback;
}
function setCustomModalInfos(title, texts = [], confirmButton, exitButton) {
  customModalCallback({
    open: true,
    infos: { title, texts, exitButton, confirmButton },
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

// Configuração de chamada do Modal de registro e conteudo dentro;

export { customModal, errorModal };
