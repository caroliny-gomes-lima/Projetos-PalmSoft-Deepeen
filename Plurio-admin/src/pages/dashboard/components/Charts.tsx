import React from "react";
import { CustomText } from "../../../components";
import { fonts } from "../../../config";
import Styles from "../styles/Styles";
import ptBr from "../../../config/texts/pt-br";
import { Grid } from "@material-ui/core";
import { models } from "../../../utils";
import ChartBox from "../../../components/charts/chartBox";

// export type props = {};

function Charts() {
    const texts = ptBr.dashboard;

    const MOCK_CHART_DATA_ENVELOPES = {
        labels: [
            "05/04/2024", "06/04/2024", "07/04/2024", "08/04/2024",
            "09/04/2024", "10/04/2024", "11/04/2024", "12/04/2024",
            "13/04/2024", "14/04/2024", "15/04/2024", "16/04/2024",
            "17/04/2024", "18/04/2024", "19/04/2024", "20/04/2024"
        ],
        datasets: [
            {
                label: "Pendente",
                data: [3500, 1500, 2500, 3700, 4000, 3000, 4000, 2500, 1000, 2500, 2200, 3000, 4500, 1000, 2100, 3200]
            },
            {
                label: "Concluído",
                data: [1500, 500, 1000, 1200, 2000, 500, 2000, 200, 400, 1500, 1900, 2800, 2000, 1500, 1000, 2000]
            },
            {
                label: "Recusado",
                data: [500, 1000, 600, 700, 2500, 1000, 1500, 2500, 1500, 1000, 1000, 2000, 3500, 500, 800, 2500]
            },
            {
                label: "Erro",
                data: [1500, 800, 400, 1600, 1000, 200, 1000, 1000, 1000, 500, 800, 1500, 2000, 1600, 500, 1500]
            },
            {
                label: "Cancelado",
                data: [1000, 600, 1200, 1000, 500, 1500, 1200, 500, 200, 1000, 1200, 800, 1500, 1200, 500, 1000]
            },
        ]
    };

    const MOCK_CHART_TOTAL_ENVELOPES = {
        labels: [
            "Agosto", "Setembro"],
        datasets: [
            {
                label: "Pendente",
                data: [2000, 1000]
            },
            {
                label: "Concluído",
                data: [1500, 2500]
            },
            {
                label: "Recusado",
                data: [500, 1500]
            },
            {
                label: "Erro",
                data: [1500, 2000]
            },
            {
                label: "Cancelado",
                data: [1000, 600]
            },
        ]
    };

    const chartData = {
        datasets: [
            {
                label: "WhatsApp",
                data: [1500, 1500, 1500]
            },
            {
                label: "SMS",
                data: [1000, 1000, 1000]
            },
            {
                label: "E-mail",
                data: [2000, 2000, 2000]
            },
        ],
        labels: ["Agosto", "Setembro"],
    };

    return (
        <>
            <Grid container direction="column">
                <Styles.SecondContainer>
                    <CustomText
                        style={{ paddingBottom: "16px" }}
                        fontSize={2}
                        fontFamily={fonts.bold}
                    >
                        {texts.totalEnvelopeDay}
                    </CustomText>
                    <ChartBox name="teste" chartData={models.getStackedBarChart(MOCK_CHART_DATA_ENVELOPES)} />
                </Styles.SecondContainer>

                <Styles.SecondContainer>
                    <CustomText
                        style={{ paddingBottom: "16px" }}
                        fontSize={2}
                        fontFamily={fonts.bold}
                    >
                        {texts.totalEnvelopeMonth}
                    </CustomText>
                    <ChartBox name="teste" chartData={models.getStackedBarChart(MOCK_CHART_TOTAL_ENVELOPES)} />
                </Styles.SecondContainer>


                <Styles.SecondContainer>
                    <CustomText
                        style={{ paddingBottom: "16px" }}
                        fontSize={2}
                        fontFamily={fonts.bold}
                    >
                        {texts.shotMessagesMonth}
                    </CustomText>
                    <ChartBox name="teste" chartData={models.getBarChart(chartData)} />
                </Styles.SecondContainer>
            </Grid>
        </>
    );
}

export default Charts;
