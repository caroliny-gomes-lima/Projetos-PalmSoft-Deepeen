import React, { useContext, useState } from "react";
import { ButtonContained, CustomText } from "../../../components";
import { Colors, fonts } from "../../../config";
import Styles from "../styles/Styles";
import ptBr from "../../../config/texts/pt-br";
import { Grid } from "@material-ui/core";
import colors from "../../../config/colors";
import { MdOutlineAccessTimeFilled, MdDraw } from "react-icons/md";
import { FaCheck, FaListAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { BiSolidBox } from "react-icons/bi";
import { models } from "../../../utils";
import ChartBox from "../../../components/charts/chartBox";

export type props = {
    dataSubscriptions: {
        totalWaitingData: string;
        totalCompletedData: string;
    };
    dataEnvelope: {
        totalEnvelopeData: string;
        totalPendantsData: string;
        totalEnvelopeCompletedData: string;
        totalMediumDocksByEnvelope: string;
    };
};

function NumberCards({ dataSubscriptions, dataEnvelope }: props) {
    const texts = ptBr.dashboard;
    const [randomizer, setRandomizer] = React.useState<number[]>([1, 1, 1, 1]);

    const chartData = {
        values: [
            65 * randomizer[0],
            59 * randomizer[1],
            80 * randomizer[2],
            81 * randomizer[3],
        ],
        labels: ["Teste 1", "Teste 2", "Teste 3", "Teste 4"],
    };
    const chartMultiData = {
        values: [
            {
                label: "Linha 1",
                values: [
                    65 * randomizer[0],
                    59 * randomizer[1],
                    80 * randomizer[2],
                    81 * randomizer[3],
                ],
            },
            {
                label: "Linha 2",
                values: [
                    15 * randomizer[0],
                    24 * randomizer[1],
                    20 * randomizer[2],
                    50 * randomizer[3],
                ],
            },
            {
                label: "Linha 3",
                values: [
                    75 * randomizer[0],
                    79 * randomizer[1],
                    30 * randomizer[2],
                    11 * randomizer[3],
                ],
            },
        ],
        labels: ["Teste 1", "Teste 2", "Teste 3", "Teste 4"],
    };

    const drawCard = (IconComponent, data, text) => {
        return (
            <Grid item xs={12} md={10} lg={8}>
                <Styles.Cards>
                    <Styles.ContentCards>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: colors.purple,
                                fontSize: 25,
                            }}
                        >
                            <IconComponent />
                        </div>
                        <CustomText
                            fontSize={3}
                            textColor={Colors.darkBlue}
                            style={{ fontWeight: "bolder", alignSelf: "center" }}
                        >
                            {data}
                        </CustomText>
                    </Styles.ContentCards>
                    <CustomText
                        fontSize={1.2}
                        textColor={Colors.purple}
                        style={{ fontWeight: "bolder" }}
                    >
                        {text}
                    </CustomText>
                </Styles.Cards>
            </Grid>
        );
    };

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} md={10} lg={4}>
                    <Styles.SecondContainer>
                        <CustomText
                            fontSize={2}
                            textColor={Colors.darkBlue}
                            fontFamily={fonts.bold}
                        >
                            {texts.totalSubscriptions}
                        </CustomText>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: 10,
                                width: "100%",
                            }}
                        >
                            {drawCard(
                                MdOutlineAccessTimeFilled,
                                dataSubscriptions.totalWaitingData,
                                texts.waiting
                            )}
                            {drawCard(
                                FaCheck,
                                dataSubscriptions.totalCompletedData,
                                texts.completed
                            )}
                        </div>
                    </Styles.SecondContainer>
                </Grid>
                <Grid item xs={12} md={10} lg={8}>
                    <Styles.SecondContainer>
                        <CustomText
                            fontSize={2}
                            textColor={Colors.darkBlue}
                            fontFamily={fonts.bold}
                        >
                            {texts.totalSubscriptions}
                        </CustomText>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: 10,
                                width: "100%",
                            }}
                        >
                            {drawCard(
                                FaListAlt,
                                dataEnvelope.totalEnvelopeData,
                                texts.numberEnvelopeData
                            )}
                            {drawCard(
                                RiMailSendLine,
                                dataEnvelope.totalPendantsData,
                                texts.pendants
                            )}
                            {drawCard(
                                BiSolidBox,
                                dataEnvelope.totalEnvelopeCompletedData,
                                texts.completed
                            )}
                            {drawCard(
                                MdDraw,
                                dataEnvelope.totalMediumDocksByEnvelope,
                                texts.mediumDocksByEnvelope
                            )}
                        </div>
                    </Styles.SecondContainer>
                </Grid>
            </Grid>
        </>
    );
}

export default NumberCards;
