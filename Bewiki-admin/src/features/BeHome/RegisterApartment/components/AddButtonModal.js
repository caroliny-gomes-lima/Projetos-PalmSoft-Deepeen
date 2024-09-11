import React, { useState } from "react";
import Styles from "../styles/AddModalStyles";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { Fade, Grid } from "@material-ui/core";
import { Add, ArrowRightAltRounded, Remove } from "@material-ui/icons";

function AddButtonModal({ sendData }) {
  const text = Texts["pt-BR"].beHome.RegisterApartment.BasicDataStudio;
  const [open, setOpen] = React.useState(false);
  const [renderInputArray, setRenderInputArray] = useState(0);
  const [formRef, setRef] = React.useState();
  //const inputRef = useRef();

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const deleteInputArray = () => {
    formRef.removeInput("codeStudio_" + (renderInputArray - 1));
    formRef.removeInput("externalId_" + (renderInputArray - 1));
    setRenderInputArray(renderInputArray - 1);
  };

  const drawInputCode = () => {
    let inputArray = [];
    for (let index = 0; index < renderInputArray; index++) {
      inputArray.push(
        <>
          <Grid container spacing={2} direction="row" justify="space-between">
            <Styles.IconReorder />
            <Grid item xs={10} sm={11} md={11} lg={6}>
              <ContainerInputs
                setBorder
                setMaginBottom
                inputLabel={
                  <Styles.InputTitle>
                    {text.addModal.inputLabel[0]}
                  </Styles.InputTitle>
                }
                children={
                  <Styles.CodeInput
                    placeholder={"Digite o codigo do estúdio"}
                    name={`codeStudio_${index}`}
                    disableError
                  />
                }
              />
            </Grid>
            <Grid item xs={10} sm={11} md={11} lg={5}>
              <ContainerInputs
                setBorder
                setMaginBottom
                inputLabel={
                  <Styles.InputTitle>
                    {text.addModal.inputLabel[1]}
                  </Styles.InputTitle>
                }
                children={
                  <Styles.CodeInput
                    placeholder={"Digite o codigo do estúdio"}
                    name={`externalId_${index}`}
                    disableError
                  />
                }
              />
            </Grid>
          </Grid>
        </>
      );
    }
    return inputArray;
  };
  return (
    <>
      <Styles.Container>
        <Styles.AddButton onClick={() => handleOpenModal()} startIcon={<Add />}>
          {text.addModal.addButton}
        </Styles.AddButton>
      </Styles.Container>
      <Styles.StyledIformationModal
        open={open}
        onClose={(a, reason) => {
          if (reason !== "backdropClick") {
            setOpen(false);
          }
        }}
        BackdropComponent={Styles.styledBackDrop}
      >
        <Fade in={open}>
          <Styles.ModalContainer>
            <Styles.HeaderContainer>
              <ArrowRightAltRounded
                style={{ marginRight: 10, color: "black" }}
              />
              <Styles.Title>{text.addModal.title}</Styles.Title>
            </Styles.HeaderContainer>
            <Styles.SubTitle>{text.addModal.textTitle}</Styles.SubTitle>

            <Styles.Title $defaultMarginTop $defaultMarginBottom>
              {text.addModal.SubTitle}
            </Styles.Title>

            <FormHolder
              formRef={setRef}
              onSubmit={(data) => {
                sendData(data);
                handleCloseModal();
              }}
            >
              <Styles.ModalContent>
                <Styles.InputContainer>{drawInputCode()}</Styles.InputContainer>
              </Styles.ModalContent>

              <Grid container spacing={2} direction="row" justify="flex-end">
                <Grid item xs={2} sm={1} md={1} lg={1}>
                  <Styles.IconButtom
                    name="addButtom"
                    $setMarginTop
                    onClick={() => setRenderInputArray(renderInputArray + 1)}
                  >
                    <Add />
                  </Styles.IconButtom>
                </Grid>
                <Grid item xs={2} sm={1} md={1} lg={1}>
                  <Styles.IconButtom name="deleteButtom" $setMarginTop>
                    <Remove onClick={deleteInputArray} />
                  </Styles.IconButtom>
                </Grid>
              </Grid>
              <Grid container spacing={1} direction="row" justify="flex-end">
                <Grid item xs={12} sm={3} md={2} lg={2}>
                  <Styles.TextFieldButton
                    $defaultButtonCancel
                    onClick={() => handleCloseModal()}
                  >
                    {text.addModal.cancelButtom}
                  </Styles.TextFieldButton>
                </Grid>
                <Grid item xs={12} sm={8} md={7} lg={5}>
                  <Styles.TextFieldButton
                    defaultFontColor
                    type="submit"
                    name="button"
                  >
                    {text.addModal.confirmButtom}
                  </Styles.TextFieldButton>
                </Grid>
              </Grid>
            </FormHolder>
          </Styles.ModalContainer>
        </Fade>
      </Styles.StyledIformationModal>
    </>
  );
}

export default AddButtonModal;
