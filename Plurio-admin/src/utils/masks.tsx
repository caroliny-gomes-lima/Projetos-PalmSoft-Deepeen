function removeNumberMask(string?: any) {
  return String(string).replace(/\D/g, "");
}

// Máscara de CPF
function CPF(value?: any) {
  if (!value) {
    return value;
  }
  let mask = removeNumberMask(value);

  if (mask.length > 11) {
    mask = mask.substring(0, 11);
  }

  if (mask.length <= 11) {
    mask = mask.replace(/(\d{3})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  return mask;
}

function CNPJ(value?: any) {
  let mask = removeNumberMask(value);

  if (mask.length > 14) {
    mask = mask.substring(0, 14);
  }
  if (mask.length <= 14) {
    mask = mask.replace(/(\d{2})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d)/, "$1/$2");
    mask = mask.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }
  return mask;
}

function CPFCNPJ(value?: any) {
  if (!value) {
    return value;
  }
  let mask = removeNumberMask(value);

  if (mask.length > 14) {
    mask = mask.substring(0, 14);
  } else if (mask.length <= 11) {
    mask = mask.substring(0, 11);
  }

  if (mask.length <= 11) {
    mask = mask.replace(/(\d{3})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else if (mask.length <= 14) {
    mask = mask.replace(/(\d{2})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d)/, "$1.$2");
    mask = mask.replace(/(\d{3})(\d)/, "$1/$2");
    mask = mask.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }
  return mask;
}

// Máscara de telefone fixo e celular com DDD
function inputMaskTELWithDDD(value?: any) {
  if (!value) {
    return value;
  }
  let mask = removeNumberMask(value);

  if (mask.length > 11) {
    mask = mask.substring(0, 11);
  }

  if (mask.length <= 10) {
    mask = mask.replace(/(\d{2})(\d)/, "($1) $2");
    mask = mask.replace(/(\d)(\d{4})$/, "$1-$2");
  } else {
    mask = mask.replace(/(\d{2})(\d)/, "($1) $2");
    mask = mask.replace(/(\d{1})(\d{4})/, "$1 $2");
    mask = mask.replace(/(\d{4})(\d{4})$/, "$1-$2");
  }

  return mask;
}

function inputMoney(input?: any, minV = 0, maxV = 9999999999999) {
  const value = numericMask(input, true, true);
  return value;
}

function formatSmallNumberValues(value?: any, isMoney?: any, floatNumber?: any, negative?: any) {
  const mask = String(
    Number(String(value).replace(/\./g, "").replace("R$ ", "").replace(",", ""))
  );

  if (!mask) {
    return isMoney
      ? `R$ ${negative}0,00`
      : floatNumber
        ? `${negative}0,00`
        : `${negative}0`;
  }
  if (mask.length === 1) {
    return isMoney
      ? `R$ ${negative}0,0` + mask
      : floatNumber
        ? `${negative}0,0${mask}`
        : negative + mask;
  } else if (mask.length === 2) {
    return isMoney
      ? `R$ ${negative}0,` + mask
      : floatNumber
        ? `${negative}0,${mask}`
        : negative + mask;
  } else {
    return mask;
  }
}

function numericMask(value?: any, isMoney?: any, floatNumber = true) {
  const negative = value < 0 ? "-" : "";
  if (value) {
    let mask = `${value}`.replace(/\D/g, "");
    if (!mask) {
      return isMoney
        ? `${negative}0,00`
        : floatNumber
          ? negative + "0,00"
          : negative + "0";
    }
    mask = formatSmallNumberValues(mask, isMoney, floatNumber, negative);

    if (isMoney && mask.includes("R$ ")) {
      return mask.replace("R$ ", "");
    }
    const contador = floatNumber ? (value.length - 5) / 3 : value.length / 3;

    if (floatNumber) {
      mask = mask.replace(/^([.\d]+)(\d{2})$/, "$1,$2");
    }
    for (let i = 0; i < contador; i += 1) {
      mask = mask.replace(/(\d+)(\d{3})([.,\d]+)?$/, "$1.$2$3");
    }
    mask = isMoney ? `${negative}${mask}` : negative + mask;
    return mask;
  }

  return isMoney
    ? `${negative}0,00`
    : floatNumber
      ? negative + "0,00"
      : negative + "0";
}
// Fim máscaras valores monetários

// Remove máscara de valores numéricos com decimais.
function removeNumericMask(value?: any) {
  const stringValue = `${value}`.replace(/\D/g, "");
  if (stringValue.length === 1) {
    return parseFloat((value < 0 ? "-" : "") + `0.0${stringValue}`);
  }
  if (stringValue.length === 2) {
    return parseFloat((value < 0 ? "-" : "") + `0.${stringValue}`);
  }

  return parseFloat(stringValue.replace(/(\d+)(\d{2})$/, "$1.$2"));
}

// Máscara de valores monetários
function money(value?: any) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Máscara de valores em porcentagem
function tax(value?: any) {
  // return `%${Number(value).toFixed(2)}`;
  return `${Number(value).toFixed(2).replace(".", ",")}%`;
}

// Inicio de funções para capitalização de textos inteligente.
function capitalizeAll(textValue?: any) {
  return textValue
    .split(" ")
    .map((splitText?: any) => {
      return (
        splitText.charAt(0).toUpperCase() + splitText.slice(1).toLowerCase()
      );
    })
    .join(" ");
}

function noCapitalize(word?: any) {
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

function getWordsBySeparator(text?: any, separator?: any) {
  return text.split(separator);
}

function capitalizeWord(word?: any, restToLowerCase?: any) {
  if (!noCapitalize(word)) {
    return `${word.charAt(0).toUpperCase()}${restToLowerCase ? word.slice(1).toLowerCase() : word.slice(1)
      }`;
  } else {
    return word.toLowerCase();
  }
}

function capitalizeText(splitedText?: any, separators?: any, restToLowerCase?: any) {
  if (splitedText.length > 1) {
    return splitedText
      .map((word?: any) => {
        return capitalizeWord(word, restToLowerCase);
      })
      .join(separators);
  } else {
    return capitalizeWord(splitedText.join(""), restToLowerCase);
  }
}

function capitalizeBySeparators(text?: any, separators?: any) {
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

function cnpjToRequest(value?: any) {
  if (!value) {
    return value;
  }
  const phone = removeNumberMask(value);
  let a;
  phone.length >= 15 ? (a = phone.substring(0, phone.length - 1)) : (a = phone);
  return a;
}

function cpfToRequest(value?: any) {
  if (!value) {
    return value;
  }
  const phone = removeNumberMask(value);
  let a;
  phone.length >= 8 ? (a = phone.substring(0, phone.length - 1)) : (a = phone);
  return a;
}

function cpfCnpjToRequest(value?: any) {
  if (!value) {
    return value;
  }
  const phone = removeNumberMask(value);
  let a;
  phone.length >= 11
    ? (a = phone.substring(0, phone.length))
    : phone.length >= 18
      ? (a = phone.substring(0, phone.length))
      : (a = phone);
  return a;
}
function formatInputDate(input?: any) {
  if (!input) {
    return input;
  }

  let mask = input.replace(/[^\d.-/]/g, "");

  if (mask.match(/^\d{2}$/) !== null) {
    return mask + "/";
  } else if (mask.match(/^\d{2}\/\d{2}$/) !== null) {
    return mask + "/";
  } else {
    return mask;
  }
}
function formatDate(input?: any) {
  var datePart = input.match(/\d+/g),
    year = datePart[0],
    month = datePart[1],
    day = datePart[2];

  return day + "/" + month + "/" + year;
}

function onlyNumbers(input?: any, min?: any, max?: any) {
  const number = numericMask(input, false, false);
  if (parseInt(number) < min) {
    return min;
  } else if (parseInt(number) > max) {
    return max;
  } else {
    return number;
  }
}

function formatHour(value?: any) {
  if (!value) {
    return value;
  }

  let mask = value.replace(/\D/g, "");

  if (mask.length > 4) {
    mask = mask.substring(0, 4);
  }

  if (mask.length > 2) {
    mask = mask.replace(/(\d{2})(\d)/, "$1:$2");
  }

  return mask;
}


const masks = {
  CPF,
  CNPJ,
  CPFCNPJ,
  inputMoney,
  money,
  removeNumericMask,
  tax,
  capitalizeBySeparators,
  capitalizeAll,
  removeNumberMask,
  inputMaskTELWithDDD,
  cnpjToRequest,
  cpfToRequest,
  cpfCnpjToRequest,
  formatInputDate,
  formatDate,
  onlyNumbers,
  formatHour,

};

export default masks;
