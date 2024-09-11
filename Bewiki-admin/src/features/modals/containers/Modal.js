import React from "react";
import { customModal } from "../utils";
import { Fade, IconButton } from "@material-ui/core";
import { ButtonContained, ButtonText, Text, Title } from "../../../components";
import { Styles } from "../styles";
import CloseIcon from "@material-ui/icons/Close";

function ModalContainer() {
  const [infos, setInfos] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const {
    texts = [],
    title,
    confirmButton,
    exitButton,
    extraField,
    icon,
  } = infos;

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
              <Styles.Group>
                {icon}
                <Title>{title}</Title>
              </Styles.Group>
              <IconButton onClick={customModal.close}>
                <CloseIcon />
              </IconButton>
            </Styles.HeaderContainer>
            {texts?.length > 0 && (
              <Styles.TextContainer>
                {texts.map((text) => (
                  <Text key={text}>{text}</Text>
                ))}
              </Styles.TextContainer>
            )}
          </Styles.ContentContainer>
          {extraField && extraField}

          <Styles.PaddingModal>
            {confirmButton ? (
              <ButtonContained {...confirmButton} fullWidth={false}>
                {confirmButton.label}
              </ButtonContained>
            ) : null}
            {exitButton ? (
              <ButtonText fullWidth={false} {...exitButton}>
                {exitButton.label}
              </ButtonText>
            ) : null}
          </Styles.PaddingModal>
        </Styles.Container>
      </Fade>
    </Styles.StyledModal>
  );
}

export default React.memo(ModalContainer);
