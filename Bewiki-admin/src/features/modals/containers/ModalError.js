import React from "react";
import { errorModal } from "../utils";

import { Fade, IconButton } from "@material-ui/core";
import { ButtonContained, ButtonText, Title } from "../../../components";
import { Styles } from "../styles";
import CloseIcon from '@material-ui/icons/Close';
function ModalContainer() {
  const [infos, setInfos] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const { title, confirmButton, exitButton } = infos;

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
    <Styles.StyledModal
      open={open}
      onClose={() => setOpen(false)}
      BackdropComponent={Styles.StyledBackdrop}
      aria-labelledby="Título do modal"
      aria-describedby="Descrição do modal"
    >
      <Fade in={open}>
        <Styles.Container>
          <Styles.ContentContainer>
            <Styles.HeaderContainer>
              <Title>{title}</Title>
              <IconButton onClick={errorModal.close}>
              <CloseIcon />
              </IconButton>
            </Styles.HeaderContainer>
          </Styles.ContentContainer>
          <Styles.PaddingModal>
          {confirmButton ? (
            <ButtonContained {...confirmButton} fullWidth={false}>
              {confirmButton.label}
            </ButtonContained>
          ) : null}
          {exitButton ? (
            <ButtonText fullWidth={false} {...exitButton}>{exitButton.label}</ButtonText>
          ) : null}

          </Styles.PaddingModal>
        
        </Styles.Container>
      </Fade>
    </Styles.StyledModal>
  );
}

export default React.memo(ModalContainer);
