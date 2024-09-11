import React from "react";
import { UserCardStyle as Styles } from "../../styles";
import { Grid } from "@material-ui/core";
import { Texts } from "../../../../../config";
import { FormHolder } from "../../../../../FormConfig";
import { connect } from "react-redux";
import { customModal } from "../../../../modals/utils";
import { ContainerInputs } from "../../../../../components/inputs/inputsComponents";
import { Input } from "../../../../../components";
import { Creators } from "../../reduxSagas";

function ObservationsModal({
  userData,
  InfoCancellationRequest,
  InfoCancellationData,
}) {
  const text = Texts["pt-BR"].users.enabledUsers.InfoModalCancel;

  const mount = React.useCallback(() => {
    InfoCancellationRequest(userData.id);
  }, [InfoCancellationRequest, userData]);
  React.useEffect(mount, [mount]);

  return (
    <>
      <FormHolder>
        <Styles.ModalContent>
          <Grid container spacing={1} direction="row">
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={text.userInput}
                children={
                  <Input
                    small
                    marginDefault
                    defaultBorder
                    name="user"
                    defaultValue={userData.name}
                    readOnly
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <ContainerInputs
                inputLabel={text.dateInput}
                children={
                  <Input
                    name="stay"
                    small
                    marginDefault
                    defaultBorder
                    defaultValue={new Date(userData.date).toLocaleDateString()}
                    readOnly
                  />
                }
              />
            </Grid>
            <Styles.HeaderContainer>
              <Styles.Title defaultFontsSize>{text.subTitle}</Styles.Title>
            </Styles.HeaderContainer>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Styles.TextBox>
                {InfoCancellationData?.content?.cancelReason}
              </Styles.TextBox>
            </Grid>
          </Grid>
        </Styles.ModalContent>
        <Grid container spacing={0} justify="flex-end">
          <Styles.FooterModal>
            <Styles.TextFieldButtonCancel onClick={() => customModal.close()}>
              {text.back}
            </Styles.TextFieldButtonCancel>
          </Styles.FooterModal>
        </Grid>
      </FormHolder>
    </>
  );
}

function mapStateToProps(state) {
  const { InfoCancellationData } = state.users;
  return { InfoCancellationData };
}

function mapDispatchToProps(dispatch) {
  const { InfoCancellationRequest } = Creators;
  return {
    InfoCancellationRequest: function (userId) {
      return dispatch(InfoCancellationRequest(userId));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ObservationsModal);
