import React from "react";
import { customModal } from "../utils";
import { Fade, IconButton } from "@material-ui/core";

import { Styles } from "../styles";
import { Theme } from "../../../config";
import ThemeProviderComponent from "../../others/ThemeProvider";
import colors from "../../../config/colors";
function ModalContainer() {
  const [infos, setInfos] = React.useState<any>({});
  const [open, setOpen] = React.useState(false);
  const {
    texts = [],
    title,
    confirmButton,
    exitButton,
    extraField,
    noExit,
    noMaxWidth,
  } = infos;

  const handleModal = React.useCallback(
    (config: any) => {
      if (config.open) {
        setInfos(config.infos);
      }
      setOpen(config.open);
    },
    [setInfos, setOpen]
  );

  customModal.setCallback(handleModal);
  return (
    <ThemeProviderComponent theme={Theme.Light}>
      <Styles.StyledModal
        open={open}
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            setOpen(false);
          }
        }}
        BackdropComponent={Styles.StyledBackdrop}
        aria-labelledby="Título do modal"
        aria-describedby="Descrição do modal"
      >
        <Fade in={open}>
          <Styles.Container noMaxWidth={noMaxWidth}>
            <Styles.ContentContainer>
              <Styles.HeaderContainer noExit={noExit}>
                <Styles.Title>{title}</Styles.Title>
                {noExit ? null : (
                  <IconButton
                    style={{ padding: 0, margin: 0, color: colors.grayText }}
                    onClick={customModal.close}
                  >
                    <Styles.Close />
                  </IconButton>
                )}
              </Styles.HeaderContainer>
              {texts.length >= 1 ? (
                <Styles.TextContainer>
                  {texts.map((text, index) => (
                    <Styles.ContentText
                      first={index === 0 ? true : false}
                      key={text}
                    >
                      {text}
                    </Styles.ContentText>
                  ))}
                </Styles.TextContainer>
              ) : null}

              {extraField ? extraField : null}
            </Styles.ContentContainer>

            <Styles.PaddingModal>
              {confirmButton ? (
                <Styles.ConfirmButton fullWidth={false} {...confirmButton}>
                  {confirmButton.label}
                </Styles.ConfirmButton>
              ) : null}
              {exitButton ? (
                <>
                  <Styles.ExitButton {...exitButton} fullWidth={false}>
                    {exitButton.label}
                  </Styles.ExitButton>
                </>
              ) : null}
            </Styles.PaddingModal>
          </Styles.Container>
        </Fade>
      </Styles.StyledModal>
    </ThemeProviderComponent>
  );
}

export default React.memo(ModalContainer);
