import React, { useContext, useState } from "react";
import { ButtonMenu, ContentFeedback, CustomText, ItensPage, Pagination, Table } from "../../components";

import { Colors, fonts } from "../../config";
import Styles from "./styles/Styles";
import ptBr from "../../config/texts/pt-br";
import { Add, ExpandMore } from "@material-ui/icons";
import Filters from "./components/Filters";
import { customModal } from "../../components/modals/utils";
import ModalRegistry from "./components/ModalRegistry";
import { RiPencilFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";
import ModalView from "./components/ModalView";
import DeleteUserModal from "./components/DeleteUserModal";


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

function UsersPage() {
    const texts = ptBr.users;
    const [page, setPage] = React.useState<number>(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itensPerPage, setItensPerPage] = useState(10);
    const [currentFilter, setCurrentFilter] = useState<any>(null);

    /* integração do filtro */
    const filterManager = (data?: {
        name: string;
        email: string;
    }) => { console.log(data) };

    const openRegisterModal = () => {
        customModal.setInfos(
            "Cadastrar Usuário",
            [],
            null,
            null,
            <ModalRegistry />,
            null,
            null,
        );
    };

    const changePage = (number, itensPage, filter) => {
        console.log(number, itensPage, filter)
    }


    /* integração do Modal visualizar dados */
    const openModalView = (item: any) => {
        customModal.setInfos(
            "Visualizar Dados do Usuário",
            [],
            {
                onClick: () => {
                    customModal.close();
                },
                label: "Voltar",
            },
            null,
            <ModalView item={item} />,
            null,
            null,
        );
    };

    /* integração do Modal edição dados */
    const openEditModal = (data) => {
        customModal.setInfos(
            "Editar Usuário",
            [],
            null,
            null,
            <ModalRegistry data={data} onSubmit={data} />,
            null,
            null,
        );
    };

    /* integração do Modal deletar usuário */
    const DeleteModal = (item: string) => {
        customModal.setInfos(
            "Remover Usuário",
            [],
            null,
            null,
            <DeleteUserModal item={item} />,
            null,
            null,
        );
    };


    const getButtons = (item: any): any[] => {
        return [
            {
                label: "Visualizar Dados do Usuário",
                icon: IoMdEye,
                onClick: () => openModalView(item),
            },
            {
                label: "Editar Usuário",
                icon: RiPencilFill,
                onClick: () => openEditModal(item),
            },
            {
                label: <div style={{ color: Colors.red }}>{"Remover Usuário"}</div>,
                icon: (props) => <IoMdTrash {...props} style={{ color: Colors.red }} />,
                onClick: () => DeleteModal(item),
            },
        ];
    };


    return (
        <>
            <Styles.FirstContainer $customColor>
                <Styles.FirstContent>
                    <CustomText fontSize={2} fontFamily={fonts.bold} textColor="white">
                        {texts.title}
                    </CustomText>
                    <CustomText fontSize={1.8} fontFamily={fonts.light} textColor="white">
                        {texts.subTitle}
                    </CustomText>
                </Styles.FirstContent>

                <Styles.RegitryButton
                    endIcon={<Add />}
                    fullWidth={false}
                    onClick={() => openRegisterModal()}
                >
                    Cadastrar
                </Styles.RegitryButton>
            </Styles.FirstContainer>

            <Styles.FilterContainer>
                <CustomText
                    style={{ paddingBottom: "20px" }}
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
                    style={{ paddingBottom: "8px" }}
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
                            item.userName,
                            item.email,
                            item.tokenNumber,
                            null,
                            null,
                            <ButtonMenu endIcon={<ExpandMore />} buttons={getButtons(item)}>
                                Opções
                            </ButtonMenu>,
                        ]}
                        headers={{
                            table: [
                                "NOME",
                                "E-MAIL",
                                "Nº DE TOKENS",
                                "",
                                "",
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

export default UsersPage;
