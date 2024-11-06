import React, { useState } from "react";
import { CustomText, Input, InputTags } from "../../../components/index";
import { Grid } from "@material-ui/core";
import { masks, validations } from "../../../utils";
import { Colors, fonts } from "../../../config";
import Styles from "../styles/Styles";
import { FormFull, FormFullData } from "form-full";
import { customModal } from "../../../components/modals/utils";

function ModalRegistry({ data, onSubmit }: { data?: any; onSubmit?: any }) {

    // integração serviço de cadastro POST
    const createManager = async (
        values: FormFullData<{
            userName: string;
            email: string;
        }>
    ) => {
        let submitData = {
            id: data ? data.id : "",
            userName: values.userName,
            email: values.email,
        };
    }

    // integração serviço de edição PUT
    const editManager = async (
        values: FormFullData<{
            userName: string;
            email: string;
        }>
    ) => {
        let submitData = {
            id: data ? data.id : "",
            userName: values.userName,
            email: values.email,
        };
    }

    // integração
    const handleSubmit = async (
        values: FormFullData<{
            userName: string;
            email: string;
        }>
    ) => {
        if (data) {
            editManager(values);
        } else {
            createManager(values);
        }
    };


    return (
        <>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: "clamp(300px, 20vw, 650px)",
                    paddingInline: "25px",
                }}
            >
                <CustomText
                    style={{ marginTop: "15px" }}
                    fontFamily={fonts.medium}
                    fontSize={1.6}
                >
                    {data ? "Edite os dados do usuário selecionado:" : "Cadastre um novo usuário a partir dos dados abaixo:"}
                </CustomText>
                <CustomText
                    style={{ marginBottom: "20px" }}
                    fontFamily={fonts.italic}
                    fontSize={1.5}
                    textColor={Colors.purple}
                >
                    {"O (*) indica campo obrigatório."}
                </CustomText>
                <FormFull onSubmit={handleSubmit}>
                    <Grid alignItems="flex-end" container spacing={2}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Input
                                disableError
                                name="userName"
                                label="None"
                                defaultValue={data?.userName || ""}
                                validation={validations.isValidFullname}
                                required={"*Campo Obrigatório"}

                            />
                        </Grid>
                        <Grid item xs={12} md={6} lg={12}>
                            <Input
                                disableError
                                name="email"
                                label="E-mail"
                                defaultValue={data?.email || ""}
                                validation={validations.isEmailValid}
                                required={"*Campo Obrigatório"}

                            />
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
                        <Styles.RegitryButton $defaultColor={Colors.purple} fullWidth={false} action="submit">
                            Confirmar {data ? "Edição" : "Cadastro"}
                        </Styles.RegitryButton>
                    </div>
                </FormFull>
            </div>
        </>
    );
}

export default ModalRegistry;
