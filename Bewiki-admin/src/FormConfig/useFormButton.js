import React from "react";
import FormHolder from "./FormHolder";

function useMount(props, formHandler, setDisabled) {
  const mount = React.useCallback(() => {
    if (props.name) {
      formHandler.setButton({
        name: props.name,
        disableHandler: setDisabled,
      });
    }
    return () => {
      if (formHandler) {
        formHandler.removeButton(props.name);
      }
    };
  }, [formHandler, props.name, setDisabled]);

  React.useEffect(mount, [mount]);
}

function useDisabled(props) {
  const [disabled, setDisabled] = React.useState(Boolean(props.disabled));

  React.useEffect(() => {
    if (props.disabled !== undefined && props.disabled !== disabled) {
      setDisabled(props.disabled);
    }
  }, [props.disabled, disabled]);

  return { disabled, setDisabled };
}

function useFormButton(props) {
  const { disabled, setDisabled } = useDisabled(props);
  const ref = React.useRef(null);
  const context = React.useContext(FormHolder.FormContext);
  const formHandler = context?.formHandler;

  const onClick = React.useCallback(
    (event) => {
      if (props.type === "submit") {
        formHandler.submit();
      } else if (props.type === "clear") {
        formHandler.clearAllValues();
      } else if (props.type === "clearDefault") {
        formHandler.clearAllValues(true);
      }
      if (props.onClick) {
        props.onClick(event);
      }
    },
    [props, formHandler]
  );

  useMount(props, formHandler, setDisabled);

  return { disabled, onClick, ref, formHandler };
}

export default useFormButton;
