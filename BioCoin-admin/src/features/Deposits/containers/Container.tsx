import React from "react";
import Styles from "../styles/Styles";
import { DepositsTable } from "../components";
import { api } from "../../../services";
import { hooks } from "../../../utils";
import { CircularProgress } from "@material-ui/core";
import { Spacing } from "../../../config";
import { errorModal } from "../../../components/modals/utils";

function Container() {
  const { loading, call } = hooks.useRequest();
  const [pageNumber, setPageNumber] = React.useState<any>(1);
  const [transactions, setTransactions] = React.useState<any>(null);
  const [currencyValue, setCurrencyValue] = React.useState<number>(0);
  const [currentButton, setCurrentButton] = React.useState<string>("all");
  const [pageSize, setPageSize] = React.useState<any>(5);
  const FilterData = React.useRef<any>();
  
  const Mount = React.useCallback(() => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      null,
      api.getAllDeposits({
        page: 0,
        size: 5,
        type: "PURCHASE",
      }),
      (data) => {
        if (data.ok) {
          setTransactions(data?.data);
        }
      }
    );
    call(null, api.getCurrency(), (data) => {
      if (data.ok) {
        setCurrencyValue(data?.data?.value);
      }
    });
  }, []);
  React.useEffect(Mount, [Mount]);

  const getTableAllDeposits = (pageNumber, status) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      null,
      api.getAllDeposits({
        page: pageNumber - 1,
        size: pageSize,
        type: "PURCHASE",
        status: status,
      }),
      (data) => {
        if (data) {
          setTransactions(data?.data);
        }
      }
    );
  };

  const GetPage = (newPage: number, newPageSize?: any) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    let getStatus = "";
    if (currentButton === "all") {
      getStatus = "";
    } else if (currentButton === "pending") {
      getStatus = "PENDING";
    } else {
      getStatus = "COMPLETED";
    }

    call(
      null,
      api.getAllDeposits({
        page: newPage - 1,
        size: newPageSize ? newPageSize : pageSize,
        filter: FilterData.current,
        type: "PURCHASE",
        status: getStatus,
      }),
      (response) => {
        if (response.ok) {
          if (newPageSize) {
            setPageSize(newPageSize);
          }

          setPageNumber(newPage);
          setTransactions(response?.data);
        }
      }
    );
  };

  const getSelectedFilterTable = (newPage, data) => {  
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      null,
      api.getAllDeposits({
        page:  newPage,
        size: pageSize,
        filter: data,
        type: "PURCHASE",
      }),
      (response) => {
        if (response.ok) {
          setTransactions(response?.data);
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
        <DepositsTable
          size={pageSize}
          currencyValue={currencyValue}
          setCurrencyValue={setCurrencyValue}
          transactions={transactions}
          getAllDeposits={getTableAllDeposits}
          page={pageNumber}
          setPage={GetPage}
          sendSelectedFilter={getSelectedFilterTable}
          filterValue={FilterData}
          currentButton={currentButton}
          setCurrentButton={setCurrentButton}
          loadingData={loading}
        />
      )}
    </>
  );
}

export default Container;
