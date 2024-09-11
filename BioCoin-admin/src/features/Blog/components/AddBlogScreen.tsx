import React, { useRef } from "react";
import Styles from "../styles/Styles";
import { Grid } from "@material-ui/core";
import {
  ButtonContained,
  ButtonOutlined,
  IconsBase64,
  Input,
} from "../../../components";
import { FormFull } from "form-full";
import { Colors, Spacing, Texts } from "../../../config";
import { useQuill } from "react-quilljs";
import { Add } from "@material-ui/icons";
import { api } from "../../../services";
import { hooks } from "../../../utils";
import ImageButtonUpload from "./ImageButtonUpload";
import { customModal, errorModal } from "../../../components/modals/utils";
import "quill/dist/quill.snow.css";
import "../styles/EditorText.css";
import ResponseError from "../../../services/helpers/ResponseError";
import alerts from "../../../utils/Alerts";

function AddBlogScreen({ setChange, loadTable }) {
  const texts = Texts["pt-BR"].Main.Blog.BlogAdd;
  const { loading, call } = hooks.useRequest();
  const imageInput = React.useRef<any>(null);
  const Base64ImageData = React.useRef<any>("");
  const [errorMessageImage, setErrorMessageImage] =
    React.useState<boolean>(false);
  const [errorMessageQuill, setErrorMessageQuill] =
    React.useState<boolean>(false);
  const [ref, setRef] = React.useState<any>(null);
  const editorContent = React.useRef({
    html: "",
    text: "",
  });

  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: false,
      // toolbar: [
      //   ["bold", "italic", "underline", "strike"],
      //   [{ align: "unset" }],

      //   [{ list: "unset" }, { list: "unset" }],
      //   [{ indent: "unset" }, { indent: "+1" }],

      //   [{ size: "unset" }],
      //   [{ header: "unset" }],
      //   ['link', 'image', 'video'],
      //   [{ color: "unset" }, { background: "unset" }],

      //   ["clean"],
      // ],
    },
  });
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        editorContent.current.text = quill.getText();
        editorContent.current.html = quill.root.innerHTML;
      });
    }
  }, [quill]);

  const submitData = (data) => {
    const DataToSend = {
      name: data,
      contentHtml: editorContent.current.html,
      contentText: editorContent.current.text,
      image: Base64ImageData.current,
    };
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.AddBlog(DataToSend), (response) => {
      if (response.ok) {
        const errorResponse = new ResponseError(response);
        alerts.alertSuccess(texts.ResponseTextSuccess);
        loadTable();
        setChange(false);
      } else {
        customModal.setInfos("", [""], null, null, DrawModalInfo(), null);
      }
    });
  };

  const DrawModalInfo = () => {
    const texts = Texts["pt-BR"].Main.Blog.BlogModalInfo;
    return (
      <>
        <Styles.contentModalInfo>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModal>{texts.textInfo}</Styles.TextsModal>
          <Styles.paddingModal>
            <ButtonContained
              customColor={Colors.lightBlue}
              fullWidth={false}
              onClick={customModal.close}
            >
              {texts.cancel}
            </ButtonContained>
          </Styles.paddingModal>
        </Styles.contentModalInfo>
      </>
    );
  };

  return (
    <FormFull formRef={setRef} onSubmit={() => {}}>
      <Styles.BlogContainer $DefaultPaddingBottom>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
              gap: 50,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <ImageButtonUpload
                name="image"
                ImageInputTargetValue={imageInput}
                Base64ImageData={Base64ImageData}
              />
              {errorMessageImage === true ? (
                <Styles.ErrorMessage>
                  {texts.requiredMessage[0]}
                </Styles.ErrorMessage>
              ) : null}
              <p
                style={{
                  marginTop: 2,
                  padding: 0,
                  fontSize: "0.7rem",
                  marginBottom: 0,
                }}
              >
                {"Formatos aceitos .png e .jpeg"}
              </p>
            </div>
            <Grid item xs={12} sm={10} md={10} lg={12}>
              <Grid container spacing={2} direction="column">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Input
                    name="name"
                    label={texts.title}
                    BlogQuillTitleLabel
                    required={texts.requiredMessage[0]}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Styles.Label
                    $error={errorMessageQuill ? Colors.red : Colors.black}
                  >
                    {texts.quillEditor + "*"}
                  </Styles.Label>
                  <Styles.TextContainer>
                    <div className="ql-container ql-snow" ref={quillRef} />
                  </Styles.TextContainer>
                  {errorMessageQuill === true ? (
                    <Styles.ErrorMessage>
                      {texts.requiredMessage[0]}
                    </Styles.ErrorMessage>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={12}>
          <p
            style={{
              margin: 0,
              marginTop: Spacing(2.5),
              padding: 0,
              fontSize: "0.80rem",
              color: Colors.red,
            }}
          >
            {"*" + texts.requiredMessage[1]}
          </p>
        </Grid>
      </Styles.BlogContainer>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <ButtonContained
            startIcon={<Add />}
            name="submit"
            loading={loading}
            disabled={loading}
            fullWidth={true}
            customColor={Colors.lightBlue}
            onClick={() => {
              const blogTitle = ref.getValue("name");
              const error = ref?.testErrorsAndReturnData();
              if (
                editorContent.current.text === "" ||
                editorContent.current.text === "\n"
              ) {
                setErrorMessageQuill(true);
              } else if (imageInput.current === null) {
                setErrorMessageImage(true);
              } else if (!error.hasError) {
                submitData(blogTitle);
              }
            }}
          >
            {texts.confirmButton}
          </ButtonContained>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={2}>
          <ButtonOutlined
            customColor={Colors.gray}
            fullWidth={true}
            onClick={() => setChange(false)}
          >
            {texts.cancelButton}
          </ButtonOutlined>
        </Grid>
      </Grid>
    </FormFull>
  );
}

export default AddBlogScreen;
