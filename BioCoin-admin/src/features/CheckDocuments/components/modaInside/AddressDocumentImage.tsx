import React from "react";
import Styles from "../../styles/Styles";
import { Colors, Texts } from "../../../../config";
import { Grid } from "@material-ui/core";
import { ButtonContained, ButtonOutlined, IconsBase64 } from "../../../../components";
import { Check, Close } from "@material-ui/icons";
//import { customModal } from "../../../../components/modals/utils";

function AddressDocumentImage({item}) {
  const texts = Texts["pt-BR"].Main.CheckDocuments.AddressDocumentModal;


  // const DrawModalInfo = () => {
  //   const texts = Texts["pt-BR"].Main.CheckDocuments.infoModal;
  //   return (
  //     <>
  //       <Styles.contentModalInfo>
  //         <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
  //         <Styles.TextsModalInfo>{texts.titleEdit}</Styles.TextsModalInfo>
  //         <Styles.PaddingModal>
  //           <ButtonOutlined fullWidth={false} onClick={customModal.close}>
  //             {texts.cancelButton}
  //           </ButtonOutlined>
  //         </Styles.PaddingModal>
  //       </Styles.contentModalInfo>
  //     </>
  //   );
  // };

  return (
    <>
       <Styles.Container $changeBackground>
        <Grid container spacing={1} direction="row" justifyContent="center">
          <Grid item xs={12} sm={6} md={6} lg={8}>
            <Styles.ImageBox>
              <img
                src={
                  "https://www.opovo.com.br/_midias/png/2019/10/25/750x500/1_nova_carteira_de_identidade_25_10_19-10316920.png"
                }
                style={{
                  height: "250px",
                  width: " 310px",
                  transform: "rotate(90deg)",
                  borderRadius: "10px",
                  border: "solid 2px",
                  color: Colors.white,
                }}
                alt=""
              />
            </Styles.ImageBox>
          </Grid>

  
        </Grid>
      </Styles.Container>
      
      <Styles.PaddingModal>
        <ButtonContained
          startIcon={<Check />}
          customColor={Colors.green}
          fullWidth={false}
        >
          {texts.confirmButton[0]}
        </ButtonContained>

        <ButtonContained
          startIcon={<Close />}
          customColor={Colors.red}
          fullWidth={false}
        >
          {texts.confirmButton[1]}
        </ButtonContained>

        <ButtonOutlined fullWidth={false}>
          {texts.cancelButton}
        </ButtonOutlined>
      </Styles.PaddingModal>
    </>
  );
}

export default AddressDocumentImage;
