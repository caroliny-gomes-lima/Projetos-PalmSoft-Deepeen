import React from "react";
import ptBr from "../../../config/texts/pt-br";
import Styles from "../styles/Styles";
import { CustomText, Input, InputDate, SelectComponent } from "../../../components";
import { FormFull } from "form-full";
import { Grid } from "@material-ui/core";
import { Colors, fonts } from "../../../config";

function Filters({ onSubmit, loading }) {
    const texts = ptBr.dashboard.filters;
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
                    <Grid item xs={2}>
                        <SelectComponent
                            disableError
                            name="partner"
                            label={texts.partner}
                            defaultValue={0}
                            options={[
                                { value: 0, label: "Todos" },
                                { value: 1, label: "Ativo" },
                                { value: 2, label: "Pendente" },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <SelectComponent
                            disableError
                            name="token"
                            label={texts.token}
                            defaultValue={0}
                            options={[
                                { value: 0, label: "Todos" },
                                { value: 1, label: "Ativo" },
                                { value: 2, label: "Pendente" },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={4}>
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

                    <Grid item xs={4}>
                        <Styles.PeriodContainer>
                            <InputDate
                                label={"Período"}
                                name="startDate"
                                disableError
                                minDate={new Date()}
                            />
                            <CustomText
                                fontSize={1.8}
                                textColor={Colors.darkBlue}
                                fontFamily={fonts.bold}
                                style={{ marginTop: 45 }}
                            >
                                {"até"}
                            </CustomText>
                            <InputDate
                                name="endDate"
                                disableError
                                minDate={addOneDay(minDate)}
                                justifyFlexEnd
                            />

                        </Styles.PeriodContainer>
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
            </FormFull >
        </>
    );
}

export default Filters;
