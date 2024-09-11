/*import React from "react";
import { usabilityInfoModal } from "../utils";
import { Fade, IconButton } from "@material-ui/core";
import { ButtonContained, ButtonText, Text, Title } from "../../../components";
import { Styles } from "../styles";
import { Info } from "@material-ui/icons";

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

    usabilityInfoModal.setCallback(handleModal);
    return (
        <Styles.StyledModal
            open={open}
            onClose={() => setOpen(false)}
            BackdropComponent={Styles.StyledBackdrop}

            aria-labelledby="Título do modal"
            aria-describedby="Descrição do modal"
        >

            <Fade in={open}>
                <Styles.InfoUsabilityContainer>
                    <Styles.InfoUsabilityContentContainer>
                        <Styles.InfoUsabilityHeaderContainer>
                            <Info color="primary"
                                fontSize="large"></Info>
                            <Title>{title}</Title>
                            <IconButton onClick={usabilityInfoModal.close}>
                                <Styles.Close />
                            </IconButton>
                        </Styles.InfoUsabilityHeaderContainer>
                        <Styles.InfoUsabilityTextContainer>
                            {texts.map((text) => (
                                <Text key={text}>{text}</Text>
                            ))}
                        </Styles.InfoUsabilityTextContainer>
                    </Styles.InfoUsabilityContentContainer>

                    {confirmButton ? (
                        <ButtonContained {...confirmButton}>
                            {confirmButton.label}
                        </ButtonContained>
                    ) : null}
                    {exitButton ? (
                        <ButtonText {...exitButton}>{exitButton.label}</ButtonText>
                    ) : null}
                </Styles.InfoUsabilityContainer>
            </Fade>
        </Styles.StyledModal>
    );
}

export default React.memo(ModalContainer);*/


