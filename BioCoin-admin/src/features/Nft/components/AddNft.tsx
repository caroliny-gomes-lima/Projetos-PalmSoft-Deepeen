import React from "react";
import Styles from "../styles/Styles";
import { Grid, makeStyles } from "@material-ui/core";
import {
  ButtonContained,
  ButtonOutlined,
  IconsBase64,
  Input,
} from "../../../components";
import { FormFull } from "form-full";
import { Colors, Spacing, Texts } from "../../../config";
import { hooks, masks, validations } from "../../../utils";
import { Add } from "@material-ui/icons";
import ImageButtonUpload from "./ImageButtonUpload";
import { api } from "../../../services";
import alerts from "../../../utils/Alerts";
import ResponseError from "../../../services/helpers/ResponseError";
import { customModal, errorModal } from "../../../components/modals/utils";

const useStyles = makeStyles((theme: any) => {
  const { spacing } = theme;
  return {
    Container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      flexDirection: "row",
      padding: spacing(3),
      marginBottom: spacing(2),
      borderRadius: "23.004px",
      width: "100%",
      height: "auto",
      background: Colors.gray + 70,
      boxShadow:
        "3.6607px 3.6607px 9.93619px 0px rgba(0, 0, 0, 0.08), 0.52296px 0.52296px 3.13774px 0px rgba(0, 0, 0, 0.08), 1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset, -1.04592px 0px 6.27549px 0px rgba(58, 58, 58, 0.07) inset",
    },
  };
});

function AddNft({ setChange, loadTable }) {
  const classes = useStyles();
  const texts = Texts["pt-BR"].Main.Nft;
  const { loading, call } = hooks.useRequest();
  const imageInput1 = React.useRef<any>(null);
  const imageInput2 = React.useRef<any>(null);
  const Base64ImageData1 = React.useRef<any>("");
  const Base64ImageData2 = React.useRef<any>("");
  const [errorMessageQrCode, setErrorMessageQrCodeo] =
    React.useState<any>(null);
  const [errorMessageImage, setErrorMessageImage] = React.useState<any>(null);

  const Submit = async (data) => {
    if (imageInput1.current === null) {
      setErrorMessageImage(true);
    } else {
      setErrorMessageImage(false);
    }

    if (imageInput2.current === null) {
      errorMessageQrCode(true);
    } else {
      setErrorMessageQrCodeo(false);
    }
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    const DataToSend = {
      name: data.name,
      content: data.content,
      collection: data.collection,
      number: data.number,
      edition: data.edition,
      purchaseUrl: data.purchaseUrl,
      image: Base64ImageData1.current,
      qrcode: Base64ImageData2.current,
    };
    call(null, api.addNft(DataToSend), (response) => {
      if (response.ok) {
        const errorResponse = new ResponseError(response);
        alerts.alertSuccess(texts.infoModal.ResponseTextSuccess[0]);
        loadTable();
        setChange(0);
      } else {
        customModal.setInfos("", [""], null, null, DrawModalInfo(), null);
      }
    });
  };

  const DrawModalInfo = () => {
    const texts = Texts["pt-BR"].Main.Nft.infoModal;
    return (
      <>
        <Styles.contentModalInfo>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModal>{texts.titleAdd}</Styles.TextsModal>
          <Styles.paddingModal>
            <ButtonContained
              customColor={Colors.lightBlue}
              fullWidth={false}
              onClick={customModal.close}
            >
              {texts.cancelButton}
            </ButtonContained>
          </Styles.paddingModal>
        </Styles.contentModalInfo>
      </>
    );
  };

  return (
    <>
      <FormFull onSubmit={Submit}>
        <div className={classes.Container}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Styles.MediaContent>
              <Styles.Label>{texts.addMedia + "*"}</Styles.Label>
              <ImageButtonUpload
                name="image"
                ImageInputTargetValue={imageInput1}
                Base64ImageData={Base64ImageData1}
              />
              {errorMessageImage === true ? (
                <Styles.ErrorMessage>
                  {texts.requiredMessage[0]}
                </Styles.ErrorMessage>
              ) : null}
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: "0.7rem",
                  marginBottom: 0,
                }}
              >
                {"Formatos aceitos .png e .jpeg"}
              </p>
              <Styles.Label $defaultMargin>
                {texts.addQrCode + "*"}
              </Styles.Label>
              <ImageButtonUpload
                defaultSize={true}
                name="qrcode"
                ImageInputTargetValue={imageInput2}
                Base64ImageData={Base64ImageData2}
              />
              {errorMessageQrCode === true ? (
                <Styles.ErrorMessage>
                  {texts.requiredMessage[0]}
                </Styles.ErrorMessage>
              ) : null}
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: "0.7rem",
                  marginBottom: 0,
                }}
              >
                {"Formatos aceitos .png e .jpeg"}
              </p>
            </Styles.MediaContent>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={8}>
            <Grid container spacing={1} direction="row">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="collection"
                  label={texts.nameColectionInput}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="name"
                  label={texts.nameNftInput}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="number"
                  label={texts.numberNftInput}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="edition"
                  label={texts.numderEditionkInput}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={12}>
                <Input
                  name="content"
                  label={texts.descriptionInput}
                  multiline
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={12}>
                <Input
                  name="purchaseUrl"
                  type="url"
                  label={texts.saleLinkInput}
                  required={texts.requiredMessage[0]}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <p
              style={{
                margin: 0,
                marginTop: Spacing(4),
                padding: 0,
                fontSize: "0.80rem",
                color: Colors.red,
              }}
            >
              {"*" + texts.requiredMessage[1]}
            </p>
          </Grid>
        </div>
        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ButtonContained
              name="submit"
              action="submit"
              loading={loading}
              disabled={loading}
              startIcon={<Add />}
              customColor={Colors.lightBlue}
              fullWidth={true}
            >
              {texts.confirmButton[0]}
            </ButtonContained>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={2}>
            <ButtonOutlined
              customColor={Colors.gray}
              fullWidth={true}
              onClick={() => setChange(0)}
            >
              {texts.cancelButton}
            </ButtonOutlined>
          </Grid>
        </Grid>
      </FormFull>
    </>
  );
}

export default AddNft;
