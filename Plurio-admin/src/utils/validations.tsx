import {
  isAfter as isAfterFns,
  isBefore as isBeforeFns,
  set as setFns,
  format as fnsFormat,
} from "date-fns";
import masks from "./masks";
import { parse } from "date-fns";

function validateCPF(cpf: string) {
  // ONLY FOR ADMIN USER
  if (cpf === "000.000.000-00" || cpf === "00000000000") {
    return null;
  }
  if (!cpf) {
    return "Insira um número de CPF";
  }
  let clearCpf = "";
  let errorMessage = "O CPF digitado não está no formato válido";
  if (cpf) {
    clearCpf = masks.removeNumberMask(cpf);
  } else {
    return "Insira um número de CPF";
  }
  let sum = 0;
  let rest;
  if (
    clearCpf.length !== 11 ||
    clearCpf === "00000000000" ||
    clearCpf === "11111111111" ||
    clearCpf === "22222222222" ||
    clearCpf === "33333333333" ||
    clearCpf === "44444444444" ||
    clearCpf === "55555555555" ||
    clearCpf === "66666666666" ||
    clearCpf === "77777777777" ||
    clearCpf === "88888888888" ||
    clearCpf === "99999999999"
  ) {
    return errorMessage;
  }
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(clearCpf.substring(i - 1, i), 10) * (11 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(clearCpf.substring(9, 10), 10)) {
    return errorMessage;
  }
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(clearCpf.substring(i - 1, i), 10) * (12 - i);
  }
  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) {
    rest = 0;
  }
  if (rest !== parseInt(clearCpf.substring(10, 11), 10)) {
    return errorMessage;
  }
  return null;
}

const validateCNPJ = (cnpj: string) => {
  let clearCnpj = "";
  let errorMessage = "O CNPJ digitado não está no formato válido";
  if (cnpj) {
    clearCnpj = cnpj.replace(/[^\d]/g, "");
  } else {
    return "Insira um número de CNPJ";
  }

  if (clearCnpj === "") {
    return "Insira um número de CNPJ";
  }

  if (clearCnpj.length !== 14) {
    return errorMessage;
  }

  if (
    clearCnpj === "00000000000000" ||
    clearCnpj === "11111111111111" ||
    clearCnpj === "22222222222222" ||
    clearCnpj === "33333333333333" ||
    clearCnpj === "44444444444444" ||
    clearCnpj === "55555555555555" ||
    clearCnpj === "66666666666666" ||
    clearCnpj === "77777777777777" ||
    clearCnpj === "88888888888888" ||
    clearCnpj === "99999999999999"
  ) {
    return errorMessage;
  }

  let size = clearCnpj.length - 2;
  let numbers = clearCnpj.substring(0, size);
  const digits = clearCnpj.substring(size);

  let sum = 0;
  let position = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i), 10) * position--;
    if (position < 2) {
      position = 9;
    }
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0), 10)) {
    return errorMessage;
  }

  size += 1;
  numbers = clearCnpj.substring(0, size);
  sum = 0;
  position = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i), 10) * position--;
    if (position < 2) {
      position = 9;
    }
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1), 10)) {
    return errorMessage;
  }

  return null;
};

// function validateCEI(cei) {
//   //Retira qualquer tipo de mascara e deixa apenas números.

//   if (!cei) {
//     return false;
//   }

//   let coefficients = "74185216374";
//   let sum = 0;

//   //Faz um for para multiplicar os números do CEI digitado pelos números do peso.
//   //E somar o total de cada número multiplicado.
//   for (let i = 1; i < 12; i++) {
//     let factor = coefficients.substring(i - 1, i);
//     let value = cei.substring(i - 1, i);
//     sum += factor * value;
//   }
//   //Pega o length do resultado da soma e desconta 2 para pegar somente a dezena.
//   let len = sum.toString().length - 2;

//   //pega a dezena
//   let dezena = sum.toString().substring(len);

//   //pega o algarismo da dezena
//   let algdezena = dezena.toString().substring(0, 1);

//   //pega o algarismo da unidade
//   let unidade = parseInt(sum) - parseInt(sum / 10) * 10;

//   //soma o algarismo da dezena com o algarismo da unidade.
//   sum = parseInt(algdezena) + unidade;

//   //pega o dígito (último número) do cei digitado.
//   let digitoCEI = cei.substring(11);
//   let digitoEncontrado = 10 - sum;

//   if (digitoCEI !== digitoEncontrado) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function validatePIS(inss) {
//   let total = 0;
//   let resto = 0;
//   let numInss = inss;
//   const coefficients = "3298765432";

