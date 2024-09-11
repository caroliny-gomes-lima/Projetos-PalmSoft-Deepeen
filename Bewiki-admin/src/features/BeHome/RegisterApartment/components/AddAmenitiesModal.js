import React from "react";
import Styles from "../styles/AmenitiesModalStyles";
import { Texts } from "../../../../config";
import { FormHolder } from "../../../../FormConfig";
import { ButtonOutlined, InputImage } from "../../../../components";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { Fade, Grid } from "@material-ui/core";
import { Add, ArrowRightAltRounded, InsertPhoto } from "@material-ui/icons";

function AddAmenitiesModal() {
  const [open, setOpen] = React.useState(false);
  const text = Texts["pt-BR"].beHome.RegisterApartment.Amenities;

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <FormHolder>
        <Styles.TextFieldButton
          onClick={() => handleOpenModal()}
          endIcon={<Add />}
        >
          {text.addButton}
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
                <Styles.Title>{text.AmenitiesModal.title}</Styles.Title>
              </Styles.HeaderContainer>
              <Styles.SubTitle>{text.AmenitiesModal.textTitle}</Styles.SubTitle>

              <Styles.Title $defaultMarginTop $defaultMarginBottom>
                {text.AmenitiesModal.subTitle}
              </Styles.Title>

              <Styles.ModalContent>
                <Grid container spacing={1} direction="row">
                  <Grid item xs={8} sm={12} md={12} lg={12}>
                    <ContainerInputs
                      inputLabel={
                        <Styles.InputTitle>
                          {text.AmenitiesModal.inputLabel[0]}
                        </Styles.InputTitle>
                      }
                      children={
                        <InputImage
                          setStartIcon={
                            <InsertPhoto style={{ marginRight: "5px" }} />
                          }
                          variant="standard"
                          textClick="Selecionar Imagem"
                          name="Icon"
                          type="file"
                          nextInput="name"
                          fileInputRef="Icon"
                          color="secondary"
                          disableError={true}
                        />
                      }
                      showUploadInfo
                    />
                  </Grid>
                  <Grid item xs={8} sm={12} md={12} lg={12}>
                    <ContainerInputs
                      setBorder
                      inputLabel={
                        <Styles.InputTitle>
                          {text.AmenitiesModal.inputLabel[1]}
                        </Styles.InputTitle>
                      }
                      children={
                        <Styles.TextInput
                          name="AmenitiesdName01"
                          //defaultValue={item?.name}
                          disableError
                        />
                      }
                    />
                  </Grid>
                </Grid>
              </Styles.ModalContent>
              <Grid container spacing={2} direction="row" justify="flex-end">
                <Grid item xs={10} sm={2} md={3} lg={2}>
                  <ButtonOutlined onClick={() => handleCloseModal()}>
                    {text.AmenitiesModal.cancelButtom}
                  </ButtonOutlined>
                </Grid>
                <Grid item xs={10} sm={5} md={6} lg={5}>
                  <ButtonOutlined
                    defaultFontColor
                    onClick={() => handleCloseModal()}
                  >
                    {text.AmenitiesModal.confirmButton}
                  </ButtonOutlined>
                </Grid>
              </Grid>
            </Styles.ModalContainer>
          </Fade>
        </Styles.StyledIformationModal>
      </FormHolder>
    </>
  );
}

export default AddAmenitiesModal;
