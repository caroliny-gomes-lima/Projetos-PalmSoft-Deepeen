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
import { hooks, masks } from "../../../utils";
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

function EditPreservedArea({ ItemDataTable, setChange, loadTable }) {
  const texts = Texts["pt-BR"].Main.PreservedAreas;
  const classes = useStyles();
  const { loading, call } = hooks.useRequest();

  const VideoInput = React.useRef<any>();
  const imageInput1 = React.useRef<any>();
  const imageInput2 = React.useRef<any>();
  const imageInput3 = React.useRef<any>();
  const imageInput4 = React.useRef<any>();

  const [videoData, setVideoData] = React.useState<any>(null);
  const [image1Data, setImage1Data] = React.useState<any>(null);
  const [image2Data, setImage2Data] = React.useState<any>(null);
  const [image3Data, setImage3Data] = React.useState<any>(null);
  const [image4Data, setImage4Data] = React.useState<any>(null);
  const [isMounted, setMount] = React.useState<boolean>(false);

  const [errorMessageVideo, setErrorMessageVideo] = React.useState<any>(null);
  const [errorMessageImage, setErrorMessageImage] = React.useState<any>(null);

  const MountImageFront = React.useCallback(() => {
    call(
      null,
      api.GetPreservedAreaImage(ItemDataTable.id, ItemDataTable.imageId1),
      async (response) => {
        if (response.ok) {
          setImage1Data(response.data);
        }
      }
    );
    call(
      null,
      api.GetPreservedAreaImage(ItemDataTable.id, ItemDataTable.imageId2),
      async (response) => {
        if (response.ok) {
          setImage2Data(response.data);
        }
      }
    );
    call(
      null,
      api.GetPreservedAreaImage(ItemDataTable.id, ItemDataTable.imageId3),
      async (response) => {
        if (response.ok) {
          setImage3Data(response.data);
        }
      }
    );
    call(
      null,
      api.GetPreservedAreaImage(ItemDataTable.id, ItemDataTable.imageId4),
      async (response) => {
        if (response.ok) {
          setImage4Data(response.data);
        }
      }
    );
    call(
      null,
      api.GetPreservedAreaVideo(ItemDataTable.id, ItemDataTable.videoId),
      async (response) => {
        if (response.ok) {
          setVideoData(URL.createObjectURL(response.data));
        }
      }
    );
  }, []);

  React.useEffect(() => {
    if (!isMounted) {
      MountImageFront();
    }
  }, [MountImageFront, isMounted]);

  const Submit = async (data) => {
    let formData = new FormData();

    if (VideoInput.current === null) {
      setErrorMessageVideo(true);
    } else {
      setErrorMessageVideo(false);
    }

    if (
      imageInput1.current === null ||
      imageInput2.current === null ||
      imageInput3.current === null ||
      imageInput4.current === null
    ) {
      setErrorMessageImage(true);
    } else {
      setErrorMessageImage(false);
    }

    if (loading) {
      return customModal.setInfos(
        "",
        [""],
        null,
        null,
        DrawModalInfo("carregando"),
        null
      );
    }
    const dataToSendo = {
      id: ItemDataTable.id,
      name: data.name ? data.name : ItemDataTable.name,
      address: {
        number: data.location ? data.location : ItemDataTable.address.number,
        street: data.location ? data.location : ItemDataTable.address.street,
        complement: data.location
          ? data.location
          : ItemDataTable.address.complement,
        district: data.location
          ? data.location
          : ItemDataTable.address.district,
        city: data.city ? data.city : ItemDataTable.address.city,
        state: data.state ? data.state : ItemDataTable.address.state,
        country: data.country ? data.country : ItemDataTable.address.country,
        postalCode: data.location
          ? data.location
          : ItemDataTable.address.postalCode,
        lat: data.lat ? data.lat : ItemDataTable.address.lat,
        lon: data.lon ? data.lon : ItemDataTable.address.lon,
      },
      areaMeters: data.areaMeters ? data.areaMeters : ItemDataTable.areaMeters,
      areaAcres: data.areaAcres ? data.areaAcres : ItemDataTable.areaAcres,
    };

    formData.append("data", JSON.stringify(dataToSendo));

    if (imageInput1.current != undefined) {
      formData.append("image1", imageInput1.current.target?.files?.[0]);
    }
    if (imageInput2.current != undefined) {
      formData.append("image2", imageInput2.current.target?.files?.[0]);
    }
    if (imageInput3.current != undefined) {
      formData.append("image3", imageInput3.current.target?.files?.[0]);
    }
    if (imageInput4.current != undefined) {
      formData.append("image4", imageInput4.current.target?.files?.[0]);
    }
    if (VideoInput.current != undefined) {
      formData.append("video", VideoInput.current.target?.files?.[0]);
    }

    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.EditPreservedArea(formData), (response) => {
      const errorResponse = new ResponseError(response);
      if (response.ok) {
        alerts.alertSuccess(texts.infoModal.ResponseTextSuccess[1]);
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
              defaultVideo={videoData ? videoData : null}
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
                Base64ImageData={null}
                ImageInputTargetValue={imageInput1}
                defaultImage={`data:image/png/jpeg;base64,${image1Data}`}
              />

              <ImageButtonUpload
                defaultSize={true}
                name="image2"
                Base64ImageData={null}
                ImageInputTargetValue={imageInput2}
                defaultImage={`data:image/png/jpeg;base64,${image2Data}`}
              />

              <ImageButtonUpload
                defaultSize={true}
                name="image3"
                Base64ImageData={null}
                ImageInputTargetValue={imageInput3}
                defaultImage={`data:image/png/jpeg;base64,${image3Data}`}
              />

              <ImageButtonUpload
                defaultSize={true}
                name="image4"
                Base64ImageData={null}
                ImageInputTargetValue={imageInput4}
                defaultImage={`data:image/png/jpeg;base64,${image4Data}`}
              />
            </Styles.SubGroup>
            {errorMessageImage === true ? (
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
              {"Formatos aceitos .png e .jpeg"}
            </p>
          </Styles.Group>

          <Grid item xs={12} sm={6} md={6} lg={8}>
            <Grid container spacing={1} direction="row">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="name"
                  label={texts.nameInput}
                  defaultValue={ItemDataTable.name}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="location"
                  label={texts.location}
                  defaultValue={ItemDataTable.address.street}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="lat"
                  label={texts.latitude}
                  mask={masks.formatCoordinate}
                  defaultValue={ItemDataTable.address.lat}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="lon"
                  label={texts.longitude}
                  mask={masks.formatCoordinate}
                  defaultValue={ItemDataTable.address.lon}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Input
                  name="country"
                  label={texts.country}
                  defaultValue={ItemDataTable.address.country}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Input
                  name="state"
                  label={texts.state}
                  defaultValue={ItemDataTable.address.state}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Input
                  name="city"
                  label={texts.city}
                  defaultValue={ItemDataTable.address.city}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="areaMeters"
                  label={texts.totalArea}
                  defaultValue={ItemDataTable.areaMeters}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="areaAcres"
                  label={texts.hectaresArea}
                  defaultValue={ItemDataTable.areaAcres}
                  required={texts.requiredMessage[0]}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}></Grid>
        </div>
        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <ButtonContained
              name="submit"
              action="submit"
              loading={loading}
              //disabled={loading}
              startIcon={<Add />}
              customColor={Colors.lightBlue}
              fullWidth={true}
            >
              {texts.confirmButton[1]}
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

export default EditPreservedArea;
