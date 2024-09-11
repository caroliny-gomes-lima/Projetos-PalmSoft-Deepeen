import React from "react";

import { Input } from "..";

class InputPassword extends React.Component {
  state = {
    showPassword: false,
  };
  render() {
    return (
      <Input
        {...this.props}
        type={this.state.showPassword ? "text" : "password"}
      />
    );
  }
}
export default InputPassword;
