import React, { useRef } from "react";
import Styles from "../../styles/Styles";
import { Colors, Spacing, Texts } from "../../../../config";
import { CircularProgress, Grid } from "@material-ui/core";
import {
  ButtonContained,
  ButtonOutlined,
  IconsBase64,
} from "../../../../components";
import { Check, Close } from "@material-ui/icons";
import { api } from "../../../../services";
import { hooks } from "../../../../utils";
import { customModal, errorModal } from "../../../../components/modals/utils";
import ResponseError from "../../../../services/helpers/ResponseError";
import alerts from "../../../../utils/Alerts";

function DocumentImage({ item, loadTable }) {
  const texts = Texts["pt-BR"].Main.CheckDocuments.DocumentPhotoModal;
  const { loading, call } = hooks.useRequest();
  const [isMounted, setMount] = React.useState<boolean>(false);
  const [imageDocBack, setImageDocBack] = React.useState<boolean>(false);
  const [imageDocFront, setImageDocFront] = React.useState<boolean>(false);

  const [loadingImage, setLoadigImage] = React.useState<boolean>(true);

  const MountImageFront = React.useCallback(() => {
    call(
      null,
      api.GetUserImage(item.id, item.docs.registerFrontImageId),
      async (response) => {
        if (response.ok) {
          setLoadigImage(false);
          setImageDocFront(response.data);
        }
      }
    );
  }, []);

  const MountImageBack = React.useCallback(() => {
    call(
      null,
      api.GetUserImage(item.id, item.docs.registerBackImageId),
      async (response) => {
        if (response.ok) {
          setImageDocBack(response.data);
        }
      }
    );
  }, []);

  React.useEffect(() => {
    if (!isMounted) {
      MountImageFront();
      MountImageBack();
      setMount(true);
    }
  }, [MountImageFront, MountImageBack, isMounted]);

  async function acceptSubmit() {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      null,
      api.AcceptOrDenyUserDocs(item.id, {
        registerAccepted: true,
      }),
      (response) => {
        const errorResponse = new ResponseError(response);
        if (response.ok) {
          alerts.alertSuccess(texts.ResponseAproveSuccess);
          customModal.close();
          loadTable();
        } else {
          customModal.setInfos(
            "",
            [""],
            null,
            null,
            DrawModalInfo(errorResponse.message),
            null
          );
        }
      }
    );
  }

  async function denySubmit() {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      null,
      api.AcceptOrDenyUserDocs(item.id, {
        registerAccepted: false,
      }),
      (response) => {
        const errorResponse = new ResponseError(response);
        if (response.ok) {
          alerts.alertSuccess(texts.ResponseTextSuccess);
          customModal.close();
          loadTable();
        } else {
          customModal.setInfos(
            "",
            [""],
            null,
            null,
            DrawModalInfo(errorResponse.message),
            null
          );
        }
      }
    );
  }

  const DrawModalInfo = (ResponseMessageError: any) => {
    const texts = Texts["pt-BR"].Main.CheckDocuments.DocumentPhotoModal;
    return (
      <>
        <Styles.contentModalInfo>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModalInfo>{ResponseMessageError}</Styles.TextsModalInfo>
          <Styles.PaddingModal>
            <ButtonOutlined fullWidth={false} onClick={customModal.close}>
              {texts.cancelButton}
            </ButtonOutlined>
          </Styles.PaddingModal>
        </Styles.contentModalInfo>
      </>
    );
  };

  const NoDataImage = () => {
    return (
      <Styles.NoDataContainer>
        <Styles.NoDataText>{"Sem Dados"}</Styles.NoDataText>
      </Styles.NoDataContainer>
    );
  };

  return (
    <>
      <Styles.Container $changeBackground>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Styles.ImageBox>
              {loading ? (
                <CircularProgress
                  size={90}
                  style={{
                    color: "white",
                    alignSelf: "center",
                    justifyContent: "center",
                    marginBlock: Spacing(3),
                  }}
                />
              ) : imageDocFront ? (
                <img
                  src={`data:image/png;base64,${imageDocFront}`}
                  style={{
                    height: "190px",
                    width: "280px",
                    transform: "rotate(90deg)",
                    borderRadius: "10px",
                    border: "solid 2px",
                    color: Colors.white,
                  }}
                  alt=""
                />
              ) : imageDocFront === null ? (
                NoDataImage()
              ) : null}
            </Styles.ImageBox>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Styles.ImageBox>
              {loading ? (
                <CircularProgress
                  size={90}
                  style={{
                    color: "white",
                    alignSelf: "center",
                    justifyContent: "center",
                    marginBlock: Spacing(3),
                  }}
                />
              ) : imageDocBack ? (
                <img
                  src={`data:image/png;base64,${imageDocBack}`}
                  style={{
                    height: "190px",
                    width: "280px",
                    transform: "rotate(90deg)",
                    borderRadius: "10px",
                    border: "solid 2px",
                    color: Colors.white,
                  }}
                  alt=""
                />
              ) : imageDocBack === null ? (
                NoDataImage()
              ) : null}
            </Styles.ImageBox>
          </Grid>
        </Grid>
      </Styles.Container>

      {item.docs.registerStatus === "ACCEPTED" ? (
        <></>
      ) : (
        <Styles.PaddingModal>
          <ButtonContained
            startIcon={<Check />}
            customColor={Colors.green}
            fullWidth={false}
            onClick={acceptSubmit}
          >
            {texts.confirmButton[0]}
          </ButtonContained>

          <ButtonContained
            startIcon={<Close />}
            customColor={Colors.red}
            fullWidth={false}
            onClick={denySubmit}
          >
            {texts.confirmButton[1]}
          </ButtonContained>

          <ButtonOutlined fullWidth={false} onClick={() => customModal.close()}>
            {texts.cancelButton}
          </ButtonOutlined>
        </Styles.PaddingModal>
      )}
    </>
  );
}

export default DocumentImage;
