import { Texts } from "../config";
// Conversor Default

function formatCheckValue(value) {
  if (value === undefined || value === null) {
    throw new Error("first parameter (value) is required.");
  }
}

function formatCheckFormatter(format) {
  if (!format) {
    throw new Error(
      "second parameter (format) is required to specify how the string should return. Date example: 9999[-]99[-]99."
    );
  }
}

function formatCheckClearCallback(clearCallback) {
  if (clearCallback && typeof clearCallback !== "function") {
    throw new Error(
      "third parameter (clearCallback) is required to clear the string before mask treatment."
    );
  }
}

function formatCheckPrefix(prefix) {
  if (typeof prefix !== "string") {
    throw new Error(
      "fourth parameter (prefix) need to be a 'string' type, but it was passed " +
        typeof prefix
    );
  }
}

function formatCheckSufix(sufix) {
  if (typeof sufix !== "string") {
    throw new Error(
      "fifth parameter (sufix) need to be a 'string' type, but it was passed " +
        typeof sufix
    );
  }
}

function fixDateToLabel(date) {
  if (date === "") {
    return "Data não cadastrada";
  }

  let newDate = new Date(date);
  if (date) {
    return (
      newDate.getDate() +
      "/" +
      parseInt(newDate.getMonth() + 1) +
      "/" +
      newDate.getFullYear()
    );
  }

  let dArr = date.split("-");
  if (dArr.length === 2) {
    return dArr[0] + "/" + dArr[1];
  } else {
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2);
  }
}
function FixPhoneData(value) {
  if (value === "") {
    return "Data não cadastrada";
  }
  if (value.length > 11) {
    value = value.substring(0, 11);
  }
  if (value.length === 11) {
    value = value.replace(/(\d{2})(\d{2})(\d{5})/, "($2) $3");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  }

  return value;
}

function formatCheck(value, format, clearCallback, prefix, sufix) {
  return (
    formatCheckValue(value) ||
    formatCheckFormatter(format) ||
    formatCheckClearCallback(clearCallback) ||
    formatCheckPrefix(prefix) ||
    formatCheckSufix(sufix)
  );
}

const formatCharCodesRange = {
  A: [65, 90, 192, 197, 199, 207, 209, 214, 217, 221, 159, 159],
  a: [97, 122, 224, 229, 231, 239, 241, 246, 249, 253, 255, 255],
  9: [48, 57],
};

function makeMask(
  value = "",
  format = "",
  clearCallback,
  prefix = "",
  sufix = ""
) {
  if (formatCheck(value, format, clearCallback, prefix, sufix)) {
    return value;
  }
  let clearedValue = value;
  if (prefix) {
    clearedValue = clearedValue.replace(prefix, "");
  }
  if (sufix) {
    clearedValue = clearedValue.replace(sufix, "");
  }

  if (clearCallback) {
    clearedValue = String(clearCallback(clearedValue));
  }

  let mask = "";
  const maxFormatIndex = format.length;
  if (clearedValue.length > maxFormatIndex) {
    clearedValue = clearedValue.substring(0, maxFormatIndex);
  }
  let formatIndex = maxFormatIndex - 1;
  let maxMaskIndex = clearedValue.length - 1;
  for (; formatIndex >= 0; formatIndex--) {
    const range = formatCharCodesRange[format[formatIndex]];
    if (range) {
      const charCode = clearedValue.charCodeAt(maxMaskIndex);
      const iMax = range.length;
      let i = 0;
      for (; i < iMax; i++) {
        if (charCode >= range[i] && charCode <= range[i + 1]) {
          mask = clearedValue[maxMaskIndex] + mask;
          break;
        }
        i++;
      }
      maxMaskIndex--;
      if (maxMaskIndex < 0) {
        break;
      }
    } else {
      mask = format[formatIndex] + mask;
    }
  }
  if (mask.length > maxFormatIndex) {
    mask = mask.substring(0, maxFormatIndex);
  }

  return prefix + mask + sufix;
}

// Máscara de porcentagem
function taxMask(value) {
  if (value) {
    const stringOnlyNumbers = `${Number(value).toFixed(1)}`.replace(/\D/g, "");
    if (!stringOnlyNumbers) {
      return "0,0%";
    }

    const { length } = stringOnlyNumbers;
    if (length === 1) {
      return value >= 0
        ? `0,${stringOnlyNumbers}%`
        : `-0,${stringOnlyNumbers}%`;
    }
    let taxMask = "";

    for (let i = length - 1; i >= 0; i -= 1) {
      if (i === length - 1) {
        taxMask = `,${stringOnlyNumbers[i]}${taxMask}`;
      } else if (i < length - 5 && (i - length - 3) % 3 === 0) {
        taxMask = `${stringOnlyNumbers[i]}.${taxMask}`;
      } else {
        taxMask = `${stringOnlyNumbers[i]}${taxMask}`;
      }
    }

    return value >= 0 ? `${taxMask}%` : `-${taxMask}%`;
  }
  return "0,0%";
}

