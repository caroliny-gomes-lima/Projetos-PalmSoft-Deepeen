import React, { Component } from "react";

import Input from "./Input";
import { Filters, Validations } from "../../lib";

export default class InputEmail extends Component {
  render() {
    const { maxLength = 100, ...rest } = this.props;

    return (
      <Input
        {...rest}
        maxLength={maxLength}
        type="email"
        validation={Validations.isEMAIL}
        maskToSubmit={Filters.toLowerCaseFilter}
      />
    );
  }
}
