const ELEMENTS = {
  IDS: {
    reactContainer: "root",
    applicationDefaultScroll: "scroll-container",
    headerFilterModal: "header-filters-modal",
  },
  CLASSES: {
    headerFilterModalVisible: "show-header-filters",
  },
};

const HML = true; // True = Dev , False = Produção

// [Scale, X, Y, Rua Inicio, Posição inicio]
const cdMapNumbers = {
  RCO: [0.23, 770, 200, 1000, 1000],
  EAA: [0.85, 2070, 1500, 1000, 1000],
  COJ: [1.8, 6100, 3310, 1000, 1000],
  FPP: [0.33, 1350, 385, 1000, 1000],
};

const Constants = {
  ELEMENTS,
  HML,
  cdMapNumbers,
};

export default Constants;
