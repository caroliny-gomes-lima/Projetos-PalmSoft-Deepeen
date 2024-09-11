import React from "react";
import { customModal } from "../utils";

import { Fade, IconButton } from "@material-ui/core";
import { ButtonContained, ButtonText, Text, Title } from "../../../components";
import { Styles } from "../styles";

function ModalContainer() {
  const [infos, setInfos] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const { texts = [], title, confirmButton, exitButton } = infos;

  const handleModal = React.useCallback(
    (config) => {
      if (config.open) {
        setInfos(config.infos);
      }
      setOpen(config.open);
    },
    [setInfos, setOpen]
  );

  customModal.setCallback(handleModal);
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
              <IconButton onClick={customModal.close}>
                <Styles.Close />
              </IconButton>
            </Styles.HeaderContainer>
            <Styles.TextContainer>
              {texts.map((text) => (
                <Text key={text}>{text}</Text>
              ))}
            </Styles.TextContainer>
          </Styles.ContentContainer>

          {confirmButton ? (
            <ButtonContained {...confirmButton}>
              {confirmButton.label}
            </ButtonContained>
          ) : null}
          {exitButton ? (
            <ButtonText {...exitButton}>{exitButton.label}</ButtonText>
          ) : null}
        </Styles.Container>
      </Fade>
    </Styles.StyledModal>
  );
}

export default React.memo(ModalContainer);