//   if (!numInss) {
//     return false;
//   }

//   for (let i = 0; i <= 9; i++) {
//     const resultado = numInss.slice(i, i + 1) * coefficients.slice(i, i + 1);
//     total = total + resultado;
//   }

//   resto = total % 11;

//   if (resto !== 0) {
//     resto = 11 - resto;
//   }

//   if (resto === 10 || resto === 11) {
//     const strResto = resto + "";
//     resto = strResto.slice(1, 2);
//   }
//   if (resto !== Number(numInss.slice(10, 11))) {
//     return false;
//   }

//   return true;
// }

function isEmailValid(email: string) {
  const isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  return isValid
    ? null
    : "O campo não deve ser vazio e deve conter um e-mail válido.";
}
function compareDates(
  selectedDate?: any,
  testDate?: any,
  isAfter?: any,
  messageFormat?: any
) {
  const testFunction = isAfter ? isAfterFns : isBeforeFns;
  const secDate = setFns(selectedDate, {
    hours: 0,
    minutes: 0,
    milliseconds: 0,
    seconds: 0,
  });
  const tstDate = setFns(testDate, {
    hours: 0,
    minutes: 0,
    milliseconds: 0,
    seconds: 0,
  });

  if (testFunction(secDate, tstDate)) {
    return `A data não pode ser ${isAfter ? "posterior" : "inferior"
      } a ${fnsFormat(testDate, messageFormat)}`;
  } else {
    return null;
  }
}
function isDATE(
  date?: any,
  minDate?: any,
  maxDate?: any,
  messageFormat = "dd/MM/yyyy"
) {
  if (!date) {
    return "Insira uma data";
  } else if (date.getTime) {
    if (isNaN(date.getTime())) {
      return "Insira uma data válida";
    }
  } else {
    return "Insira uma data válida";
  }

  if (minDate) {
    const errorMessage = compareDates(date, minDate, false, messageFormat);
    if (errorMessage) {
      return errorMessage;
    }
  }
  if (maxDate) {
    const errorMessage = compareDates(date, maxDate, true, messageFormat);
    if (errorMessage) {
      return errorMessage;
    }
  }
  return null;
}

function checkPhone(cellphone: any) {
  let errorMessage = "O campo deve ser preenchido com DDD e número.";
  if (!cellphone) {
    return errorMessage;
  }
  const number = masks.removeNumberMask(cellphone);
  const isCellphoneValid = number.length === 10 || number.length === 11;
  const ddd = Number(number.substring(0, 2));
  const idDDDValid = ddd > 10 && ddd < 100;

  if (!idDDDValid) {
    errorMessage = "Deve ser informado um DDD válido (entre 11 e 99).";
  }
  return isCellphoneValid && idDDDValid ? null : errorMessage;
}

