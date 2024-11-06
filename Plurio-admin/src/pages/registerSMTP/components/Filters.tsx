import React from "react";
import ptBr from "../../../config/texts/pt-br";
import Styles from "../styles/Styles";
import { Input, InputDate, SelectComponent } from "../../../components";
import { FormFull } from "form-full";
import { Grid } from "@material-ui/core";
import { masks, validations } from "../../../utils";
import { AccessTime } from "@material-ui/icons";
import { Colors, Spacing } from "../../../config";

function Filters({ onSubmit, loading }) {
    const texts = ptBr.registerSMTP.filters;
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
                    <Grid item xs={3}>
                        <Input
                            name="idContainer"
                            label={texts.idContainer}
                            placeholder={texts.idContainer}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Input
                            type="number"
                            name="timeStamp"
                            label={texts.timeStamp}
                            placeholder={"0"}
                        />
                    </Grid>
                    <Grid item xs={2}>
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
                    <Grid item xs={1}>
                        <SelectComponent
                            disableError
                            name="success"
                            label={texts.success}
                            defaultValue={0}
                            options={[
                                { value: 0, label: "Todos" },
                                { value: 1, label: "Ativo" },
                                { value: 2, label: "Pendente" },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={1}>
                        <SelectComponent
                            disableError
                            name="error"
                            label={texts.error}
                            defaultValue={0}
                            options={[
                                { value: 0, label: "Todos" },
                                { value: 1, label: "Ativo" },
                                { value: 2, label: "Pendente" },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <InputDate
                            name="date"
                            label={texts.date}
                            disableError
                            minDate={new Date()}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Input
                            disableError
                            mask={masks.formatHour}
                            placeholder="00:00"
                            validation={validations.validateTimeRange}
                            name="time"
                            label={texts.time}
                            endAdornment={<AccessTime style={{ fontSize: Spacing(2), color: Colors.darkBlue }} />}
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
