import React from "react";
import ptBr from "../../../config/texts/pt-br";
import { Grid } from "@material-ui/core";
import Styles from "../styles/Styles";
import { masks } from "../../../utils";
import { Colors, fonts } from "../../../config";
import { CustomText } from "../../../components";
import { customModal } from "../../../components/modals/utils";

function DeleteUserModal({ item }) {
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
                    style={{ marginTop: "15px" }}
                    fontFamily={fonts.medium}
                    fontSize={1.6}
                >
                    {"Deseja realmente remover o usuário selecionado?"}
                </CustomText>
                <CustomText
                    style={{ marginBottom: "20px" }}
                    fontFamily={fonts.italic}
                    fontSize={1.5}
                    textColor={Colors.red}
                >
                    {"Atenção, esta ação é permanente e irreversível."}
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

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "12px",
                        marginTop: "40px",
                        width: "100%",
                    }}
                >
                    <Styles.CancelButton
                        fullWidth={false}
                        onClick={() => {
                            customModal.close();
                        }}
                    >
                        Voltar
                    </Styles.CancelButton>
                    <Styles.RegitryButton $defaultColor={Colors.red} fullWidth={false} action="submit">
                        {"Sim, Remover Usuário"}
                    </Styles.RegitryButton>
                </div>
            </div>
        </>
    );
}

export default DeleteUserModal;