// Máscara de valores monetários (apenas textos estáticos)
function convertMoneyTextMask(value) {
  if (value) {
    const stringOnlyNumbers = `${Number(value).toFixed(2)}`.replace(/\D/g, "");
    if (!stringOnlyNumbers) {
      return "R$ 0,00";
    }

    const { length } = stringOnlyNumbers;
    if (length === 1) {
      return value >= 0
        ? `R$ 0,0${stringOnlyNumbers}`
        : `R$ -0,0${stringOnlyNumbers}`;
    }
    if (length === 2) {
      return value >= 0
        ? `R$ 0,${stringOnlyNumbers}`
        : `R$ -0,${stringOnlyNumbers}`;
    }
    let moneyMask = "";

    for (let i = length - 1; i >= 0; i -= 1) {
      if (i === length - 2) {
        moneyMask = `,${stringOnlyNumbers[i]}${moneyMask}`;
      } else if (i < length - 5 && (i - length - 3) % 3 === 0) {
        moneyMask = `${stringOnlyNumbers[i]}.${moneyMask}`;
      } else {
        moneyMask = `${stringOnlyNumbers[i]}${moneyMask}`;
      }
    }

    return value >= 0 ? `R$ ${moneyMask}` : `R$ -${moneyMask}`;
  }
  return "R$ 0,00";
}

// Máscara de valores monetários (apenas inputs)
function formatSmallNumberValues(value, isMoney, floatNumber) {
  const mask = String(
    Number(value.replaceAll(".", "").replaceAll("R$ ", "").replaceAll(",", ""))
  );

  if (!mask) {
    return isMoney ? "R$ 0,00" : floatNumber ? "0,00" : "0";
  }
  if (mask.length === 1) {
    return isMoney ? "R$ 0,0" + mask : floatNumber ? `0,0${mask}` : mask;
  } else if (mask.length === 2) {
    return isMoney ? "R$ 0," + mask : floatNumber ? `0,${mask}` : mask;
  } else {
    return mask;
  }
}

function convertNumberInputMask(value, isMoney, floatNumber = true) {
  if (value) {
    let mask = `${value}`.replace(/\D/g, "");
    if (!mask) {
      return isMoney ? "R$ 0,00" : floatNumber ? "0,00" : "0";
    }
    mask = formatSmallNumberValues(mask, isMoney, floatNumber);

    if (isMoney && mask.includes("R$ ")) {
      return mask;
    }
    const contador = floatNumber ? (value.length - 5) / 3 : value.length / 3;

    if (floatNumber) {
      mask = mask.replace(/^([.\d]+)(\d{2})$/, "$1,$2");
    }
    for (let i = 0; i < contador; i += 1) {
      mask = mask.replace(/(\d+)(\d{3})([.,\d]+)?$/, "$1.$2$3");
    }
    mask = isMoney ? `R$ ${mask}` : mask;
    return mask;
  }

  return isMoney ? "R$ 0,00" : floatNumber ? "0,00" : "0";
}

function cpfMask(value) {
  if (!value) {
    return null;
  }
  let newValue = clearStringOnlyNumbers(value);
  if (newValue.length > 11) {
    newValue = newValue.substring(0, 11);
  }
  newValue = newValue.replace(/(\d{3})(\d{3})(\d)/, "$1.$2.$3");
  newValue = newValue.replace(/(\d)(\d{2})$/, "$1-$2");

  return newValue;
}

// Fim de funções para capitalização de textos inteligente.

function getStringMonth(monthValue, initials) {
  return initials
    ? Texts["pt-BR"].months[monthValue].initials
    : Texts["pt-BR"].months[monthValue].fullName;
}

function clearStringOnlyNumbers(value) {
  return value ? `${value}`.replace(/\D/g, "") : value;
}

// Máscara de CEP
function inputMaskCEP(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 8) {
    mask = mask.substring(0, 8);
  }
  if (mask.length === 8) {
    mask = mask.replace(/(\d{5})(\d{3})$/, "$1-$2");
  }
  return mask;
}

function inputMaskPhone(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 14) {
    mask = mask.substring(0, 14);
  }
  if (mask.length === 14) {
    mask = mask.replace(/(\d{2})(\d{3})(\d{5})/, "+$1-($2)-$3");
    mask = mask.replace(/(\d)(\d{4})$/, "$1-$2");
  }
  return mask;
}

const filters = {
  convertMoneyTextMask,
  convertNumberInputMask,
  taxMask,
  makeMask,
  getStringMonth,
  fixDateToLabel,
  FixPhoneData,
  cpfMask,
  clearStringOnlyNumbers,
  inputMaskCEP,
  inputMaskPhone,
};

export default filters;
