import React from "react";
import { CustomText } from "../../components";
import { Colors, fonts } from "../../config";
import Styles from "./styles/Styles";
import ptBr from "../../config/texts/pt-br";
import Filters from "./components/Filters";
import NumberCards from "./components/NumberCards";
import Charts from "./components/Charts";

/* integração dados da tabela */
const TOTAL_SUBSCRIPTION_DATA = {
    totalWaitingData: "1.293",
    totalCompletedData: "8.704",
}

const TOTAL_ENVELOPE = {
    totalEnvelopeData: "80.000",
    totalPendantsData: "50.000",
    totalEnvelopeCompletedData: "15",
    totalMediumDocksByEnvelope: "1,45",
};

function DashboardPage() {
    const texts = ptBr.dashboard;

    /* integração do filtro */
    const filterManager = (data?: {
        name: string;
        email: string;
    }) => { console.log(data) };

    return (
        <>
            <Styles.FilterContainer>
                <CustomText
                    style={{ marginBottom: "20px" }}
                    textColor={Colors.darkBlue}
                    fontSize={2}
                    fontFamily={fonts.bold}
                >
                    {texts.filters.title}
                </CustomText>
                {/* integração do filtro */}
                <Filters onSubmit={(data) => filterManager(data)} loading={false} />
            </Styles.FilterContainer>
            {/* integração dos cards numericos */}
            <NumberCards dataSubscriptions={TOTAL_SUBSCRIPTION_DATA} dataEnvelope={TOTAL_ENVELOPE} />
            {/* integração dos graficos */}
            <Charts />
        </>
    );
}

export default DashboardPage;
