import { Swiper } from "../../../components";
import ForgotPasswordFirstStep from "./ForgotPasswordFirstStep";
import { customModal } from "../../modals/utils";
import ForgotPasswordSecondStep from "./ForgotPasswordSecondStep";
import { Texts } from "../../../config";
import ForgotPasswordThirdStep from "./ForgotPasswordThirdStep";
import { connect } from "react-redux";
import { Creators } from "../reduxSagas";

function ForgotPasswordContent({
  toggleForgotPassword,
  PasswordResetRequest,
  ConfirmPasswordResetRequest,
  RegenerateTokenRequest,
  ValidateTokenRequest,
  isFetching,
  email,
  token,
}) {
  const modalTexts = Texts["pt-BR"].forgotPass.cancelModal;
  const showCancelConfirmationModal = () => {
    customModal.setInfos(
      modalTexts.title,
      [modalTexts.text],
      {
        label: modalTexts.confirmButton,
        onClick: () => {
          toggleForgotPassword();
          customModal.close();
        },
      },
      {
        label: modalTexts.backButton,
        onClick: customModal.close,
      }
    );
  };
  const firstStep = ({ goNext, goPrevious }) => {
    return (
      <ForgotPasswordFirstStep
        toggleForgotPassword={toggleForgotPassword}
        goNext={goNext}
        PasswordResetRequest={PasswordResetRequest}
        isFetching={isFetching}
      />
    );
  };
  const secondStep = ({ goNext, goPrevious }) => {
    return (
      <ForgotPasswordSecondStep
        goPrevious={goPrevious}
        goNext={goNext}
        showCancelConfirmationModal={showCancelConfirmationModal}
        ValidateTokenRequest={ValidateTokenRequest}
        PasswordResetRequest={RegenerateTokenRequest}
        isFetching={isFetching}
        email={email}
      />
    );
  };
  const thirdStep = ({ goNext, goPrevious }) => {
    return (
      <ForgotPasswordThirdStep
        showCancelConfirmationModal={showCancelConfirmationModal}
        ConfirmPasswordResetRequest={ConfirmPasswordResetRequest}
        isFetching={isFetching}
        email={email}
        token={token}
        toggleForgotPassword={toggleForgotPassword}
      />
    );
  };

  return <Swiper screens={[firstStep, secondStep, thirdStep]} />;
}

function mapStateToProps(state) {
  const { isFetching, email, token } = state.login;
  return {
    isFetching,
    email,
    token,
  };
}

function mapDispatchToProps(dispatch) {
  const {
    PasswordResetRequest,
    ConfirmPasswordResetRequest,
    ValidateTokenRequest,
  } = Creators;
  return {
    PasswordResetRequest: function (email, goNext) {
      return dispatch(PasswordResetRequest(email, goNext));
    },
    ValidateTokenRequest: function (email, token, goNext) {
      return dispatch(ValidateTokenRequest(email, token, goNext));
    },
    RegenerateTokenRequest: function (email) {
      return dispatch(PasswordResetRequest(email, () => {}));
    },
    ConfirmPasswordResetRequest: function (email, password, code, finish) {
      return dispatch(
        ConfirmPasswordResetRequest(email, password, code, finish)
      );
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordContent);
