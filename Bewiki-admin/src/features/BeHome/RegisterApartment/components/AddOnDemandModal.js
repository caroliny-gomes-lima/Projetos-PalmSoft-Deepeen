import React from "react";
import Styles from "../styles/OnDemandModalStyles";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { ButtonOutlined, InputImage } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { Fade, Grid } from "@material-ui/core";
import { Add, ArrowRightAltRounded, InsertPhoto } from "@material-ui/icons";

function AddOnDemandModal({ sendData }) {
  const [open, setOpen] = React.useState(false);
  const texts = Texts["pt-BR"].beHome.RegisterApartment.OnDemand;

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  /*const drawInputCode = () => {
    let renderInputArray = [];
    renderInputArray.push(
      <>
        <Grid container spacing={2} direction="row">
          <Grid item xs={8} sm={12} md={12} lg={8}>
            <ContainerInputs
              setBorder
              setMaginBottom
              inputLabel={
                <Styles.InputTitle>{texts.inputLabel[0]}</Styles.InputTitle>
              }
              children={
                <Styles.textInput name="nameNewOnDemand" disableError />
              }
            />
          </Grid>

          <Grid item xs={8} sm={12} md={12} lg={4}>
            <ContainerInputs
              setBorder
              setMaginBottom
              inputLabel={
                <Styles.InputTitle>{texts.inputLabel[1]}</Styles.InputTitle>
              }
              children={
                <Styles.NumberInput name="PriceOnDemand" disableError />
              }
            />
          </Grid>

          <Grid item xs={8} sm={12} md={12} lg={12}>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>{texts.inputImage}</Styles.InputTitle>
              }
              children={
                <InputImage
                  setStartIcon={<InsertPhoto style={{ marginRight: "5px" }} />}
                  variant="standard"
                  textClick="Selecionar Imagem"
                  name="ImageOnDemand"
                  type="file"
                  nextInput="OnDemandDescription"
                  fileInputRef="ImageOnDemand"
                  color="secondary"
                  disableError={true}
                />
              }
              showUploadInfo
            />
          </Grid>

          <Grid item xs={8} sm={6} md={6} lg={5}>
            <Styles.textBox>
              <Styles.HeadertextBox>
                <Styles.InputTitle>{texts.inputLabel[2]}</Styles.InputTitle>
              </Styles.HeadertextBox>
              <Styles.textInput
                name="OnDemandDescription"
                $setFontSize
                disableError
              />
            </Styles.textBox>
          </Grid>
          <Grid item xs={8} sm={6} md={6} lg={7}>
            <Styles.textBox>
              <Styles.HeadertextBox>
                <Styles.InputTitle>{texts.inputLabel[3]}</Styles.InputTitle>
              </Styles.HeadertextBox>
              <Styles.textInput
                name="OnDemandDetails"
                $setFontSize
                disableError
              />
            </Styles.textBox>
          </Grid>
        </Grid>
      </>
    );
    return renderInputArray;
  };*/

  return (
    <>
      <Styles.TextFieldButton
        onClick={() => handleOpenModal()}
        endIcon={<Add />}
      >
        {texts.addButton}
      </Styles.TextFieldButton>

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
              <Styles.Title>{texts.OnDemandModal.title}</Styles.Title>
            </Styles.HeaderContainer>
            <Styles.SubTitle>{texts.OnDemandModal.textTitle}</Styles.SubTitle>

            <Styles.Title $defaultMarginTop $defaultMarginBottom>
              {texts.OnDemandModal.subTitle}
            </Styles.Title>

            <FormHolder
              onSubmit={(data) => {
                sendData(data);
                handleCloseModal();
              }}
            >
              <Styles.ModalContent>
                {
                  <>
                    <Grid container spacing={2} direction="row">
                      <Grid item xs={8} sm={12} md={12} lg={8}>
                        <ContainerInputs
                          setBorder
                          setMaginBottom
                          inputLabel={
                            <Styles.InputTitle>
                              {texts.inputLabel[0]}
                            </Styles.InputTitle>
                          }
                          children={
                            <Styles.TextInput
                              name="newOnDemandName"
                              disableError
                            />
                          }
                        />
                      </Grid>

                      <Grid item xs={8} sm={12} md={12} lg={4}>
                        <ContainerInputs
                          setBorder
                          setMaginBottom
                          inputLabel={
                            <Styles.InputTitle>
                              {texts.inputLabel[1]}
                            </Styles.InputTitle>
                          }
                          children={
                            <Styles.NumberInput
                              name="newOnDemandPrice"
                              disableError
                            />
                          }
                        />
                      </Grid>

                      <Grid item xs={8} sm={12} md={12} lg={12}>
                        <ContainerInputs
                          inputLabel={
                            <Styles.InputTitle>
                              {texts.inputImage}
                            </Styles.InputTitle>
                          }
                          children={
                            <InputImage
                              setStartIcon={
                                <InsertPhoto style={{ marginRight: "5px" }} />
                              }
                              variant="standard"
                              textClick="Selecionar Imagem"
                              name="newOnDemandImage"
                              type="file"
                              nextInput="newOnDemandDescription"
                              fileInputRef="newOnDemandImage"
                              color="secondary"
                              disableError={true}
                            />
                          }
                          showUploadInfo
                        />
                      </Grid>

                      <Grid item xs={8} sm={6} md={6} lg={5}>
                        <Styles.TextBox>
                          <Styles.HeadertextBox>
                            <Styles.InputTitle>
                              {texts.inputLabel[2]}
                            </Styles.InputTitle>
                          </Styles.HeadertextBox>
                          <Styles.TextInput
                            name="newOnDemandDescription"
                            $setFontSize
                            disableError
                          />
                        </Styles.TextBox>
                      </Grid>
                      <Grid item xs={8} sm={6} md={6} lg={7}>
                        <Styles.TextBox>
                          <Styles.HeadertextBox>
                            <Styles.InputTitle>
                              {texts.inputLabel[3]}
                            </Styles.InputTitle>
                          </Styles.HeadertextBox>
                          <Styles.TextInput
                            name="newOnDemandDetails"
                            $setFontSize
                            disableError
                          />
                        </Styles.TextBox>
                      </Grid>
                    </Grid>
                  </>
                }
              </Styles.ModalContent>
              <Grid container spacing={2} direction="row" justify="flex-end">
                <Grid item xs={10} sm={2} md={3} lg={2}>
                  <ButtonOutlined onClick={() => handleCloseModal()}>
                    {texts.OnDemandModal.cancelButtom}
                  </ButtonOutlined>
                </Grid>
                <Grid item xs={10} sm={5} md={6} lg={5}>
                  <ButtonOutlined defaultFontColor type="submit" name="button">
                    {texts.OnDemandModal.confirmButton}
                  </ButtonOutlined>
                </Grid>
              </Grid>
            </FormHolder>
          </Styles.ModalContainer>
        </Fade>
      </Styles.StyledIformationModal>
    </>
  );
}

export default AddOnDemandModal;
