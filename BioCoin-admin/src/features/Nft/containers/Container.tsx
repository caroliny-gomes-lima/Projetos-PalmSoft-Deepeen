import React from "react";
import { hooks } from "../../../utils";
import { NftTables } from "../components";
import { api } from "../../../services";
import { Spacing } from "../../../config";
import { CircularProgress } from "@material-ui/core";
import Styles from "../styles/Styles";
import alerts from "../../../utils/Alerts";
import { errorModal } from "../../../components/modals/utils";

function Container() {
  const { loading, call } = hooks.useRequest();
  const [registeredNftsDataTable, setRegisteredNftsDataTable] =
    React.useState<any>(null);
  const [RequestNftDataTable, setRequestNftDataTable] =
    React.useState<any>(null);
  const [currentButton, setCurrentButton] = React.useState<string>("all");
  const [RequestNftPageNumber, setRequestNftPageNumber] =
    React.useState<any>(1);
  const [RegisterNftPageNumber, setRegisterNftPageNumber] =
    React.useState<any>(1);
  const [pageSize, setPageSize] = React.useState<any>(5);

  const [userList, setUserList] = React.useState<any>([]);
  const [nftList, stNftList] = React.useState<any>([]);

  const RequestNftFilterData = React.useRef<any>();
  const RegisterNftFilterData = React.useRef<any>();

  const MountRequestNft = React.useCallback(() => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "requestNftTable",
      api.RequestedNfts({ page: 0, size: pageSize }),
      async (response) => {
        if (response.ok) {
          setRequestNftDataTable(response.data);
        }
      }
    );
    call(null, api.NftsAvailable({ page: 0, size: 1000 }), async (response) => {
      if (response.ok) {
        stNftList(response.data?.content);
      }
    });
    call(
      null,
      api.GetUserAll({ page: 0, size: 5000, blocked: false }),
      async (response) => {
        if (response.ok) {
          let newList = response.data?.content?.map((item) => {
            return { id: item.id, fullName: item.name, cpf: item.cpf };
          });
          setUserList(newList);
        }
      }
    );
  }, []);
  React.useEffect(MountRequestNft, [MountRequestNft]);

  const MountRegisterNft = React.useCallback(() => {
    call(
      "registeredNftsTable",
      api.Nfts({ page: 0, size: pageSize }),
      async (response) => {
        if (response.ok) {
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call(
              null,
              api.NftsImage(item.id, item.imageId),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setRegisteredNftsDataTable({ ...response.data, content: newList });
        }
      }
    );
  }, []);
  React.useEffect(MountRegisterNft, [MountRegisterNft]);

  const GetCurrentTable = (pageNumber, status) => {
    call(
      null,
      api.RequestedNfts({
        page: pageNumber - 1,
        size: pageSize,
        status: status,
      }),
      (response) => {
        if (response) {
          setRequestNftDataTable(response.data);
        }
      }
    );
  };

  const getSelectedFilterRequestNftTable = (data) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "requestNftList",
      api.RequestedNfts({ page: 0, size: pageSize, filter: data }),
      async (response) => {
        if (response.ok) {
          setRequestNftDataTable(response.data);
        }
      }
    );
  };

  const getSelectedFilterRegisterNftTable = (data) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "registeredNftsList",
      api.Nfts({ page: 0, size: pageSize, filter: data }),
      async (response) => {
        if (response.ok) {
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call(
              null,
              api.NftsImage(item.id, item.imageId),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setRegisteredNftsDataTable({ ...response.data, content: newList });
        }
      }
    );
  };

  const GetRequestNftPage = (newPage: number, newPageSize?: any) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    if (newPageSize) {
      setPageSize(newPageSize);
    }
    call(
      "requestNftList",
      api.RequestedNfts({
        page: newPage - 1,
        size: newPageSize ? newPageSize : pageSize,
        filter: RequestNftFilterData.current,
      }),
      async (response) => {
        if (response.ok) {
          setRequestNftPageNumber(newPage);
          setRequestNftDataTable(response.data);
        }
      }
    );
  };

  const GetRegisterNftPage = (newPage: number, newPageSize?: any) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    if (newPageSize) {
      setPageSize(newPageSize);
    }
    call(
      "registeredNftsList",
      api.Nfts({
        page: newPage - 1,
        size: newPageSize ? newPageSize : pageSize,
        filter: RegisterNftFilterData.current,
      }),
      async (response) => {
        if (response.ok) {
          setRegisterNftPageNumber(newPage);
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call(
              null,
              api.NftsImage(item.id, item.imageId),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setRegisteredNftsDataTable({ ...response.data, content: newList });
        }
      }
    );
  };

  return (
    <>
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
      ) : (
        <NftTables
          nftList={nftList}
          userList={userList}
          loadRequestNftTable={MountRequestNft}
          loadRegisterNftTable={MountRegisterNft}
          loading={loading}
          RegisteredNftData={registeredNftsDataTable}
          RequestNftData={RequestNftDataTable}
          currentButton={currentButton}
          setCurrentButton={setCurrentButton}
          getCurrentTable={GetCurrentTable}
          sendSelectedFilterRequestNft={getSelectedFilterRequestNftTable}
          sendSelectedFilterRegisterNft={getSelectedFilterRegisterNftTable}
          RegisterFilterValue={RegisterNftFilterData}
          ResquestFilterValue={RequestNftFilterData}
          size={pageSize}
          RequestNftPage={RequestNftPageNumber}
          setRequestNftPage={GetRequestNftPage}
          RegisteredNftPage={RegisterNftPageNumber}
          setRegisteredNftPage={GetRegisterNftPage}
        />
      )}
    </>
  );
}

export default Container;
