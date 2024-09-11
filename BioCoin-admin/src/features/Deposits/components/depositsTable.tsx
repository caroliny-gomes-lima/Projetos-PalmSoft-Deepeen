import React, { useState } from "react";
import Styles from "../styles/Styles";
import {
  TablePagination,
  Table,
  IconButtonContained,
  Input,
  InputSearch,
} from "../../../components";
import { Colors, Spacing, fonts } from "../../../config";
import { Texts } from "../../../config";
import { CircularProgress, Grid } from "@material-ui/core";
import { Check, Clear, Edit, Visibility } from "@material-ui/icons";
import { FormFull } from "form-full";
import { api } from "../../../services";
import { hooks, masks } from "../../../utils";
import { customModal, errorModal } from "../../../components/modals/utils";
import alerts from "../../../utils/Alerts";
import ResponseError from "../../../services/helpers/ResponseError";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { MdOutlineRemoveRedEye } from "react-icons/md";

type DepositsTableProps = {
  transactions: any;
  currencyValue: any;
  setCurrencyValue: any;
  getAllDeposits: any;
  page: any;
  setPage: any;
  sendSelectedFilter: any;
  filterValue: any;
  currentButton: any;
  loadingData: any;
  setCurrentButton: any;
  size: any;
};

function DepositsTable({
  transactions,
  currencyValue,
  setCurrencyValue,
  getAllDeposits,
  page,
  setPage,
  sendSelectedFilter,
  filterValue,
  currentButton,
  loadingData,
  setCurrentButton,
  size,
}: DepositsTableProps) {
  const texts = Texts["pt-BR"].Main.UsersStatement;

  const { loading, call } = hooks.useRequest();

  const Status = (data?: string) => {
    if (data === "OVERDUE") {
      return (
        <Styles.StatusContainer $disabled>Atrasado</Styles.StatusContainer>
      );
    } else if (data === "PENDING") {
      return (
        <Styles.StatusContainer $disabled>Pendente</Styles.StatusContainer>
      );
    } else if (data === "CANCELED") {
      return (
        <Styles.StatusContainer $disabled>Cancelado</Styles.StatusContainer>
      );
    } else if (data === "INACTIVE") {
      return <Styles.StatusContainer $disabled>Inativo</Styles.StatusContainer>;
    } else if (data === "PAID" || data === "COMPLETED") {
      return <Styles.StatusContainer>Pago</Styles.StatusContainer>;
    }
  };

  const saveCurrency = (data: any) => {
    call(null, api.editCurrency(data), (response) => {
      if (response.ok) {
        customModal.close();
        alerts.alertSuccess("Cotação atualizada com sucesso!");
        setCurrencyValue(response?.data?.value);
      } else {
        const errorResponse = new ResponseError(response);
        errorResponse.alertMessage();
      }
    });
  };

  const editCurrency = () => {
    customModal.setInfos(
      "Editar Cotação",
      [],
      null,
      null,
      <FormFull onSubmit={(data) => saveCurrency(data)}>
        <Styles.ModalContainer>
          <Input
            startAdornment="R$ "
            required={Texts["pt-BR"].login.passwordMessage}
            mask={masks.inputMoney}
            maskToSubmit={masks.removeNumericMask}
            name="value"
            defaultValue={currencyValue.toFixed(2)}
            label="Cotação"
          />
          <Styles.ButtonModal
            fullWidth={false}
            type="submit"
            action="submit"
            name="save"
          >
            Salvar
          </Styles.ButtonModal>
        </Styles.ModalContainer>{" "}
      </FormFull>,
      false,
      false
    );
  };

  const acceptTransaction = (id: string) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.acceptTransaction(id), (data) => {
      if (data.ok) {
        setPage(page);
      } else {
        const errorResponse = new ResponseError(data);
        errorResponse.alertMessage();
      }
    });
  };

  const paymentMethod = (method: string) => {
    if (method === "BILLET") {
      return "Boleto";
    } else if (method === "PIX") {
      return "PIX";
    } else if (method === "CREDIT_CARD") {
      return "Cartão de Crédito";
    } else if (method === "DEBIT_CARD") {
      return "Cartão de Débito";
    } else {
      return null;
    }
  };

  const goToPaymentLink = (idDeposity: string) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(null, api.getPaymentLink(idDeposity), (data) => {
      if (data.ok) {
        window.open(data.data.invoiceUrl, "_blank");
      } else {
        const errorResponse = new ResponseError(data);
        errorResponse.alertMessage();
      }
    });
  };

  const modalList = (data: any) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data?.map((item) => {
          return (
            <Styles.ListItem>
              <Styles.ListText $label>{item.label}</Styles.ListText>
              <Styles.ListText>{item.value}</Styles.ListText>
            </Styles.ListItem>
          );
        })}
      </div>
    );
  };

  const modalContent = (idDeposity: string, isPending: boolean) => {
    return (
      <>
        <Styles.DeposityModalContainer>
          <Styles.DeposityModalTitle> Depósito</Styles.DeposityModalTitle>
          <Styles.DeposityModalContent>
            {transactions?.content.map((item) => {
              if (item?.id === idDeposity) {
                let data = [
                  {
                    label: "Nome",
                    value: item?.user?.name,
                  },
                  {
                    label: "CPF",
                    value: masks.CPF(item?.user?.cpf),
                  },
                  {
                    label: "E-mail",
                    value: item?.user?.email,
                  },
                  {
                    label: "Data",
                    value: masks.formatDate(item?.createdAt.split("T")[0]),
                  },
                  {
                    label: "N° Pedido",
                    value: item?.transactionParent?.asaasId
                      ? item?.transactionParent?.asaasId
                      : "Dado não encontrado",
                  },
                  {
                    label: "Forma de Pagamento",
                    value: item?.transactionParent
                      ? paymentMethod(item?.transactionParent?.method)
                      : "Dado não encontrado",
                  },
                  {
                    label: "Status",
                    value:
                      item?.status === "OVERDUE"
                        ? "Atrasado"
                        : item?.status === "PENDING"
                        ? "Pendente"
                        : item?.status === "CANCELED"
                        ? "Cancelado"
                        : item?.status === "INACTIVE"
                        ? "Inativo"
                        : item?.status === "PAID" ||
                          item?.status === "COMPLETED"
                        ? "Pago"
                        : null,
                  },
                  {
                    label: "Dado Total",
                    value: item?.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }),
                  },
                  {
                    label: "Cotação Biocoin",
                    value: item?.valueUnit
                      ? item?.valueUnit.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })
                      : "Dado não encontrado",
                  },
                ];
                return modalList(data);
              }
            })}
          </Styles.DeposityModalContent>
          <div
            style={{
              marginTop: 20,
            }}
          >
            {isPending ? (
              <>
                <Styles.DeposityModalButtons>
                  <Styles.ApproveButton
                    startIcon={<CheckIcon />}
                    onClick={() => {
                      acceptTransaction(idDeposity);
                    }}
                  >
                    Aprovar
                  </Styles.ApproveButton>
                  <Styles.DisapproveButton
                    startIcon={<CloseIcon />}
                    onClick={() => {
                      goToPaymentLink(idDeposity);
                    }}
                  >
                    Negar
                  </Styles.DisapproveButton>
                  <Styles.CloseButton onClick={customModal.close}>
                    Fechar
                  </Styles.CloseButton>
                </Styles.DeposityModalButtons>
              </>
            ) : (
              <>
                <Styles.CloseButton onClick={customModal.close}>
                  Fechar
                </Styles.CloseButton>
              </>
            )}
          </div>
        </Styles.DeposityModalContainer>
      </>
    );
  };

  const seeDeposity = (idDeposity: string, isPending: boolean) => {
    customModal.setInfos(
      "",
      [""],
      null,
      null,
      modalContent(idDeposity, isPending),
      true,
      null
    );
  };

  const formatDate = (date: string) => {
    let getDate = date.split("T");
    let getTime = getDate[1].split(".");
    return (
      <>
        {getDate[0]} {getTime[0]}
      </>
    );
  };

  const onChangeFilterSubmit = (pageNumber, selectedFilter) => {
    filterValue.current = selectedFilter;
    sendSelectedFilter(pageNumber, selectedFilter);
  };

  const getCurrentTable = (pageNumber, status) => {
    getAllDeposits(pageNumber, status);
  };

  const NoData = () => {
    return (
      <Styles.NoDataContainer>
        <Styles.NoDataText>{"Sem Dados"}</Styles.NoDataText>
      </Styles.NoDataContainer>
    );
  };

  return (
    <>
      <Styles.Container>
        {loadingData ? (
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
        ) : transactions ? (
          <>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid container spacing={2} item xs={12} sm={12} md={12} lg={6}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Styles.ButtonFilter
                    $focus={currentButton === "all"}
                    onClick={() => {
                      getCurrentTable(0, "");
                      setCurrentButton("all");
                    }}
                  >
                    {texts.allButton}
                  </Styles.ButtonFilter>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Styles.ButtonFilter
                    $focus={currentButton === "pending"}
                    onClick={() => {
                      getCurrentTable(0, "PENDING");
                      setCurrentButton("pending");
                    }}
                  >
                    {texts.pendingButton}
                  </Styles.ButtonFilter>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <Styles.ButtonFilter
                    $focus={currentButton === "completed"}
                    onClick={() => {
                      getCurrentTable(0, "COMPLETED");
                      setCurrentButton("completed");
                    }}
                  >
                    {texts.approvedButton}
                  </Styles.ButtonFilter>
                </Grid>
              </Grid>
            </Grid>
            <TablePagination
              defaultAlignItems
              size={size}
              page={page}
              setPage={setPage}
              itemRowPages={transactions?.content.length}
              totalPages={transactions?.totalPages}
              totalRowPages={transactions?.totalElements}
              headerTable={
                <Styles.HeaderTable>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={4}
                    direction="row"
                    justifyContent="flex-end"
                    style={{ display: "flex" }}
                  >
                    <Styles.ValueContainer>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Styles.ButtonIconFilter onClick={editCurrency}>
                          <Edit />
                        </Styles.ButtonIconFilter>
                        <Styles.ValueTitle>Cotação</Styles.ValueTitle>
                      </div>
                      <Styles.ValueSubtitle>
                        {currencyValue
                          ? currencyValue?.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })
                          : "---"}
                      </Styles.ValueSubtitle>
                    </Styles.ValueContainer>
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={4}>
                    <InputSearch
                      onEnterKeyPress={(data) => onChangeFilterSubmit(0, data)}
                    />
                  </Grid>
                </Styles.HeaderTable>
              }
              table={
                <Table
                  id="DepositsTable"
                  data={transactions?.content}
                  headers={texts.headerTable}
                  lastAlign={false}
                  firstColumn={false}
                  renderItemColumns={(item) => [
                    formatDate(item.createdAt),
                    item.transactionParent?.asaasId
                      ? item.transactionParent?.asaasId
                      : "Dado não encontrado",
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p style={{ margin: 0 }}>{item.user?.email}</p>
                      <p style={{ margin: 0 }}>{masks.CPF(item.user?.cpf)}</p>
                    </div>,
                    item.value?.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }),
                    item.transactionParent?.method ? (
                      <p style={{ margin: 0, fontFamily: fonts.bold }}>
                        {paymentMethod(item.transactionParent?.method)}
                      </p>
                    ) : (
                      <p style={{ fontFamily: fonts.bold }}>
                        Dado não encontrado
                      </p>
                    ),
                    item.valueUnit
                      ? `Cotação Biocoin \n ${item.valueUnit?.toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}`
                      : "Dado não encontrado",
                    Status(item?.status),
                    <Styles.AreaButtonsTable>
                      <>
                        {item.status === "PENDING" ? (
                          <>
                            <IconButtonContained
                              loading={loading}
                              disabled={loading}
                              changeColor={Colors.blue}
                              Icon={<MdOutlineRemoveRedEye />}
                              changeIconColor={Colors.white}
                              onClick={() => seeDeposity(item?.id, true)}
                            />
                            <IconButtonContained
                              loading={loading}
                              disabled={loading}
                              changeColor={Colors.green}
                              Icon={<CheckIcon />}
                              changeIconColor={Colors.white}
                              onClick={() => acceptTransaction(item?.id)}
                            />
                            <IconButtonContained
                              loading={loading}
                              disabled={loading}
                              changeColor={Colors.red}
                              Icon={<Clear />}
                              changeIconColor={Colors.white}
                              onClick={() => goToPaymentLink(item?.id)}
                            />
                          </>
                        ) : (
                          <IconButtonContained
                            loading={loading}
                            disabled={loading}
                            changeColor={Colors.blue}
                            Icon={<MdOutlineRemoveRedEye />}
                            changeIconColor={Colors.white}
                            onClick={() => seeDeposity(item?.id, false)}
                          />
                        )}
                      </>
                    </Styles.AreaButtonsTable>,
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

export default DepositsTable;
