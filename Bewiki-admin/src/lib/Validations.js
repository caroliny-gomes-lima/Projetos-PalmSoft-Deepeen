import {
  isAfter as isAfterFns,
  isBefore as isBeforeFns,
  set as setFns,
  format as fnsFormat,
} from "date-fns";

function compareDates(selectedDate, testDate, isAfter, withDay) {
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
    return {
      isValid: false,
      errorMessage: `A data não pode ser ${
        isAfter ? "posterior" : "inferior"
      } a ${
        withDay
          ? fnsFormat(testDate, "dd/MM/yyyy")
          : fnsFormat(testDate, "MM/yyyy")
      }`,
    };
  } else {
    return { isValid: true };
  }
}

const isDATE = (date, minDate, maxDate) => {
  if (!date) {
    return { isValid: false, errorMessage: "Insira uma data" };
  } else if (isNaN(date.getTime())) {
    return { isValid: false, errorMessage: "Insira uma data válida" };
  }

  if (minDate) {
    const { isValid, errorMessage } = compareDates(date, minDate, false, true);
    if (!isValid) {
      return { isValid, errorMessage };
    }
  }

  if (maxDate) {
    const { isValid, errorMessage } = compareDates(date, maxDate, true, true);
    if (!isValid) {
      return { isValid, errorMessage };
    }
  }
  return { isValid: true, errorMessage: " " };
};

const isEMAIL = (email) => {
  let errorMessage = "E-mail inválido";
  if (!email) {
    return { isValid: false, errorMessage: "Insira um email" };
  }
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return { isValid: true, errorMessage };
  }
  return { isValid: false, errorMessage };
};

function hasSpecialCharacters(password) {
  return /\W|_/g.test(password) ? 1 : 0;
}

function hasUppercase(password) {
  return /[A-ZÇ]/g.test(password) ? 1 : 0;
}

function hasNumber(password) {
  return /\d/g.test(password) ? 1 : 0;
}

function hasLowercase(password) {
  return /[a-zç]/g.test(password) ? 1 : 0;
}

function validPassword(password) {
  if (password.length < 8) {
    return {
      isValid: false,
      errorMessage: "Senha deve ter no Mínimo 8 caracteres",
    };
  }

  const { length } = password;
  for (let i = 0; i < length - 3; i++) {
    const testedChar = password.charCodeAt(i);
    if (
      testedChar === password.charCodeAt(i + 1) - 1 &&
      testedChar === password.charCodeAt(i + 2) - 2 &&
      testedChar === password.charCodeAt(i + 3) - 3
    ) {
      return {
        isValid: false,
        errorMessage:
          "Senha não pode conter sequências de 4 caracteres ou mais. ex: 1234/abcd",
      };
    } else if (
      testedChar === password.charCodeAt(i + 1) + 1 &&
      testedChar === password.charCodeAt(i + 2) + 2 &&
      testedChar === password.charCodeAt(i + 3) + 3
    ) {
      return {
        isValid: false,
        errorMessage:
          "Senha não pode conter sequências de 4 caracteres ou mais. ex: 4321/dcba",
      };
    }
  }

  if (
    hasSpecialCharacters(password) +
      hasLowercase(password) +
      hasNumber(password) +
      hasUppercase(password) <
    3
  ) {
    return {
      isValid: false,
      errorMessage:
        "Senha inválida. A senha deve conter pelo menos 3 das regras a seguir: Letras maiúsculas, minúsculas, números e caracteres especiais",
    };
  }

  return { isValid: true, errorMessage: "Senha válida" };
}

const validations = {
  isEMAIL,
  validPassword,
  isDATE,
};

export default validations;
