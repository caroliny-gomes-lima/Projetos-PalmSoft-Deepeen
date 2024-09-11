import React from "react";
import Styles from "../styles/Styles";
import { Colors, Spacing } from "../../../config";
import { Texts } from "../../../config";
import { Avatar, CircularProgress, Grid } from "@material-ui/core";
import { Add, Clear, Update } from "@material-ui/icons";

import { customModal } from "../../../components/modals/utils";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import CheckIcon from "@material-ui/icons/Check";
import { hooks, masks } from "../../../utils";
import ResquestNftModal from "./insideModal/ResquestNftModal";
import AddNft from "./AddNft";
import EditNft from "./EditNft";
import DeleteNft from "./insideModal/DeleteNft";
import {
  TablePagination,
  Table,
  IconButtonContained,
  IconsBase64,
  InputSearch,
  ButtonOutlined,
} from "../../../components";
import NftSolicitation from "./NftSolicitation";
import { api } from "../../../services";
import ResponseError from "../../../services/helpers/ResponseError";
import alerts from "../../../utils/Alerts";

type UserTableProps = {
  RegisteredNftData: any;
  RequestNftData: any;
  loadRequestNftTable: any;
  loadRegisterNftTable: any;
  loading: any;
  currentButton: any;
  setCurrentButton: any;
  getCurrentTable: any;
  sendSelectedFilterRequestNft: any;
  ResquestFilterValue: any;
  sendSelectedFilterRegisterNft: any;
  RegisterFilterValue: any;
  RequestNftPage: any;
  setRequestNftPage: any;
  RegisteredNftPage: any;
  setRegisteredNftPage: any;
  size: any;
  userList: any;
  nftList: any;
};

