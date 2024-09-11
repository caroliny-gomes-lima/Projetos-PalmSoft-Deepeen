import React from "react";
import Styles from "../styles/Styles";
import {
  TablePagination,
  Table,
  InputAutocomplete,
  InputSearch,
} from "../../../components";
import { Colors, Spacing } from "../../../config";
import { Texts } from "../../../config";
import { CircularProgress, Grid } from "@material-ui/core";
import { Check, Clear } from "@material-ui/icons";
import { FormFull } from "form-full";
import { customModal } from "../../../components/modals/utils";
import {
  DocumentImage,
  SelfieDocumentImage,
  AddressDocumentImage,
} from "./modaInside";
import { masks } from "../../../utils";

type UserDocsTableProps = {
  tableData: any;
  page: any;
  setPage: any;
  loadTable: any;
  loading: any;
  sendSelectedFilter?: any;
  filterValue: any;
  setCurrentButton?: any;
  getCurrentDataTable?: any;
  size: string;
  flag: number;
  setFlag: any;
};

function DocumentsTable({
  tableData,
  page,
  setPage,
  loadTable,
  loading,
  sendSelectedFilter,
  filterValue,
  setCurrentButton,
  getCurrentDataTable,
  size,
  flag,
  setFlag,
}: UserDocsTableProps) {
  const texts = Texts["pt-BR"].Main.CheckDocuments;

  const formatData = (item: string) => {
    const date = item.split("-");
    const day = date[2];
    const month = date[1];
    const year = date[0];

    return `${day}/${month}/${year}`;
  };

  function DocumentPhotoModal(item) {
    const texts = Texts["pt-BR"].Main.CheckDocuments.DocumentPhotoModal;
    customModal.setInfos(
      texts.title,
      [],
      null,
      null,
      <DocumentImage item={item} loadTable={loadTable} />,
      null
    );
  }

  function SelfeDocumentImageModal(item) {
    const texts = Texts["pt-BR"].Main.CheckDocuments.SelfieDocumentModal;
    customModal.setInfos(
      texts.title,
      [],
      null,
      null,
      <SelfieDocumentImage item={item} loadTable={loadTable} />,
      null
    );
  }

  // function AddressDocumentImageModal(item) {
  //   const texts = Texts["pt-BR"].Main.CheckDocuments.AddressDocumentModal;
  //   customModal.setInfos(
  //     texts.title,
  //     [],
  //     null,
  //     null,
  //     <AddressDocumentImage item={item} />,
  //     null
  //   );
  // }

  const onChangeFilterSubmit = (pageNumber, selectedFilter) => {
    filterValue.current = selectedFilter;
    sendSelectedFilter(pageNumber, selectedFilter);
  };

  const handleButtonTable = (index, current) => {
    //let pageNumber = 0;
    setFlag(index);
    setCurrentButton(current);
    getCurrentDataTable(index);
  };

  const NoData = () => {
    return (
      <Styles.NoDataContainer>
        <Styles.NoDataText>{"Sem Dados"}</Styles.NoDataText>
      </Styles.NoDataContainer>
    );
  };

  const drawDocPhotoActionButtons = (value: any) => {
    if (value.docs.registerStatus === "ACCEPTED") {
      return (
        <>
          <Styles.AreaButtonsTable>
            <Styles.LinkButton onClick={() => DocumentPhotoModal(value)}>
              Foto.jpg
            </Styles.LinkButton>
          </Styles.AreaButtonsTable>
        </>
      );
    } else if (value.docs.registerStatus === "MISSING") {
      return (
        <>
          <p style={{ margin: 0 }}>Documento não enviado</p>
        </>
      );
    } else if (value.docs.registerStatus === "REJECTED") {
      return (
        <>
          <p style={{ margin: 0 }}>Documento rejeitado</p>
        </>
      );
    } else {
      return (
        <>
          <Styles.AreaButtonsTable>
            <Styles.LinkButton
              onClick={() => {
                DocumentPhotoModal(value);
              }}
            >
              Foto.jpg
            </Styles.LinkButton>
          </Styles.AreaButtonsTable>
        </>
      );
    }
  };

  const drawDocSelfieActionButtons = (value: any) => {
    if (value.docs.selfieStatus === "ACCEPTED") {
      return (
        <>
          <Styles.AreaButtonsTable>
            <Styles.LinkButton
              onClick={() => {
                SelfeDocumentImageModal(value);
              }}
            >
              Foto.jpg
            </Styles.LinkButton>
          </Styles.AreaButtonsTable>
        </>
      );
    } else if (value.docs.selfieStatus === "MISSING") {
      return (
        <>
          <p style={{ margin: 0 }}>Selfie não enviada</p>
        </>
      );
    } else if (value.docs.selfieStatus === "REJECTED") {
      return (
        <>
          <p style={{ margin: 0 }}>Selfie rejeitada</p>
        </>
      );
    } else {
      return (
        <>
          <Styles.AreaButtonsTable>
            <Styles.LinkButton
              onClick={() => {
                SelfeDocumentImageModal(value);
              }}
            >
              Foto.jpg
            </Styles.LinkButton>
          </Styles.AreaButtonsTable>
        </>
      );
    }
  };

  return (
    <>
      <Styles.Container>
        {loading ? (
          <Styles.LoadingContainer>
            <CircularProgress
              size={120}
              style={{
                color: "black",
                alignSelf: "center",
                justifyContent: "center",
                marginBlock: Spacing(3),
              }}
            />
          </Styles.LoadingContainer>
        ) : tableData ? (
          <>
            <Grid container spacing={3} direction="row" alignItems="center">
              <Grid item xs={12} sm={6} md={6} lg={2}>
                <Styles.ButtonFilter
                  $focus={flag === 0}
                  onClick={() => {
                    handleButtonTable(0, null);
                  }}
                >
                  {texts.allButton}
                </Styles.ButtonFilter>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2}>
                <Styles.ButtonFilter
                  $focus={flag === 1}
                  onClick={() => {
                    handleButtonTable(1, null);
                  }}
                >
                  {texts.pendingButton}
                </Styles.ButtonFilter>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2}>
                <Styles.ButtonFilter
                  $focus={flag === 2}
                  onClick={() => {
                    handleButtonTable(2, true);
                  }}
                >
                  {texts.approvedButton}
                </Styles.ButtonFilter>
              </Grid>
            </Grid>
            <TablePagination
              size={size}
              page={page}
              setPage={setPage}
              itemRowPages={tableData?.content?.length}
              totalPages={tableData?.totalPages}
              totalRowPages={tableData?.totalElements}
              headerTable={
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Styles.HeaderTable>
                    <InputSearch
                      onEnterKeyPress={(data) => onChangeFilterSubmit(0, data)}
                    />
                  </Styles.HeaderTable>
                </Grid>
              }
              table={
                <Table
                  id="DepositsAllTable"
                  data={tableData.content}
                  headers={texts.headerTable}
                  firstColumn={true}
                  renderItemColumns={(item) => [
                    item.id,
                    item.name,
                    <Grid item xs={5} sm={5} md={5} lg={5}>
                      {item.email + " " + masks.CPF(item.cpf)}
                    </Grid>,
                    <Grid item xs={5} sm={5} md={5} lg={5}>
                      {masks.inputMaskTELWithDDD(item.phone) +
                        "  " +
                        formatData(item.birthDate)}
                    </Grid>,
                    <>{drawDocPhotoActionButtons(item)}</>,

                    <>{drawDocSelfieActionButtons(item)}</>,

                    // <Styles.AreaButtonsTable>
                    //   <Styles.LinkButton onClick={() => console.log("deu")}>
                    //     Foto.jpg
                    //   </Styles.LinkButton>

                    //   <Styles.ButtonTable
                    //     onClick={() => AddressDocumentImageModal(item)}
                    //   >
                    //     <Styles.IconBox $customColor={Colors.green}>
                    //       <Check />
                    //     </Styles.IconBox>
                    //     <Styles.IconBox $customColor={Colors.red}>
                    //       <Clear />
                    //     </Styles.IconBox>
                    //   </Styles.ButtonTable>
                    // </Styles.AreaButtonsTable>,
                  ]}
                />
              }
            />
          </>
        ) : (
          <>{NoData()}</>
        )}
      </Styles.Container>
    </>
  );
}

export default DocumentsTable;
