import React from "react";
import FormHandler from "./FormConfig";
import PropTypes from "prop-types";

class FormHolder extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    clearOnSubmit: PropTypes.bool,
    submitOnClear: PropTypes.bool,
    formRef: PropTypes.func,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super();
    this.formHandler = new FormHandler(
      props.onSubmit,
      props.clearOnSubmit,
      props.submitOnClear
    );
    if (props.formRef) {
      props.formRef(this.formHandler);
    }
  }

  static FormContext = React.createContext(null);

  render() {
    return (
      <FormHolder.FormContext.Provider
        value={{
          formHandler: this.formHandler,
        }}
      >
        {this.props.children}
      </FormHolder.FormContext.Provider>
    );
  }
}

export default FormHolder;
