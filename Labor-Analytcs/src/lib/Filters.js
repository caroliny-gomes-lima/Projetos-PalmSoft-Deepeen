import { Texts } from "../config";
import { format, parseISO } from "date-fns";
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

// Limpa máscara numéricas, removendo tudo exceto números
function clearStringOnlyNumbers(value) {
  return String(value).replace(/\D/g, "");
}

function CPF(value) {
  return makeMask(value, "999.999.999-99", clearStringOnlyNumbers);
}

function CNPJ(value) {
  return makeMask(value, "99.999.999/9999-99", clearStringOnlyNumbers);
}

function CPFCNPJ(value) {
  if (String(value)?.length <= 14) {
    return makeMask(value, "999.999.999-99", clearStringOnlyNumbers);
  } else {
    return makeMask(value, "99.999.999/9999-99", clearStringOnlyNumbers);
  }
}

// Máscara de telefone fixo e celular com DDD
function TELWithDDD(value) {
  if (String(value)?.length <= 14) {
    return makeMask(value, "(99) 9999-9999", clearStringOnlyNumbers);
  } else {
    return makeMask(value, "(99) 9 9999-9999", clearStringOnlyNumbers);
  }
}

// Máscara apenas de celular com DDD
function inputMaskCELWithDDD(value) {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 11) {
    mask = mask.substring(0, 11);
  }
  mask = mask.replace(/(\d{2})(\d)/, "($1) $2");
  mask = mask.replace(/(\d{1})(\d{4})/, "$1 $2");
  mask = mask.replace(/(\d{4})(\d{4})$/, "$1-$2");

  return mask;
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
// Fim máscaras valores monetários

// Remove máscara de valores numéricos com decimais.
function removeNumberMask(value) {
  const stringValue = `${value}`.replace(/\D/g, "");
  if (stringValue.length === 1) {
    return parseFloat((value < 0 ? "-" : "") + `0.0${stringValue}`);
  }
  if (stringValue.length === 2) {
    return parseFloat((value < 0 ? "-" : "") + `0.${stringValue}`);
  }

  return parseFloat(stringValue.replace(/(\d+)(\d{2})$/, "$1.$2"));
}

function formatDateToIso(date) {
  if (Object.prototype.toString.call(date) === "[object Date]") {
    if (isNaN(date.getTime())) {
      // d.valueOf() could also work
      return date;
    } else {
      return date.toISOString();
      // date is valid
    }
  } else {
    return date;
  }
}

function fixDateToRequest(date, addDate = 0, addMonth = 0) {
  const currentDate = new Date();
  const parsedDate = parseISO(date);
  currentDate.setDate(currentDate.getDate() + addDate);
  currentDate.setMonth(currentDate.getMonth() + addMonth);
  const formatedDate = format(date ? parsedDate : currentDate, "yyyy-MM-dd");
  return formatedDate;
}
function fixDateToLabel(date) {
  let dArr = date.split("-");
  if (dArr.length === 2) {
    return dArr[0] + "/" + dArr[1];
  } else {
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2);
  }
}

// Inicio de funções para capitalização de textos inteligente.
function capitalizeAll(textValue) {
  return textValue
    .split(" ")
    .map((splitText) => {
      return (
        splitText.charAt(0).toUpperCase() + splitText.slice(1).toLowerCase()
      );
    })
    .join(" ");
}

function noCapitalize(word) {
  const prepos = [
    "da",
    "do",
    "das",
    "dos",
    "a",
    "e",
    "é",
    "à",
    "á",
    "o",
    "que",
    "se",
    "de",
    "para",
    "por",
  ];

  return prepos.includes(word.toLowerCase());
}

function getWordsBySeparator(text, separator) {
  return text.split(separator);
}

function capitalizeWord(word, restToLowerCase) {
  if (!noCapitalize(word)) {
    return `${word.charAt(0).toUpperCase()}${
      restToLowerCase ? word.slice(1).toLowerCase() : word.slice(1)
    }`;
  } else {
    return word.toLowerCase();
  }
}

function capitalizeText(splitedText, separators, restToLowerCase) {
  if (splitedText.length > 1) {
    return splitedText
      .map((word) => {
        return capitalizeWord(word, restToLowerCase);
      })
      .join(separators);
  } else {
    return capitalizeWord(splitedText.join(""), restToLowerCase);
  }
}

function capitalizeBySeparators(text, separators) {
  let resultText = text;
  for (let i = 0; i < separators.length; i++) {
    resultText = capitalizeText(
      getWordsBySeparator(resultText, separators[i]),
      separators[i],
      i === 0
    );
  }

  return resultText;
}
// Fim de funções para capitalização de textos inteligente.

function getStringMonth(monthValue, initials) {
  return initials
    ? Texts["pt-BR"].months[monthValue].initials
    : Texts["pt-BR"].months[monthValue].fullName;
}

function toLowerCaseFilter(value) {
  return String(value).toLocaleLowerCase();
}

const filters = {
  CPF,
  toLowerCaseFilter,
  CNPJ,
  CPFCNPJ,
  TELWithDDD,
  inputMaskCELWithDDD,
  inputMaskCEP,
  capitalizeAll,
  clearStringOnlyNumbers,
  removeNumberMask,
  convertMoneyTextMask,
  convertNumberInputMask,
  taxMask,
  capitalizeBySeparators,
  formatDateToIso,
  fixDateToRequest,
  fixDateToLabel,
  makeMask,
  getStringMonth,
};

export default filters;
