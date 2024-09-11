import React from "react";
import Styles from "../styles/Styles";
import { Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import { InputImage } from "../../../../components";

function ImageGalleryInputs() {
  const texts = Texts["pt-BR"].beHome.RegisterApartment;

  return (
    <>
      <Styles.HeaderContent>
        <Styles.Title>{texts.ImageGallery.title}</Styles.Title>
      </Styles.HeaderContent>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <ContainerInputs
            inputLabel={
              <Styles.InputTitle>
                {texts.ImageGallery.inputLabel[0]}
              </Styles.InputTitle>
            }
            children={
              <InputImage
                variant="standard"
                textClick="Selecionar Imagem"
                name="ImageGallery0"
                type="file"
                color="secondary"
                disableError={true}
              />
            }
            textHelper={texts.ImageGallery.textHelper[0]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Styles.GroupInputsImage>
            <ContainerInputs
              inputLabel={
                <Styles.InputTitle>
                  {texts.ImageGallery.inputLabel[1]}
                </Styles.InputTitle>
              }
              children={
                <InputImage
                  variant="standard"
                  textClick="Selecionar Imagem"
                  name="ImageGallery1"
                  type="file"
                  nextInput="ImageGallery2"
                  fileInputRef="ImageGallery1"
                  color="secondary"
                  disableError={true}
                />
              }
            />

            <ContainerInputs
              children={
                <InputImage
                  variant="standard"
                  textClick="Selecionar Imagem"
                  name="ImageGallery2"
                  type="file"
                  nextInput="ImageGallery3"
                  fileInputRef="ImageGallery2"
                  color="secondary"
                  $alternativeColors={2}
                  $disabled={true}
                />
              }
            />

            <ContainerInputs
              children={
                <InputImage
                  variant="standard"
                  textClick="Selecionar Imagem"
                  name="ImageGallery3"
                  type="file"
                  nextInput="ImageGallery0"
                  fileInputRef="ImageGallery3"
                  color="secondary"
                  $alternativeColors={2}
                  $disabled={true}
                />
              }
              textHelper={texts.ImageGallery.textHelper[1]}
            />
          </Styles.GroupInputsImage>
        </Grid>
      </Grid>
    </>
  );
}

export default ImageGalleryInputs;
