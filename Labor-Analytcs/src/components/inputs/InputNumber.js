import React, { Component } from "react";

import Input from "./Input";

export default class InputNumber extends Component {
  render() {
    const { maxLength = 5, ...rest } = this.props;

    return <Input {...rest} maxLength={maxLength} type="number" />;
  }
}
