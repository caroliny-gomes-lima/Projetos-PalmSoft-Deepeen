import { FieldProps } from "form-full";
import React, { Component } from "react";
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
}

export default class InputEmail extends Component<Props> {
  render() {
    const { ...props } = this.props;

    return (
      <Input {...props} type="email" validation={validations.isEmailValid} />
    );
  }
}
