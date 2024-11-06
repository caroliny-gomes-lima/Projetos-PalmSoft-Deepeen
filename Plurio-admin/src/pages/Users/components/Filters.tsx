import React from "react";
import ptBr from "../../../config/texts/pt-br";
import Styles from "../styles/Styles";
import { Input } from "../../../components";
import { FormFull } from "form-full";
import { Grid } from "@material-ui/core";
import { validations } from "../../../utils";

function Filters({ onSubmit, loading }) {
    const texts = ptBr.users.filters;
    return (
        <>
            <FormFull onSubmit={(data) => onSubmit(data)}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Input
                            name="name"
                            label={texts.name}
                            placeholder={texts.name}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            name="email"
                            label={texts.email}
                            placeholder={texts.email}
                            validation={validations.isEmailValid}
                        />
                    </Grid>
                </Grid>
                <Styles.ButtonContainer>
                    <Styles.Clear
                        loading={loading}
                        disabled={loading}
                        fullWidth={false}
                        action="clear"
                    >
                        Limpar
                    </Styles.Clear>
                    <Styles.Submit
                        loading={loading}
                        disabled={loading}
                        fullWidth={false}
                        action="submit"
                    >
                        Aplicar Filtros
                    </Styles.Submit>
                </Styles.ButtonContainer>
            </FormFull>
        </>
    );
}

export default Filters;
