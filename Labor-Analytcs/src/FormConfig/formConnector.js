import React from "react";
import helper from "./formConnectorHelpers";
import useFormButton from "./useFormButton";

function useStringValue(props) {
  const initialValue = helper.getInitialStringValue(props);

  const {
    value,
    setValue,
    actualValue,
    setActualValue,
    error,
    setError,
    ref,
    formHandler,
  } = helper.useInitialConfig(initialValue);

  const fileInputRef = React.useRef(null);

  helper.useMount(props, formHandler, ref, value, setValue, setError, false);

  helper.useActualValueChange(
    actualValue,
    props,
    formHandler,
    setValue,
    setError,
    setActualValue,
    false
  );

  helper.useRequiredChange(props.required, props.name, formHandler);

  return {
    value,
    error,
    handleKeyPress: (event) =>
      helper.handleKeyPress(event, value, props, formHandler),
    handleKeyDown: (event) => helper.handleKeyDown(event, props, formHandler),
    onBlur: (event) =>
      helper.onBlur(
        value,
        actualValue,
        setActualValue,
        props,
        formHandler,
        event
      ),
    setConfigs: (value) =>
      helper.setConfigs(value, props, formHandler, setValue, setError, false),
    ref,
    usedProps: helper.getOnlyPropsNeeded(props),
    formHandler,
    fileInputRef,
  };
}

function useBooleanValue(props) {
  const initialValue = helper.getInitialBooleanValue(props);

  const {
    value,
    setValue,
    actualValue,
    setActualValue,
    error,
    setError,
    ref,
    formHandler,
  } = helper.useInitialConfig(initialValue);

  helper.useMount(props, formHandler, ref, value, setValue, setError, true);

  helper.useActualValueChange(
    actualValue,
    props,
    formHandler,
    setValue,
    setError,
    setActualValue,
    true
  );

  helper.useRequiredChange(props.required, props.name, formHandler);

  return {
    value,
    error,
    setConfigs: (value) =>
      helper.setConfigs(value, props, formHandler, setValue, setError, true),
    ref,
    usedProps: helper.getOnlyPropsNeeded(props),
    formHandler,
  };
}

const formConnector = {
  useStringValue,
  useBooleanValue,
  useFormButton,
};

export default formConnector;