function isValidFullname(fullname: any) {
  const isFullnameValid =
    Boolean(fullname) &&
    fullname
      .trim()
      .match(/^[A-zÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-zÀ-Ÿ][A-zÀ-ÿ']+$/);

  return isFullnameValid
    ? null
    : "O campo deve conter um nome completo valido. Com nome, sobrenome e não pode conter números.";
}

function isValidCEP(cep: any) {
  let errorMessage = "O CEP informado não é valido";
  if (!cep) {
    return "Insira um número de CEP";
  }
  const withoutMask = masks.removeNumberMask(cep);
  if (withoutMask) {
    if (withoutMask.length === 8) {
      return null;
    }
  }
  return errorMessage;
}

function validNumber(number: any) {
  return number && Number(masks.removeNumberMask(number)) !== 0
    ? null
    : "Valor inserido não é válido";
}

function errorTreatment(
  fieldName: any,
  ffHandler: any,
  name: any,
  callback: any
) {
  ffHandler.setCustomError(
    name,
    `Não foi possível validar o ${fieldName} informado. Verifique sua conexão com a internet`
  );
  callback(false);
}

function validateAsyncCall(
  data: any,
  apiFunction: any,
  fieldName: any,
  ffHandler: any,
  name: any,
  onFinishCallback: any,
  messageFunc: any
) {
  apiFunction(data)
    .then((res: any) => {
      if (res.ok) {
        if (res.data) {
          ffHandler.setCustomError(name, "");
          ffHandler.setCustomValid(name, true);
          onFinishCallback(true);
        } else {
          ffHandler.setCustomError(name, messageFunc(fieldName));
          onFinishCallback(false);
        }
      } else {
        errorTreatment(fieldName, ffHandler, name, onFinishCallback);
      }
    })
    .catch((e: any) => {
      errorTreatment(fieldName, ffHandler, name, onFinishCallback);
    });
}

function isPassword(value: any) {
  const isValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#%=&!])[A-Za-z\d@#%=&!]{6,}$/.test(
      value
    );
  return isValid
    ? null
    : "Senha deve conter: " +
    "\n•No mínimo 6 (seis) caracteres;" +
    "\n•Composta por números;" +
    "\n•Letras (maiúsculas e minúsculas);" +
    "\n•Símbolos especiais (@, #, %, =, &, !).";
}

export function validateThirdDocumentNumber(thirdDocumentNumber: any) {
  return (
    thirdDocumentNumber
      .replace("_", "")
      .replace(".", "")
      .replace(".", "")
      .replace("-", "").length === 11
  );
}

export function validateThirdEmail(thirdEmail: any) {
  return isEmailValid(thirdEmail) ? false : true;
}

export function validateThirdFullName(thirdFullName: any) {
  return isValidFullname(thirdFullName) ? false : true;
}

export function validateThirdBirthday(thirdBirthday: any) {
  return isDATE(
    parse(thirdBirthday, "dd/MM/yyyy", new Date()),
    new Date("01/01/1900")
  )
    ? false
    : true;
}

export function validateThirdPhoneNumber(thirdPhoneNumber: any) {
  return checkPhone(thirdPhoneNumber) ? false : true;
}

export function validateThirdCEP(thirdCEP: any) {
  return isValidCEP(thirdCEP) ? false : true;
}

function validateEmailAndCPF(value: any) {
  if (/^\d+$/.test(value.replace("-", "").replace(".", "").replace(".", ""))) {
    return validateCPF(value);
  } else {
    return isEmailValid(value);
  }
}

function validateCNPJandCPF(value: any) {
  const isCpfValid = validateCPF(value) !== "CPF inválido";
  const isCnpjValid = validateCNPJ(value) !== "CNPJ inválido";

  return isCpfValid || isCnpjValid ? null : "CPF ou CNPJ inválido";
}

function validadeRange(value: any, minV: any, maxV: any) {
  let min = minV;
  let max = maxV;

  if (typeof min === "string") {
    min = parseFloat(min?.replaceAll(".", "").replaceAll(",", "."));
  }
  if (typeof max === "string") {
    max = parseFloat(max?.replaceAll(".", "").replaceAll(",", "."));
  }

  let compare = parseFloat(value.replaceAll(".", "").replace(",", "."));

  if (compare < min + 0.01) {
    return `Valor deve ser maior que: ${min}`;
  } else if (compare > max) {
    return `Valor deve ser menor que: ${max}`;
  } else {
    return null;
  }
}
function validadeRangeInt(value: any, minV: any, maxV: any) {
  let min = parseInt(minV);
  let max = parseInt(maxV);
  let testValue = parseInt(value);

  if (testValue < min + 1) {
    return `Valor deve ser maior que: ${min}`;
  } else if (testValue > max - 1) {
    return `Valor deve ser menor que: ${max}`;
  } else {
    return null;
  }
}

const inputDate = (data: any, maxDate: any, minDate: any) => {
  if (isNaN(Date.parse(data))) {
    return "Insira uma Data Valida";
  } else {
    if (data > maxDate) {
      return `Insira uma Data anterior a ${new Date(maxDate).toLocaleDateString(
        "pt-BR"
      )}`;
    } else if (data < minDate) {
      return `Insira uma Data posterior a ${new Date(
        minDate
      ).toLocaleDateString("pt-BR")}`;
    }
    return null;
  }
};

function validateTimeRange(value: string) {
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

  if (!timeRegex.test(value)) {
    return "Formato de horário inválido. Use HH:MM.";
  }

  const [hours, minutes] = value.split(":").map(Number);

  if (hours < 0 || hours > 23) {
    return "As horas devem estar entre 00 e 23.";
  }

  if (minutes < 0 || minutes > 59) {
    return "Os minutos devem estar entre 00 e 59.";
  }

  return null;
}


const validations = {
  validateCPF,
  validateCNPJ,
  isEmailValid,

  isDATE,
  checkPhone,
  isValidFullname,
  isValidCEP,
  validNumber,
  validateAsyncCall,

  validateThirdDocumentNumber,
  validateThirdEmail,
  validateThirdFullName,
  validateThirdBirthday,
  validateThirdPhoneNumber,
  validateThirdCEP,
  isPassword,
  validateEmailAndCPF,
  validateCNPJandCPF,
  validadeRange,
  validadeRangeInt,

  inputDate,
  validateTimeRange
};

export default validations;
