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
import { Colors, Texts } from "../../../config";
import { hooks } from "../../../utils";
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

function EditNft({ ItemDataTable, setChange, loadTable }) {
  const classes = useStyles();
  const texts = Texts["pt-BR"].Main.Nft;
  const { loading, call } = hooks.useRequest();
  const [image1, setImage1] = React.useState<any>(null);
  const [image2, setImage2] = React.useState<any>(null);

  const imageInput1 = React.useRef<any>();
  const imageInput2 = React.useRef<any>();
  const Base64ImageData1 = React.useRef<any>("");
  const Base64ImageData2 = React.useRef<any>("");
  const [isMounted, setMount] = React.useState<boolean>(false);

  const MountImage = React.useCallback(() => {
    call(
      null,
      api.NftsImage(ItemDataTable.id, ItemDataTable.imageId),
      async (response) => {
        if (response.ok) {
          setImage1(response.data);
        }
      }
    );
    call(
      null,
      api.NftsImage(ItemDataTable.id, ItemDataTable.qrcodeId),
      async (response) => {
        if (response.ok) {
          setImage2(response.data);
        }
      }
    );
  }, []);
  React.useEffect(() => {
    if (!isMounted) {
      MountImage();
    }
  }, [MountImage, isMounted]);

  const Submit = async (data) => {
    const DataToSend = {
      id: ItemDataTable.id,
      name: data.name ? data.name : ItemDataTable.name,
      content: data.content ? data.content : ItemDataTable.content,
      collection: data.collection ? data.collection : ItemDataTable.collection,
      number: data.number ? data.number : ItemDataTable.number,
      edition: data.edition ? data.edition : ItemDataTable.edition,
      purchaseUrl: data.purchaseUrl
        ? data.purchaseUrl
        : ItemDataTable.purchaseUrl,
        image: Base64ImageData1.current ? Base64ImageData1.current : image1,
        qrcode: Base64ImageData2.current ? Base64ImageData2.current : image2,
    };
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.EditNft(DataToSend), (response) => {
      if (response.ok) {
        const errorResponse = new ResponseError(response);
        alerts.alertSuccess(texts.infoModal.ResponseTextSuccess[1]);
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
          <Styles.TextsModal>{texts.titleEdit}</Styles.TextsModal>
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
                defaultImage={`data:image/png/jpeg;base64,${image1}`}
              />
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
              <Styles.Label $defaultMargin>{texts.addQrCode + "*"}</Styles.Label>
              <ImageButtonUpload
                defaultSize={true}
                name="qrcode"
                ImageInputTargetValue={imageInput2}
                Base64ImageData={Base64ImageData2}
                defaultImage={`data:image/png/jpeg;base64,${image2}`}
              />
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
                  defaultValue={ItemDataTable.collection}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="name"
                  label={texts.nameNftInput}
                  defaultValue={ItemDataTable.name}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="number"
                  label={texts.numberNftInput}
                  defaultValue={ItemDataTable.number}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Input
                  name="edition"
                  label={texts.numderEditionkInput}
                  defaultValue={ItemDataTable.edition}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={12}>
                <Input
                  name="content"
                  label={texts.descriptionInput}
                  multiline
                  defaultValue={ItemDataTable.content}
                  required={texts.requiredMessage[0]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={12}>
                <Input
                  name="purchaseUrl"
                  type="url"
                  label={texts.saleLinkInput}
                  defaultValue={ItemDataTable.purchaseUrl}
                  required={texts.requiredMessage[0]}
                />
              </Grid>
            </Grid>
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
              {texts.confirmButton[1]}
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

export default EditNft;