function NftTables({
  RegisteredNftData,
  RequestNftData,
  loadRequestNftTable,
  loadRegisterNftTable,

  currentButton,
  setCurrentButton,
  getCurrentTable,
  sendSelectedFilterRequestNft,
  ResquestFilterValue,
  sendSelectedFilterRegisterNft,
  RegisterFilterValue,
  RequestNftPage,
  setRequestNftPage,
  RegisteredNftPage,
  setRegisteredNftPage,

  size,
  userList,
  nftList,
}: UserTableProps) {
  const texts = Texts["pt-BR"].Main.Nft;
  const [extraViewId, setExtraViewId] = React.useState<number>(0);
  const [nftRequestData, setNftRequestData] = React.useState<any>(null);
  const [ItemDataTable, setItemDataTable] = React.useState<any>(null);
  const { loading, call } = hooks.useRequest();

  const DrawModalInfo = (ResponseMessageError: any) => {
    const texts = Texts["pt-BR"].Main.Nft.infoModal;
    return (
      <>
        <Styles.contentModalInfo>
          <Styles.ImageIcon alt="" src={IconsBase64.Alert} />
          <Styles.TextsModal>{texts.titleEdit}</Styles.TextsModal>
          <Styles.PaddingModal>
            <ButtonOutlined fullWidth={false} onClick={customModal.close}>
              {texts.cancelButton}
            </ButtonOutlined>
          </Styles.PaddingModal>
        </Styles.contentModalInfo>
      </>
    );
  };

  async function acceptSubmit(item) {
    call(null, api.AcceptOrDenyNfts(item.id, true), (response) => {
      const errorResponse = new ResponseError(response);
      if (response.ok) {
        alerts.alertSuccess(texts.requestNftModal.ResponseTextSuccess[0]);
        customModal.close();
        loadRequestNftTable();
      } else {
        customModal.setInfos(
          "",
          [""],
          null,
          null,
          DrawModalInfo(errorResponse.message),
          null
        );
      }
    });
  }

  async function denySubmit(item) {
    call(null, api.AcceptOrDenyNfts(item.id, false), (response) => {
      if (response.ok) {
        alerts.alertSuccess(texts.requestNftModal.ResponseTextSuccess[1]);
        customModal.close();
        loadRequestNftTable();
      } else {
        const errorResponse = new ResponseError(response);
        customModal.setInfos(
          "",
          [""],
          null,
          null,
          DrawModalInfo(errorResponse.message),
          null
        );
      }
    });
  }

  const formatDate = (date: string) => {
    let getDate = date.split("T");
    let getTime = getDate[1].split(".");
    return (
      <>
        {getDate[0]} {getTime[0]}
      </>
    );
  };

  function handleButton(e, item) {
    if (e.currentTarget.name === "addButton") {
      setExtraViewId(1);
    } else if (e.currentTarget.name === "editButton") {
      setExtraViewId(2);
      setItemDataTable(item);
    } else if (e.currentTarget.name === "solicitationButton") {
      setExtraViewId(3);
      if (item) {
        setNftRequestData(item);
      } else {
        setNftRequestData(null);
      }
    }
  }

  const handleButtonSelectTable = (pageNumber, status) => {
    getCurrentTable(pageNumber, status);
  };

  const NoData = () => {
    return (
      <Styles.NoDataContainer>
        <Styles.NoDataText>{"Sem Dados"}</Styles.NoDataText>
      </Styles.NoDataContainer>
    );
  };

  function NftModal(item: any, readOnly?: boolean) {
    const texts = Texts["pt-BR"].Main.Nft;
    customModal.setInfos(
      texts.requestNftModal.title,
      [],
      null,
      null,
      <ResquestNftModal
        denySubmit={denySubmit}
        acceptSubmit={acceptSubmit}
        readOnly={readOnly}
        item={item}
      />,
      null
    );
  }

  function DeleteNftModal(item) {
    customModal.setInfos(
      "",
      [""],
      null,
      null,
      <DeleteNft item={item.id} loadTable={loadRegisterNftTable} />,
      null
    );
  }

  const Status = (data?: string) => {
    if (data === "PENDING") {
      return (
        <Styles.StatusContainer $disabled>
          {texts.status[0]}
        </Styles.StatusContainer>
      );
    } else if (data === "REJECTED") {
      return (
        <Styles.StatusContainer $disabled>
          {texts.status[2]}
        </Styles.StatusContainer>
      );
    } else if (data === "COMPLETED") {
      return <Styles.StatusContainer>{texts.status[1]}</Styles.StatusContainer>;
    } else if (data === "INACTIVE") {
      return (
        <Styles.StatusContainer $disabled>
          {texts.status[3]}
        </Styles.StatusContainer>
      );
    }
  };

  const onChangeResquestNftFilterSubmit = (selectedFilter) => {
    ResquestFilterValue.current = selectedFilter;
    sendSelectedFilterRequestNft(selectedFilter);
  };

  const onChangeRegisterNftFilterSubmit = (selectedFilter) => {
    RegisterFilterValue.current = selectedFilter;
    sendSelectedFilterRegisterNft(selectedFilter);
  };

  function DrawRequestNftTable() {
    return (
      <>
        <Styles.TitleTable>{texts.titleRequestTable}</Styles.TitleTable>
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
          ) : RequestNftData ? (
            <>
              <Grid container spacing={3} direction="row" alignItems="center">
                <Grid item xs={12} sm={6} md={6} lg={2}>
                  <Styles.ButtonFilter
                    $focus={currentButton === "all"}
                    onClick={() => {
                      handleButtonSelectTable(0, "");
                      setCurrentButton("all");
                    }}
                  >
                    {texts.allButton}
                  </Styles.ButtonFilter>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2}>
                  <Styles.ButtonFilter
                    $focus={currentButton === "PENDING"}
                    onClick={() => {
                      handleButtonSelectTable(0, "PENDING");
                      setCurrentButton("PENDING");
                    }}
                  >
                    {texts.pendingButton}
                  </Styles.ButtonFilter>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2}>
                  <Styles.ButtonFilter
                    $focus={currentButton === "COMPLETED"}
                    onClick={() => {
                      handleButtonSelectTable(0, "COMPLETED");
                      setCurrentButton("COMPLETED");
                    }}
                  >
                    {texts.approvedButton}
                  </Styles.ButtonFilter>
                </Grid>
              </Grid>
              <TablePagination
                size={size}
                page={RequestNftPage}
                setPage={setRequestNftPage}
                itemRowPages={RequestNftData?.content?.length}
                totalPages={RequestNftData?.totalPages}
                totalRowPages={RequestNftData?.totalElements}
                headerTable={
                  <Styles.HeaderTable>
                    <Grid item xs={4} sm={6} md={6} lg={1}>
                      <IconButtonContained
                        name="solicitationButton"
                        changeColor={Colors.lightBlue}
                        Icon={<Add />}
                        changeIconColor={Colors.white}
                        onClick={(e) => handleButton(e, null)}
                      />
                    </Grid>
                    <Grid item xs={8} sm={6} md={6} lg={4}>
                      <InputSearch
                        onEnterKeyPress={(data) =>
                          onChangeResquestNftFilterSubmit(data)
                        }
                      />
                    </Grid>
                  </Styles.HeaderTable>
                }
                table={
                  <Table
                    id="requestNftTable"
                    data={RequestNftData.content}
                    headers={texts.RequestNftHeaderTable}
                    lastAlign={false}
                    firstColumn={false}
                    renderItemColumns={(item) => [
                      formatDate(item.createdAt),
                      <Grid item xs={5} sm={5} md={5} lg={5}>
                        {item.user.email + " " + masks.CPF(item.user.cpf)}
                      </Grid>,
                      item.digitalWallet
                        ? item.digitalWallet
                        : "dado não encontrado",
                      Status(item.status),
                      <Styles.AreaButtonsTable>
                        <>
                          {item.status === "INACTIVE" && (
                            <IconButtonContained
                              IconBase64
                              name="solicitationButton"
                              changeColor={Colors.gray}
                              Icon={IconsBase64.pen}
                              changeIconColor={Colors.black}
                              onClick={(e) => handleButton(e, item)}
                            />
                          )}

                          {item.status === "PENDING" && (
                            <>
                              <Styles.ButtonTable>
                                <IconButtonContained
                                  loading={loading}
                                  disabled={loading}
                                  changeColor={Colors.blue}
                                  Icon={<MdOutlineRemoveRedEye />}
                                  changeIconColor={Colors.white}
                                  onClick={() => NftModal(item)}
                                />
                                <IconButtonContained
                                  loading={loading}
                                  disabled={loading}
                                  changeColor={Colors.green}
                                  Icon={<CheckIcon />}
                                  changeIconColor={Colors.white}
                                  onClick={() => acceptSubmit(item)}
                                />
                                <IconButtonContained
                                  loading={loading}
                                  disabled={loading}
                                  changeColor={Colors.red}
                                  Icon={<Clear />}
                                  changeIconColor={Colors.white}
                                  onClick={() => denySubmit(item)}
                                />
                              </Styles.ButtonTable>
                            </>
                          )}
                          {item.status === "COMPLETED" && (
                            <IconButtonContained
                              loading={loading}
                              disabled={loading}
                              changeColor={Colors.blue}
                              Icon={<MdOutlineRemoveRedEye />}
                              changeIconColor={Colors.white}
                              onClick={() => NftModal(item, true)}
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

  function DrawRegisteredNftTable() {
    return (
      <>
        <Styles.TitleTable $defaultMargin>
          {texts.titleRegisteredTable}
        </Styles.TitleTable>
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
          ) : RegisteredNftData ? (
            <>
              <TablePagination
                size={size}
                page={RegisteredNftPage}
                setPage={setRegisteredNftPage}
                itemRowPages={RegisteredNftData?.content?.length}
                totalPages={RegisteredNftData?.totalPages}
                totalRowPages={RegisteredNftData?.totalElements}
                headerTable={
                  <Styles.HeaderTable>
                    <Grid item xs={4} sm={6} md={6} lg={1}>
                      <IconButtonContained
                        name="addButton"
                        changeColor={Colors.lightBlue}
                        Icon={<Add />}
                        changeIconColor={Colors.white}
                        onClick={(e) => handleButton(e, null)}
                      />
                    </Grid>
                    <Grid item xs={8} sm={6} md={6} lg={4}>
                      <InputSearch
                        onEnterKeyPress={(data) =>
                          onChangeRegisterNftFilterSubmit(data)
                        }
                      />
                    </Grid>
                  </Styles.HeaderTable>
                }
                table={
                  <Table
                    id="registeredNftsTable"
                    data={RegisteredNftData.content}
                    headers={texts.RegisteredNftHeaderTable}
                    lastAlign={false}
                    firstColumn={true}
                    renderItemColumns={(item) => [
                      item.id,
                      <Avatar
                        alt=" "
                        src={
                          item.img
                            ? `data:image/jpeg;base64,${item.img}`
                            : IconsBase64.avatar
                        }
                      />,
                      item.name,
                      item.collection,
                      <Styles.AreaButtonsTable>
                        <IconButtonContained
                          IconBase64
                          name="editButton"
                          changeColor={Colors.gray}
                          Icon={IconsBase64.pen}
                          changeIconColor={Colors.black}
                          onClick={(e) => handleButton(e, item)}
                        />
                        <IconButtonContained
                          IconBase64
                          changeColor={Colors.red}
                          Icon={IconsBase64.trash}
                          changeIconColor={Colors.white}
                          onClick={() => DeleteNftModal(item)}
                        />
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

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 20,
        }}
      >
        {extraViewId === 0 ? (
          <>
            {DrawRequestNftTable()}
            {DrawRegisteredNftTable()}
          </>
        ) : extraViewId === 1 ? (
          <AddNft
            setChange={setExtraViewId}
            loadTable={() => {
              loadRegisterNftTable();
              loadRequestNftTable();
            }}
          />
        ) : extraViewId === 2 ? (
          <EditNft
            setChange={setExtraViewId}
            ItemDataTable={ItemDataTable}
            loadTable={() => {
              loadRegisterNftTable();
              loadRequestNftTable();
            }}
          />
        ) : extraViewId === 3 ? (
          <NftSolicitation
            userList={userList}
            nftList={nftList}
            editData={nftRequestData}
            setChange={(id) => {
              setExtraViewId(id);
              setNftRequestData(null);
            }}
            loadTable={loadRequestNftTable}
          />
        ) : null}
      </div>
    </>
  );
}

export default NftTables;
