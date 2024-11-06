import React from "react";
import { errorModal } from "../utils";

import { Fade } from "@material-ui/core";
import { ButtonText } from "../../index";
import { Styles } from "../styles";
import { Theme } from "../../../config";
import ThemeProviderComponent from "../../others/ThemeProvider";

function ModalContainer() {
  const [infos, setInfos] = React.useState<any>({});
  const [open, setOpen] = React.useState(false);
  const { title, text, confirmButton, exitButton, icon } = infos;

  const handleModal = React.useCallback(
    (config) => {
      if (config.open) {
        setInfos(config.infos);
      }
      setOpen(config.open);
    },
    [setInfos, setOpen]
  );

  errorModal.setCallback(handleModal);
  return (
    <ThemeProviderComponent theme={Theme.Light}>
      <Styles.StyledModal
        open={open}
        BackdropComponent={Styles.StyledBackdrop}
        aria-labelledby="Título do modal"
        aria-describedby="Descrição do modal"
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            setOpen(false);
          }
        }}
      >
        <Fade in={open}>
          <Styles.Container>
            <Styles.ContentContainer>
              <Styles.HeaderContainer>
                <Styles.Title>{icon && icon}{title}</Styles.Title>
                {/* <IconButton onClick={errorModal.close}>
                  <Styles.Close />
                </IconButton> */}
              </Styles.HeaderContainer>
              <Styles.HeaderContainer>
                <Styles.ContentText>{text}</Styles.ContentText>
              </Styles.HeaderContainer>
            </Styles.ContentContainer>
            <Styles.FooterContainer>
              {confirmButton ? (
                <Styles.ConfirmButton fullWidth={false} {...confirmButton}>
                  {confirmButton.label}
                </Styles.ConfirmButton>
              ) : null}
              {exitButton ? (
                <Styles.ExitButton fullWidth={false} {...exitButton}>
                  {exitButton.label}
                </Styles.ExitButton>
              ) : null}
            </Styles.FooterContainer>
          </Styles.Container>
        </Fade>
      </Styles.StyledModal>
    </ThemeProviderComponent>
  );
}

export default React.memo(ModalContainer);
