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
import { hooks } from "../../../../utils";
import { api } from "../../../../services";
import { customModal, errorModal } from "../../../../components/modals/utils";
import ResponseError from "../../../../services/helpers/ResponseError";
import alerts from "../../../../utils/Alerts";

function SelfieDocumentApprove({ item, loadTable }) {
  const texts = Texts["pt-BR"].Main.CheckDocuments.SelfieDocumentModal;
  const { loading, call } = hooks.useRequest();
  const [isMounted, setMount] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<boolean>(false);

  const Mount = React.useCallback(() => {
    call(
      null,
      api.GetUserImage(item.id, item.docs.selfieImageId),
      async (response) => {
        if (response.ok) {
          setImage(response.data);
        }
      }
    );
  }, []);

  React.useEffect(() => {
    if (!isMounted) {
      Mount();
      setMount(true);
    }
  }, [Mount, isMounted]);

  async function onSubmit() {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      null,
      api.AcceptOrDenyUserDocs(item.id, {
        selfieAccepted: true,
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
        selfieAccepted: false,
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
    const texts = Texts["pt-BR"].Main.CheckDocuments.SelfieDocumentModal;
    return (
      <>
        <Styles.contentModalInfo>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModalInfo>{ResponseMessageError}</Styles.TextsModalInfo>
          <Styles.PaddingModal>
            <ButtonOutlined fullWidth={false} onClick={customModal.close}>
              {texts.closeButton}
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
        <Grid container spacing={1} direction="row" justifyContent="center">
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
              ) : image ? (
                <img
                  src={`data:image/png;base64,${image}`}
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
              ) : image === null ? (
                NoDataImage()
              ) : null}
            </Styles.ImageBox>
          </Grid>
        </Grid>
      </Styles.Container>

      {item.docs.selfieStatus === "ACCEPTED" ? (
        <></>
      ) : (
        <Styles.PaddingModal>
          <ButtonContained
            startIcon={<Check />}
            customColor={Colors.green}
            fullWidth={false}
            onClick={onSubmit}
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

export default SelfieDocumentApprove;
