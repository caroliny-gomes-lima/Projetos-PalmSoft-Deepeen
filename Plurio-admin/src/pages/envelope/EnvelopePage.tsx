import React, { useContext, useState } from "react";
import { ButtonMenu, ContentFeedback, CustomText, ItensPage, Pagination, Table } from "../../components";
import { Colors, fonts } from "../../config";
import Styles from "./styles/Styles";
import ptBr from "../../config/texts/pt-br";
import { ExpandMore } from "@material-ui/icons";
import Filters from "./components/Filters";
//import Filters from "./components/Filters";
//import ModalRegistry from "./components/ModalRegistry";
//import ModalView from "./components/ModalView";
//import DeleteUserModal from "./components/DeleteUserModal";


/* integração dados da tabela */
const MOCK_DATA = [
    {
        id: 0,
        responsibleName: "Centro Universitário Cidade Verde",
        documentNumber: "938",
        subscribersNumber: "15",
        signatureNumber: "132",
        status: "Ativo",
        creationDate: "05/04/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 1,
        responsibleName: "Imobiliária Sans Lancelot",
        documentNumber: "215",
        subscribersNumber: "04",
        signatureNumber: "58",
        status: "Pendente",
        creationDate: "15/03/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 2,
        responsibleName: "Centro Universitário Cidade Verde",
        documentNumber: "938",
        subscribersNumber: "15",
        signatureNumber: "132",
        status: "Ativo",
        creationDate: "05/04/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 3,
        responsibleName: "Imobiliária Sans Lancelot",
        documentNumber: "215",
        subscribersNumber: "04",
        signatureNumber: "58",
        status: "Pendente",
        creationDate: "15/03/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 4,
        responsibleName: "Centro Universitário Cidade Verde",
        documentNumber: "938",
        subscribersNumber: "15",
        signatureNumber: "132",
        status: "Ativo",
        creationDate: "05/04/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 5,
        responsibleName: "Imobiliária Sans Lancelot",
        documentNumber: "215",
        subscribersNumber: "04",
        signatureNumber: "58",
        status: "Pendente",
        creationDate: "15/03/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 6,
        responsibleName: "Centro Universitário Cidade Verde",
        documentNumber: "938",
        subscribersNumber: "15",
        signatureNumber: "132",
        status: "Ativo",
        creationDate: "05/04/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 7,
        responsibleName: "Imobiliária Sans Lancelot",
        documentNumber: "215",
        subscribersNumber: "04",
        signatureNumber: "58",
        status: "Pendente",
        creationDate: "15/03/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 8,
        responsibleName: "Centro Universitário Cidade Verde",
        documentNumber: "938",
        subscribersNumber: "15",
        signatureNumber: "132",
        status: "Ativo",
        creationDate: "05/04/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 9,
        responsibleName: "Imobiliária Sans Lancelot",
        documentNumber: "215",
        subscribersNumber: "04",
        signatureNumber: "58",
        status: "Pendente",
        creationDate: "15/03/2024",
        closingDate: "20/03/2024",
    },
    {
        id: 10,
        responsibleName: "Centro Universitário Cidade Verde",
        documentNumber: "938",
        subscribersNumber: "15",
        signatureNumber: "132",
        status: "Ativo",
        creationDate: "05/04/2024",
        closingDate: "20/03/2024",
    },
];

function EnvelopePage() {
    const texts = ptBr.envelope;
    const [page, setPage] = React.useState<number>(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itensPerPage, setItensPerPage] = useState(10);
    const [currentFilter, setCurrentFilter] = useState<any>(null);

    /* integração do filtro */
    const filterManager = (data?: {
        name: string;
        email: string;
    }) => { console.log(data) };

    const changePage = (number, itensPage, filter) => {
        console.log(number, itensPage, filter)
    }

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

            <Styles.SecondContainer>
                <CustomText
                    fontSize={2}
                    textColor={Colors.darkBlue}
                    fontFamily={fonts.bold}
                >
                    {texts.tableTitle}
                </CustomText>
                {/* integração do Tabela */}
                <ContentFeedback data={MOCK_DATA} loading={false}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                        <ItensPage
                            sizes={[1, 10, 15, 20]}
                            setTotal={(n) => {
                                setItensPerPage(n);
                                changePage(1, n, currentFilter);
                            }}
                            currentSize={itensPerPage}
                        />
                    </div>
                    <Table
                        lastAlign={false}
                        data={MOCK_DATA}
                        renderItemColumns={(item) => [
                            item.responsibleName,
                            item.documentNumber,
                            item.subscribersNumber,
                            item.signatureNumber,
                            item.status,
                            item.creationDate,
                            item.closingDate,
                            <ButtonMenu endIcon={<ExpandMore />} buttons={[]}>
                                Opções
                            </ButtonMenu>,
                        ]}
                        headers={{
                            table: [
                                "NOME RESPONSÁVEL",
                                "Nº DOCUMENTOS",
                                "Nº ASSINANTES",
                                "Nº ASSINATURAS",
                                "STATUS",
                                "DATA CRIAÇÃO",
                                "DATA FECHAMENTO",
                                "AÇÃO",

                            ],
                            keys: [],
                        }}
                    />
                    <Pagination
                        style={{ padding: "16px 20px", paddingTop: 0 }}
                        page={page}
                        totalPages={10}
                        setPage={(number) => setPage(number)}
                    />
                </ContentFeedback>
            </Styles.SecondContainer>
        </>
    );
}

export default EnvelopePage;
