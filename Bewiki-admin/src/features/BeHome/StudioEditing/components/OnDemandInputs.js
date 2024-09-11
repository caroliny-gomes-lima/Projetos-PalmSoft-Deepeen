import React from "react";
import Styles from "../styles/Styles";
import { Grid } from "@material-ui/core";
import { ContainerInputs } from "../../../../components/inputs/inputsComponents";
import InputImageComponent from "../../../../components/inputs/inputImage";
import { Texts } from "../../../../config";
import { connect } from "react-redux";
import { Filters } from "../../../../lib";
import { Switch } from "../../../../components";

function OnDemandInputs() {
  const texts = Texts["pt-BR"].beHome.RegisterApartment.OnDemand;

  const data = [
    {
      name: "Garanta seu Estacionamento",
      price: "R$ 45,00",
      tagline: "Estacionamento Bepark durante toda sua estadia.",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum,",
    },
    {
      name: "Garanta seu Carro",
      price: "Valor a Consultar",
      tagline: "Automóvel Bemobi durante toda sua estadia.",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum,",
    },
    {
      name: "Sala de Reuniões",
      price: "Valor a Consultar",
      tagline:
        "Espaço de Sala de Reuniões Bework com limite de até 50 pessoas.",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum,",
    },
    {
      name: "Espaço de Trabalho",
      price: "Valor a Consultar",
      tagline: "Posição de Espaço de Trabalho Bework",
      description:
        "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. Lorem ipsum,",
    },
  ];

  const drawInputList = (data) => {
    return data.map((item) => {
      return (
        <>
          <Styles.HeaderContent>
            <Styles.SubTitle>{texts.subTitles[0]}</Styles.SubTitle>
          </Styles.HeaderContent>
          <Grid container spacing={1} direction="row" justify="spacing-">
            <Grid item xs={2} sm={1} md={1} lg={1}>
              <ContainerInputs
                $defaultMargin
                $setMarginRight
                inputLabel={"STATUS"}
              >
                <Switch defaulValue={false} color="primary" />
              </ContainerInputs>
            </Grid>
            <Grid item xs={10} sm={7} md={7} lg={6}>
              <ContainerInputs
                setBorder
                inputLabel={
                  <Styles.InputTitle>{texts.inputLabel[0]}</Styles.InputTitle>
                }
                children={
                  <Styles.TextInput
                    defaultValue={item?.name}
                    disableError
                    readOnly
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={5}>
              <ContainerInputs
                setBorder
                inputLabel={
                  <Styles.InputTitle>{texts.inputLabel[1]}</Styles.InputTitle>
                }
                children={
                  <Styles.TextInput
                    defaultValue={Filters.convertMoneyTextMask(item.price)}
                    disableError
                    readOnly
                  />
                }
                textHelper={texts.textHelper[0]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <ContainerInputs
                inputLabel={
                  <Styles.InputTitle>{texts.inputImage}</Styles.InputTitle>
                }
                children={
                  <InputImageComponent
                    type="file"
                    textClick={"Selecionar Imagem"}
                  />
                }
                textHelper={texts.textHelper[0]}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
              <Styles.TextBox>
                <Styles.HeadertextBox>
                  <Styles.InputTitle>{texts.inputLabel[2]}</Styles.InputTitle>
                </Styles.HeadertextBox>
                <Styles.TextInput
                  defaultValue={item.tagline}
                  $setFontSize
                  readOnly
                  disableError
                />
              </Styles.TextBox>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={7}>
              <Styles.TextBox>
                <Styles.HeadertextBox>
                  <Styles.InputTitle>{texts.inputLabel[3]}</Styles.InputTitle>
                </Styles.HeadertextBox>
                <Styles.TextInput
                  defaultValue={item.description}
                  $setFontSize
                  disableError
                />
              </Styles.TextBox>
            </Grid>
          </Grid>
        </>
      );
    });
  };
  return (
    <>
      <Styles.HeaderContent>
        <Styles.Title>{texts.title}</Styles.Title>
      </Styles.HeaderContent>

      {data && drawInputList(data)}
    </>
  );
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(OnDemandInputs);
