import React from "react";
import Styles from "../styles/Styles";
import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
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
import { api } from "../../../services";
import { customModal, errorModal } from "../../../components/modals/utils";
import ImageButtonUpload from "./ImageButtonUpload";
import VideoButtonUpload from "./VideoButtonUpload";
import alerts from "../../../utils/Alerts";
import ResponseError from "../../../services/helpers/ResponseError";

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

function AddPreservedArea({ setChange, loadTable }) {
  const { loading, call } = hooks.useRequest();
  const classes = useStyles();
  const texts = Texts["pt-BR"].Main.PreservedAreas;
  const [errorMessageVideo, setErrorMessageVideo] = React.useState<any>(null);
  const [errorMessageImage, setErrorMessageImage] = React.useState<any>(null);

  const VideoInput = React.useRef<any>(null);
  const imageInput1 = React.useRef<any>(null);
  const imageInput2 = React.useRef<any>(null);
  const imageInput3 = React.useRef<any>(null);
  const imageInput4 = React.useRef<any>(null);

  const Submit = async (data) => {
    let formData = new FormData();

    if (VideoInput.current === null) {
      setErrorMessageVideo(true);
    } else {
      setErrorMessageVideo(false);
    }

    if (imageInput1.current === null || imageInput2.current === null) {
      setErrorMessageImage(true);
    } else if (imageInput3.current === null || imageInput4.current === null) {
      setErrorMessageImage(true);
    } else {
      setErrorMessageImage(false);
    }

    const dataToSendo = {
      name: data.name,
      address: {
        number: data.location,
        street: data.location,
        complement: data.location,
        district: data.location,
        city: data.city,
        state: data.state,
        country: data.country,
        postalCode: data.location,
        lat: data.lat,
        lon: data.lon,
      },
      areaMeters: data.areaMeters,
      areaAcres: data.areaAcres,
    };
    formData.append("data", JSON.stringify(dataToSendo));

    formData.append("image1", imageInput1.current.target?.files?.[0]);
    formData.append("image2", imageInput2.current.target?.files?.[0]);
    formData.append("image3", imageInput3.current.target?.files?.[0]);
    formData.append("image4", imageInput4.current.target?.files?.[0]);
    formData.append("video", VideoInput.current.target?.files?.[0]);

    errorModal.setInfos("Carregando", ["aguarde..."], null, null);

    call(null, api.RegisterPreservedArea(formData), (response) => {
      const errorResponse = new ResponseError(response);
      if (response.ok) {
        alerts.alertSuccess(texts.infoModal.ResponseTextSuccess[0]);
        loadTable();
        setChange();
      } else {
        if ((errorResponse.status = 400)) {
          customModal.setInfos(
            "",
            [""],
            null,
            null,
            DrawModalInfo(texts.infoModal.titleAdd[1]),
            null
          );
        } else {
          customModal.setInfos(
            "",
            [""],
            null,
            null,
            DrawModalInfo(texts.infoModal.titleAdd[0]),
            null
          );
        }
      }
    });
  };

  const DrawModalInfo = (text) => {
    const texts = Texts["pt-BR"].Main.PreservedAreas;
    return (
      <>
        <Styles.contentModalInfo>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModal>{text}</Styles.TextsModal>
          <Styles.paddingModal>
            <ButtonContained
              customColor={Colors.lightBlue}
              fullWidth={false}
              onClick={customModal.close}
            >
              {texts.infoModal.cancelButton}
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
          <Styles.Group>
            <Styles.Label
              $error={errorMessageVideo === true ? Colors.red : Colors.black}
            >
              {texts.addVideo + "*"}
            </Styles.Label>

            <VideoButtonUpload
              name="Video"
              VideoInputTargetValue={VideoInput}
            />

            {errorMessageVideo === true ? (
              <Styles.ErrorMessage>{texts.requiredMessage}</Styles.ErrorMessage>
            ) : null}
            <p
              style={{
                margin: 0,
                padding: 0,
                fontSize: "0.7rem",
                marginBottom: 0,
              }}
            >
              {"Formatos e tamanho aceitos .mp4 e 50MB"}
            </p>

            <Styles.Label
              $defaultMargin
              $error={errorMessageVideo === true ? Colors.red : Colors.black}
            >
              {texts.addImage + "*"}
            </Styles.Label>
            <Styles.SubGroup>
              <ImageButtonUpload
                defaultSize={true}
                name="image1"
                Base64ImageData={{}}
                ImageInputTargetValue={imageInput1}
              />

              <ImageButtonUpload
                defaultSize={true}
                name="image2"
                Base64ImageData={{}}
                ImageInputTargetValue={imageInput2}
              />

              <ImageButtonUpload
                defaultSize={true}
                name="image3"
                Base64ImageData={{}}
                ImageInputTargetValue={imageInput3}
              />

              <ImageButtonUpload
                defaultSize={true}
                name="image4"
                Base64ImageData={{}}
                ImageInputTargetValue={imageInput4}
              />
            </Styles.SubGroup>
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
          </Styles.Group>

          <Grid item xs={12} sm={6} md={6} lg={8}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="name"
                  label={texts.nameInput}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="location"
                  label={texts.location}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="lat"
                  label={texts.latitude}
                  mask={masks.formatCoordinate}
                  required={texts.requiredMessage[0]}
                  disableError
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="lon"
                  label={texts.longitude}
                  mask={masks.formatCoordinate}
                  required={texts.requiredMessage[0]}
                  disableError
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Input
                  name="country"
                  label={texts.country}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Input
                  name="state"
                  label={texts.state}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Input
                  name="city"
                  label={texts.city}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="areaMeters"
                  label={texts.totalArea}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="areaAcres"
                  label={texts.hectaresArea}
                  required={texts.requiredMessage[0]}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <p
              style={{
                margin: 0,
                marginTop: Spacing(1.5),
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
              onClick={() => setChange()}
            >
              {texts.cancelButton}
            </ButtonOutlined>
          </Grid>
        </Grid>
      </FormFull>
    </>
  );
}

export default AddPreservedArea;
