import React from "react";
import { FormHolder } from ".";

let nextSet = false;

function useMount(
  props,
  formHandler,
  ref,
  value,
  setValue,
  setError,
  isBoolean
) {
  const mount = React.useCallback(() => {
    formHandler.setInput({
      ref: ref.current,
      errorHandler: setError,
      handleValue: (value) =>
        setConfigs(value, props, formHandler, setValue, setError, isBoolean),
      value,
      name: props.name,
      type: props.type,
      getFileValue: props.getFileValue,
      label: props.label,
      defaultValue: props.defaultValue,
      mask: props.mask,
      nextInput: props.nextInput,
      maskToSubmit: props.maskToSubmit,
      validation: props.validation,
      required: props.required,
    });

    return () => {
      if (formHandler) {
        formHandler.removeInput(props.name);
      }
    };
  }, [formHandler, props, setValue, setError, ref, value, isBoolean]);

  React.useEffect(() => {
    mount();
  }, [mount]);
}

function useActualValueChange(
  actualValue,
  props,
  formHandler,
  setValue,
  setError,
  setActualValue,
  isBoolean
) {
  React.useEffect(() => {
    setActualValue(getInitialStringValue(props));
    if (props.actualValue !== undefined && actualValue !== props.actualValue) {
      const setValueCallback = isBoolean
        ? setValueWithoutOnChangeBoolean
        : setValueWithoutOnChangeString;

      setValueCallback(
        props.actualValue,
        props,
        formHandler,
        setValue,
        setError
      );
    }
  }, [
    props,
    actualValue,
    formHandler,
    setValue,
    setError,
    setActualValue,
    isBoolean,
  ]);
}

function useRequiredChange(required, name, formHandler) {
  React.useEffect(() => {
    formHandler.updateInput(name, {
      required,
    });
  }, [required, formHandler, name]);
}

function getInitialStringValue({ defaultValue = "", actualValue, mask }) {
  const value = actualValue || actualValue === 0 ? actualValue : defaultValue;
  const finalValue = mask ? mask(value) : value;
  return finalValue;
}

function getInitialBooleanValue({ defaultValue = "", actualValue }) {
  const finalValue = actualValue !== undefined ? actualValue : defaultValue;
  return finalValue;
}

function setValueWithoutOnChangeString(
  value = "",
  props,
  formHandler,
  setValue,
  setError
) {
  const { maskToSubmit, maxLength, mask, name, type } = props;
  let maxLengthValue = value;
  if (maxLength && (value !== null || value !== undefined)) {
    maxLengthValue = String(value).substring(0, maxLength);
  }
  const resultedValue = mask ? mask(maxLengthValue) : maxLengthValue;
  const finalValue = maskToSubmit ? maskToSubmit(resultedValue) : resultedValue;

  formHandler.setFormValue(name, maxLengthValue);
  type !== "file" ? setValue(resultedValue) : setValue(resultedValue.name);
  setError("");
  return finalValue;
}

function setValueWithoutOnChangeBoolean(
  value = "",
  props,
  formHandler,
  setValue,
  setError
) {
  const finalValue = Boolean(value);
  formHandler.setFormValue(props.name, finalValue);
  setValue(finalValue);
  setError("");
  return finalValue;
}

function setConfigs(
  value = "",
  props,
  formHandler,
  setValue,
  setError,
  isBoolean
) {
  let finalValue = null;
  const setValueCallback = isBoolean
    ? setValueWithoutOnChangeBoolean
    : setValueWithoutOnChangeString;

  setValueCallback(value, props, formHandler, setValue, setError);

  if (props.onChange) {
    props.onChange(finalValue, value, formHandler.getFieldValue);
  }

  if (props.submitOnChange) {
    formHandler.submit();
  }
}

function onPressEnter(event, props, formHandler) {
  event.stopPropagation();
  if (Boolean(props.nextInput)) {
    event.preventDefault();
    nextSet = true;
    formHandler.setNext(props.nextInput, event);
  } else if (props.submit) {
    event.preventDefault();
    formHandler.submit();
  }
}

function onPressShiftEnter(stateValue, props) {
  if (props.onSubmitCallback) {
    props.onSubmitCallback(stateValue);
  }
}

function handleKeyPress(event, stateValue, props, formHandler) {
  if (!event?.shiftKey && event?.charCode === 13) {
    onPressEnter(event, props, formHandler);
  } else if (event?.charCode === 13) {
    onPressShiftEnter(stateValue, props, false);
  }
}

function onPressTab(event, props, formHandler) {
  if (Boolean(props.nextInput)) {
    nextSet = true;
    formHandler.setNext(props.nextInput, event, true);
  }
}

function handleKeyDown(event, props, formHandler) {
  if (event?.keyCode === 9) {
    onPressTab(event, props, formHandler);
  }
}

function updateInputOnBlur(
  value,
  actualValue,
  setActualValue,
  props,
  formHandler
) {
  if (actualValue !== value) {
    setActualValue(value);
    if (props.submitOnBlur) {
      formHandler.submit();
    }
    if (props.onBlur) {
      props.onBlur(value);
    }
  }
}

function onBlur(value, actualValue, setActualValue, props, formHandler, event) {
  if (!nextSet) {
    if (props.callBlurIfChange) {
      updateInputOnBlur(value, actualValue, setActualValue, props, formHandler);
    } else if (props.submitOnBlur) {
      formHandler.submit();
    }
    if (props.onBlur) {
      props.onBlur(value, event);
    }
  } else {
    nextSet = false;
  }
}

function getOnlyPropsNeeded(props) {
  const newProps = { ...props };
  delete newProps.getFileValue;
  delete newProps.label;
  delete newProps.maskToSubmit;
  delete newProps.validation;
  delete newProps.alternative;
  delete newProps.defaultValue;
  delete newProps.mask;
  delete newProps.callBlurIfChange;
  delete newProps.actualValue;
  delete newProps.inputContainerStyles;
  delete newProps.submitOnBlur;
  delete newProps.submitOnChange;
  delete newProps.onSubmitCallback;
  delete newProps.submit;
  delete newProps.name;
  delete newProps.nextInput;
  delete newProps.formContextArrayIndex;
  delete newProps.handleForm;
  delete newProps.getFormRef;

  return newProps;
}

function useInitialConfig(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const [actualValue, setActualValue] = React.useState(initialValue);
  const [error, setError] = React.useState("");
  const ref = React.useRef(null);
  const context = React.useContext(FormHolder.FormContext);
  const formHandler = context?.formHandler;

  return {
    value,
    setValue,
    actualValue,
    setActualValue,
    error,
    setError,
    ref,
    formHandler,
  };
}

const formConnectorHelpers = {
  useMount,
  useActualValueChange,
  useRequiredChange,
  getInitialStringValue,
  getInitialBooleanValue,
  handleKeyPress,
  handleKeyDown,
  onBlur,
  setConfigs,
  getOnlyPropsNeeded,
  useInitialConfig,
};

export default formConnectorHelpers;
