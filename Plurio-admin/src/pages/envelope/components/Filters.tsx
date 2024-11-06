import React from "react";
import ptBr from "../../../config/texts/pt-br";
import Styles from "../styles/Styles";
import { Input, InputDate, SelectComponent } from "../../../components";
import { FormFull } from "form-full";
import { Grid } from "@material-ui/core";

function Filters({ onSubmit, loading }) {
    const texts = ptBr.envelope.filters;
    const [timeError, setTimeError] = React.useState<any>(false);
    const [minDate, setMinDate] = React.useState<any>(new Date());

    const addOneDay = (date) => {
        const result = new Date(date);
        result.setDate(result.getDate() + 1);
        return result;
    };

    return (
        <>
            <FormFull onSubmit={(data) => onSubmit(data)}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Input
                            name="responsibleName"
                            label={texts.name}
                            placeholder={texts.name}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Input
                            name="documentNumber"
                            type="number"
                            label={texts.documentNumber}
                            placeholder={texts.documentNumber}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Input
                            name="subscribersNumber"
                            type="number"
                            label={texts.subscribersNumber}
                            placeholder={texts.subscribersNumber}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Input
                            name="signatureNumber"
                            type="number"
                            label={texts.signatureNumber}
                            placeholder={texts.signatureNumber}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={2}>
                        <SelectComponent
                            disableError
                            name="status"
                            label={texts.status}
                            defaultValue={0}
                            options={[
                                { value: 0, label: "Todos" },
                                { value: 1, label: "Ativo" },
                                { value: 2, label: "Pendente" },
                            ]}
                        />
                    </Grid>

                    <Grid container item xs={12} md={12} lg={2}>
                        <InputDate
                            name="startDate"
                            label={"Data Criação"}
                            disableError
                            minDate={new Date()}
                        />
                    </Grid>
                    <Grid container item xs={12} md={12} lg={2}>
                        <InputDate
                            name="endDate"
                            label={"Data Fechamento"}
                            disableError
                            minDate={addOneDay(minDate)}
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
