import React from "react";
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
import { hooks } from "../../../utils";
import { useQuill } from "react-quilljs";
import ImageButtonUpload from "./ImageButtonUpload";
import { api } from "../../../services";
import "quill/dist/quill.snow.css";
import "../styles/EditorText.css";
import { customModal, errorModal } from "../../../components/modals/utils";
import ResponseError from "../../../services/helpers/ResponseError";
import alerts from "../../../utils/Alerts";

function EditBlogScreen({ ItemDataTable, setChange, loadTable }) {
  const texts = Texts["pt-BR"].Main.Blog.BlogEdit;
  const imageInput = React.useRef<any>();
  const Base64ImageData = React.useRef<any>("");
  const [errorMessageImage, setErrorMessageImage] = React.useState<any>(null);
  const { loading, call } = hooks.useRequest();
  const [ref, setRef] = React.useState<any>(null);
  const [errorMessageQuill, setErrorMessageQuill] =
    React.useState<boolean>(false);
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
    const regex = /(<([^>]+)>)/gi;
    const newString = ItemDataTable.content.replace(regex, " ");
    if (quill) {
      quill.setText(newString, "api");
      editorContent.current.text = quill.getText();
    }
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        editorContent.current.text = quill.getText();
        editorContent.current.html = quill.root.innerHTML;
      });
    }
  }, [quill]);

  const submitData = (data) => {
    const DataToSend = {
      id: ItemDataTable.id,
      name: data ? data : ItemDataTable.name,
      contentHtml: editorContent.current.html
        ? editorContent.current.html
        : ItemDataTable.content,
      contentText: editorContent.current.text
        ? editorContent.current.text
        : ItemDataTable.resume,
      image: Base64ImageData.current,
    };
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.EditBlog(DataToSend), (response) => {
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
          <Styles.TextsModal>{texts.textInfoEdit}</Styles.TextsModal>
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
      <Styles.BlogContainer>
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
                defaultImage={`data:image/png/jpeg;base64,${ItemDataTable.img}`}
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
                    defaultValue={ItemDataTable.name}
                    disableError
                    required={texts.requiredMessage[0]}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Styles.Label
                    $error={errorMessageQuill ? Colors.red : Colors.black}
                  >
                    {texts.quillEditor}*
                  </Styles.Label>
                  <Styles.TextContainer>
                    <div ref={quillRef} />
                  </Styles.TextContainer>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Styles.BlogContainer>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <ButtonContained
            name="submit"
            fullWidth={true}
            loading={loading}
            disabled={loading}
            customColor={Colors.lightBlue}
            onClick={() => {
              const blogTitle = ref.getValue("name");
              if (
                editorContent.current.text === "" ||
                editorContent.current.text === "\n"
              ) {
                setErrorMessageQuill(true);
              } else if (imageInput.current === null) {
                setErrorMessageImage(true);
              } else if (blogTitle !== "") {
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

export default EditBlogScreen;
