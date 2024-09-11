import React from "react";
import Title from "../../../components/strings/Title";
import { Styles } from "../styles";
import ForgotPasswordContent from "../components/ForgotPasswordContent";
import LoginContent from "../components/LoginContent";
import { version } from "../../../../package.json";

function Login() {
  const { REACT_APP_ENV } = process.env;
  const versionAndEnvironment = `${version} ${REACT_APP_ENV}`;

  const [forgotPassword, setForgotPassword] = React.useState(false);
  const toggleForgotPassword = () => {
    setForgotPassword(!forgotPassword);
  };

  return (
    <Styles.Container>
      <Styles.Background>
        <Styles.LeftShape />
        <Styles.RightShape />
      </Styles.Background>

      <Styles.Content>
        {forgotPassword ? (
          <ForgotPasswordContent toggleForgotPassword={toggleForgotPassword} />
        ) : (
          <LoginContent toggleForgotPassword={toggleForgotPassword} />
        )}
        <Styles.VersionContainer>
          <Title>{versionAndEnvironment}</Title>
        </Styles.VersionContainer>
      </Styles.Content>
    </Styles.Container>
  );
}

export default React.memo(Login);
