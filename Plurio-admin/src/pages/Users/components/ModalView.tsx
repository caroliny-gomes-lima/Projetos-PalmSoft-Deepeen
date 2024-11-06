import React from "react";
import ptBr from "../../../config/texts/pt-br";
import { Grid } from "@material-ui/core";
import Styles from "../styles/Styles";
import { masks } from "../../../utils";
import { fonts } from "../../../config";
import { CustomText } from "../../../components";

function ModalView({ item }) {
    const texts = ptBr.login;

    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: "clamp(250px, 26vw, 500px)",
                    paddingInline: "25px",
                    marginBottom: "20px",
                }}
            >
                <CustomText
                    style={{ marginTop: "15px", marginBottom: "20px" }}
                    fontFamily={fonts.medium}
                    fontSize={1.6}
                >
                    {"Visualize os dados do usuário selecionado:"}
                </CustomText>
                <Grid alignItems="flex-end" container spacing={1}>
                    <Grid item xs={12} md={6} lg={12}>
                        <Styles.BoxDataInfo>
                            <CustomText fontFamily={fonts.bold} fontSize={1.6}>{"NOME"}</CustomText>
                            <CustomText>{item?.userName}</CustomText>
                        </Styles.BoxDataInfo>
                    </Grid>
                    <Grid item xs={12} md={6} lg={12}>
                        <Styles.BoxDataInfo>
                            <CustomText fontFamily={fonts.bold} fontSize={1.6}>{"E-MAIL"}</CustomText>
                            <CustomText>{item?.email}</CustomText>
                        </Styles.BoxDataInfo>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default ModalView;
