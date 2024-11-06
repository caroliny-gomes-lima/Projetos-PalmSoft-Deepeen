import { FieldProps } from "form-full";
import React from "react";
import { validations } from "../../utils";

import Input from "./Input";
export interface Props extends FieldProps<any> {
  id?: string;
  label?: string;
  disableError?: boolean;
  hideVisualError?: boolean;
  type?: string;
  withHide?: () => void;
  placeholder?: string;
  state?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  endButton?: (onChange: (event: any, value: any) => void, value: any) => void;

  multiline?: boolean;
  name: string;
  $type?: string;
}
class InputPassword extends React.Component<Props> {
  state = {
    showPassword: false,
  };
  render() {
    return (
      <Input
        {...this.props}
        validation={validations.isPassword}
        withHide={() => {
          this.setState({ showPassword: !this.state.showPassword });
        }}
        state={this.state.showPassword}
        type={
          this.state.showPassword
            ? "text"
            : this.props?.$type === "newPassword"
            ? "newPassword"
            : "password"
        }
      />
    );
  }
}
export default InputPassword;
