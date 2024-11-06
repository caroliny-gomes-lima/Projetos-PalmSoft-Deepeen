import React, { useContext, useState } from "react";
import {
    CustomText,
    ImageUpload,
    Input,
    ThemeColorPicker,
} from "../../components";
import { Colors, fonts } from "../../config";
import ptBr from "../../config/texts/pt-br";
import Styles from "./styles/Styles";
import { FormFull, FormFullData } from "form-full";
import { Grid } from "@material-ui/core";
import { validations } from "../../utils";

/* integração dados da tabela */
const MOCK_DATA = [
    {
        id: 1,
        userName: "Centro Universitário Cidade Verde",
        email: "contato@email.com.br",
        tokenNumber: "1.254",
    },
    {
        id: 2,
        userName: "Imobiliária Sans Lancelot",
        email: "email@exemplo.com.br",
        tokenNumber: "14.558",
    },
    {
        id: 3,
        userName: "Centro Universitário Cidade Verde",
        email: "contato@email.com.br",
        tokenNumber: "1.254",
    },
    {
        id: 4,
        userName: "Imobiliária Sans Lancelot",
        email: "email@exemplo.com.br",
        tokenNumber: "14.558",
    },
    {
        id: 5,
        userName: "Centro Universitário Cidade Verde",
        email: "contato@email.com.br",
        tokenNumber: "1.254",
    },
];

function myProfilePage({ data, loading }) {
    const texts = ptBr.myProfile;
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = event.target.files?.[0]; // Verifica se há arquivo
            if (file) {
                setSelectedImage(file.name); // Exibe o nome do arquivo selecionado
            }
        } catch (error) {
            console.error("Erro ao carregar a imagem:", error);
        }
    };

    // integração
    const handleSubmit = async (
        values: FormFullData<{
            userName: string;
            email: string;
        }>
    ) => {
        if (data) {
            console.log(values);
        } else {
            console.log(values);
        }
    };

    return (
        <>
            <Styles.FirstContainer>
                <Styles.FirstContent>
                    <CustomText
                        fontSize={2}
                        fontFamily={fonts.bold}
                        textColor={Colors.darkBlue}
                    >
                        {texts.basicDataTitle}
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
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12} lg={4}>
                                <Input
                                    name="userName"
                                    label="None"
                                    placeholder="None"
                                    validation={validations.isValidFullname}
                                    required={"*Campo Obrigatório"}
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Input
                                    name="nickname"
                                    label="Apelido"
                                    placeholder="Apelido"
                                    required={"*Campo Obrigatório"}
                                />
                            </Grid>

                            <Grid item xs={12} md={6} lg={4}>
                                <Input
                                    name="email"
                                    label="E-mail"
                                    placeholder="E-mail"
                                    validation={validations.isEmailValid}
                                    required={"*Campo Obrigatório"}
                                />
                            </Grid>
                        </Grid>
                        <Styles.ButtonContainer>
                            <Styles.ClearButton
                                loading={loading}
                                disabled={loading}
                                fullWidth={false}
                                action="clear"
                            >
                                {texts.clearButton}
                            </Styles.ClearButton>
                            <Styles.RegitryButton
                                $defaultColor={Colors.purple}
                                fullWidth={false}
                                action="submit"
                            >
                                {texts.confirmButton}
                            </Styles.RegitryButton>
                        </Styles.ButtonContainer>
                    </FormFull>
                </Styles.FirstContent>
            </Styles.FirstContainer>

            <Styles.FirstContainer $customColor>
                <Styles.FirstContent>
                    <CustomText
                        style={{ marginBottom: 15 }}
                        fontSize={2}
                        fontFamily={fonts.bold}
                        textColor={Colors.darkBlue}
                    >
                        {texts.themeEditProfileTitle}
                    </CustomText>
                    <FormFull onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={12} lg={3}>
                                <ThemeColorPicker label={texts.primaryColorLabel} />
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <ThemeColorPicker label={texts.secundaryColorLabel} />
                            </Grid>

                            <Grid item xs={12} md={6} lg={6}>
                                <ImageUpload
                                    label={texts.imageLabel}
                                    placeholder={
                                        selectedImage ? selectedImage : "Sem arquivo selecionado"
                                    }
                                    onChange={handleImageChange}
                                />
                            </Grid>
                        </Grid>
                        <Styles.ButtonContainer>
                            <Styles.ClearButton
                                loading={loading}
                                disabled={loading}
                                fullWidth={false}
                                action="clear"
                            >
                                {texts.clearButton}
                            </Styles.ClearButton>
                            <Styles.RegitryButton
                                $defaultColor={Colors.purple}
                                fullWidth={false}
                                action="submit"
                            >
                                {texts.confirmButton}
                            </Styles.RegitryButton>
                        </Styles.ButtonContainer>
                    </FormFull>
                </Styles.FirstContent>
            </Styles.FirstContainer>
        </>
    );
}

export default myProfilePage;
