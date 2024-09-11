import React from "react";
import { InfoModalStyles as Styles } from "../styles";
import { Texts } from "../../../../config";
import { InfoOutlined, InfoSharp } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import { customModal } from "../../../modals/utils";

function InformationModal() {
  const text = Texts["pt-BR"].beHome.RequestedReservations;
  const [changeIcon, setChangeIcon] = React.useState(false);

  const handleOpenModal = () => {
    customModal.setInfos(
      null,
      text.title,
      null,
      null,
      null,
      <>
        <Styles.ModalContent>
          <Grid container spacing={1} direction="row">
            <Grid item xs={2} sm={1} md={1} lg={1}>
              <Styles.IconCancel />
            </Grid>
            <Grid item xs={10} sm={11} md={11} lg={11}>
              <Styles.SubTitle>{text.modalInformation.text1}</Styles.SubTitle>
            </Grid>
            <Grid item xs={2} sm={1} md={1} lg={1}>
              <Styles.IconCheckCircle />
            </Grid>
            <Grid item xs={10} sm={11} md={11} lg={11}>
              <Styles.SubTitle>{text.modalInformation.text2}</Styles.SubTitle>
            </Grid>
          </Grid>
        </Styles.ModalContent>

        <Styles.FooterModal>
          <Styles.TextFieldButton
            fullWidth={false}
            $defaultFontColor={2}
            onClick={() => handleCloseModal()}
          >
            {text.modalInformation.confirm}
          </Styles.TextFieldButton>
        </Styles.FooterModal>
      </>
    );
  };
  const handleCloseModal = () => {
    customModal.close();
  };

  return (
    <>
      <Styles.Container $justify>
        <Styles.ButtonInfo
          style={{ marginLeft: -1 }}
          onMouseMove={() => setChangeIcon(true)}
          onMouseOut={() => setChangeIcon(false)}
          onClick={() => handleOpenModal()}
        >
          {changeIcon === false ? (
            <InfoSharp
              fontSize="medium"
              style={{
                color: "black",
              }}
            />
          ) : null}
          {changeIcon === true ? (
            <InfoOutlined
              style={{
                color: "black",
              }}
            />
          ) : null}
        </Styles.ButtonInfo>
      </Styles.Container>
    </>
  );
}

export default InformationModal;
