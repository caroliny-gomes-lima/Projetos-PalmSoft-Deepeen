export default class FormHandler {
  onSubmit = null; // TODO/HINT expect a function
  clearOnSubmit = false; // TODO/HINT expect a boolean
  submitOnClear = false; // TODO/HINT expect a boolean

  constructor(onSubmit, clearOnSubmit, submitOnClear) {
    this.onSubmit = onSubmit;
    this.clearOnSubmit = clearOnSubmit;
    this.submitOnClear = submitOnClear;
  }

  formInputs = {};
  inputNames = [];

  buttons = {};
  buttonNames = [];

  errorsMessages = [];

  setInput = ({ name, value, maskToSubmit, ...rest }) => {
    this.inputNames.push(name);
    this.formInputs[name] = {
      value,
      maskToSubmit,
      ...rest,
    };
    return null;
  };

  setButton = ({ name, disableHandler }) => {
    this.buttonNames.push(name);
    this.buttons[name] = {
      disableHandler,
    };
  };

  getBaseName = (name) => {
    const split = name.split(".");
    return split[split.length - 1];
  };

  removeInput = (name) => {
    if (this.formInputs[name]) {
      delete this.formInputs[name];
      var removeElement = function (nums, val) {
        for (var i = nums.length - 1; i >= 0; i--) {
          if (nums[i] === val) {
            nums.splice(i, 1);
          }
        }
        return nums.length;
      };

      removeElement(this.inputNames, name);
    }
    return null;
  };

  removeButton = (name) => {
    if (this.buttons[name]) {
      delete this.buttons[name];
      const nameIndex = this.buttonNames.indexOf(name);
      this.buttonNames.splice(nameIndex, 1);
    }
    return null;
  };

  updateInput = (name, rest = {}) => {
    this.formInputs[name] = { ...this.formInputs[name], ...rest };
    return null;
  };

  getInputRef = (name) => {
    if (this.formInputs[name].ref) {
      return this.formInputs[name].ref;
    }
    return null;
  };

  setValue = (name, value) => {
    if (this.formInputs[name]) {
      this.formInputs[name].handleValue(value);
    }
  };

  setFormValue = (name, value) => {
    const { type } = this.formInputs[name];
    if ((type === "file" || undefined) && value) {
      let reader = new FileReader();
      reader.readAsDataURL(value);
      reader.onloadend = () => {
        this.formInputs[name].value = value;
        this.formInputs[name].valueFile = reader.result;
        this.checkErrorForButtonsDisableControl();
      };
    } else {
      this.formInputs[name].value = value;
      this.checkErrorForButtonsDisableControl();
    }

    return null;
  };

  clearValue = (name) => {
    if (this.formInputs[name]) {
      this.formInputs[name].handleValue("");
    }
    return null;
  };

  setDefaultValue = (name) => {
    if (this.formInputs[name]) {
      this.formInputs[name].handleValue(this.formInputs[name].defaultValue);
    }
    return null;
  };

  getFieldValue = (name) => {
    if (this.formInputs[name]) {
      const { type } = this.formInputs[name];
      return type === "file"
        ? this.formInputs[name].valueFile
        : this.formInputs[name].value;
    }
  };

  formatValueToSubmit = (value, maskToSubmit) => {
    const fixedValue =
      typeof value === "string" || typeof value === "number"
        ? String(value).trim()
        : value;
    return maskToSubmit && fixedValue ? maskToSubmit(fixedValue) : fixedValue;
  };

  getValues = () => {
    const data = {};
    this.inputNames.map((name) => {
      const { maskToSubmit } = this.formInputs[name];
      const value = this.getFieldValue(name);
      if (Boolean(value) || value === 0) {
        data[name] = this.formatValueToSubmit(value, maskToSubmit);
      }
      return null;
    });
    return data;
  };

  checkErrorForButtonsDisableControl = () => {
    const { length } = this.inputNames;
    for (let i = 0; i < length; i++) {
      if (this.testInputError(this.inputNames[i], false).error) {
        this.buttonNames.map((name) => {
          this.buttons[name].disableHandler(true);
          return null;
        });
        return;
      }
    }

    this.buttonNames.map((name) => this.buttons[name].disableHandler(false));
  };

  testErrorsAndReturnData = () => {
    var novaArr = this.inputNames.filter(
      (este, i) => this.inputNames.indexOf(este) === i
    );

    let hasError = false;
    const data = {};
    this.errorsMessages = [];
    novaArr.map((name) => {
      const { maskToSubmit, type } = this.formInputs[name];
      let value;
      type === "file"
        ? (value = this.getFieldValue(name))
        : (value = String(this.getFieldValue(name)).trim());

      if (Boolean(value) || value === 0) {
        data[name] = this.formatValueToSubmit(value, maskToSubmit);
      }
      const { error, errorMessage } = this.testInputError(name);
      if (error) {
        this.concatErrorMessages(name, errorMessage);
        if (!hasError) {
          hasError = error;
        }
      }

      return null;
    });
    return { hasError, data };
  };

  concatErrorMessages(name, errorMessage) {
    this.errorsMessages.push(
      `${this.formInputs[name].label}{*}${errorMessage}`
    );
  }

  testInputError = (name, shouldUpdateInput = true) => {
    if (this.formInputs[name]) {
      const { validation, required, value } = this.formInputs[name];
      if (Boolean(value) || value === 0) {
        if (validation) {
          const { isValid, errorMessage } = validation(
            value,
            this.getFieldValue
          );
          if (!isValid) {
            const eMessage = !Boolean(required)
              ? "Campo não obrigatório. Remova seu valor ou corrija o seguinte erro para prosseguir: " +
                errorMessage
              : errorMessage;
            if (shouldUpdateInput) {
              this.formInputs[name].errorHandler(eMessage);
            }
            return { error: true, errorMessage: eMessage };
          }
        }
      } else if (Boolean(required)) {
        if (shouldUpdateInput) {
          this.formInputs[name].errorHandler(required);
        }
        return { error: true, errorMessage: required };
      }
      return { error: false };
    }
    return { error: false };
  };

  clearAllValues = (setDefault) => {
    this.inputNames.map((name) => {
      if (setDefault) {
        this.setDefaultValue(name);
      } else {
        this.clearValue(name);
      }
      return null;
    });

    if (this.submitOnClear) {
      this.submit();
    }

    return null;
  };

  clearSpecificValues = (names, setDefault) => {
    names.map((name) => {
      if (setDefault) {
        this.setDefaultValue(name);
      } else {
        this.clearValue(name);
      }
      return null;
    });

    return null;
  };

  setCustomError = (name, message) => {
    this.formInputs[name].errorHandler(message);
    return null;
  };

  setNext = (name, event, focusWithoutValue) => {
    const nativeInput = this.getInputRef(name);
    const value = this.getFieldValue(name);
    if (nativeInput && (focusWithoutValue || !value)) {
      event.preventDefault();
      nativeInput.focus();
    } else {
      let inputName = name;
      for (let i = 1; i < this.inputNames.length; i++) {
        const next = this.formInputs[inputName].nextInput;

        if (next) {
          if (!this.formInputs[next].value) {
            event.preventDefault();
            this.getInputRef(next).focus();
            return null;
          } else {
            inputName = this.formInputs[next].nextInput;
          }
        } else {
          if (event.keyCode !== 9) {
            this.blurAndSubmit(event);
          }
          return null;
        }
      }
      if (event.keyCode !== 9) {
        this.blurAndSubmit(event);
      }
    }
    return null;
  };

  blurAndSubmit = (event) => {
    if (event.target.blur) {
      event.target.blur();
    }
    this.submit();
  };

  submit = () => {
    if (this.onSubmit) {
      const { hasError, data } = this.testErrorsAndReturnData();
      if (!hasError) {
        this.onSubmit(data);
        if (this.clearOnSubmit) {
          this.clearAllValues();
        }
      }
    }
    return null;
  };
}
