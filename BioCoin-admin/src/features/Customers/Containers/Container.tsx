import React from "react";
import { CustomersTable } from "../components";
import { hooks } from "../../../utils";
import { api } from "../../../services";
import Styles from "../styles/Styles";
import { CircularProgress } from "@material-ui/core";
import { Spacing } from "../../../config";
import { errorModal } from "../../../components/modals/utils";
function Container() {
  const { loading, call } = hooks.useRequest();
  const [CustomersListData, setCustomersListData] = React.useState<any>({});
  const [pageNumber, setPageNumber] = React.useState<any>(1);
  const [pageSize, setPageSize] = React.useState<any>(5);
  const FilterData = React.useRef<any>();

  const Mount = React.useCallback(() => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "CustomersTable",
      api.GetUserAll({ page: 0, size: pageSize, admin: false }),
      async (response) => {
        if (response.ok) {
          setCustomersListData(response.data);
          setPageNumber(1);
        }
      }
    );
  }, []);
  React.useEffect(Mount, [Mount]);

  const getSelectedFilterTable = (pageNumber, data) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "CustomersTable",
      api.GetUserAll({
        page: pageNumber,
        size: pageSize,
        filter: data,
        admin: false,
      }),
      async (response) => {
        if (response.ok) {
          setCustomersListData(response.data);
        }
      }
    );
  };

  const GetPage = (newPage: number, newPageSize?: any) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    if (newPageSize) {
      setPageSize(newPageSize);
    }
    call(
      "CustomersTable",
      api.GetUserAll({
        page: newPage - 1,
        size: newPageSize ? newPageSize : pageSize,
        filter: FilterData.current,
        admin: false,
      }),
      async (response) => {
        if (response.ok) {
          setPageNumber(newPage);
          setCustomersListData(response.data);
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
        <CustomersTable
          size={pageSize}
          tableData={CustomersListData}
          page={pageNumber}
          setPage={GetPage}
          loadTable={Mount}
          loading={loading}
          sendSelectedFilter={getSelectedFilterTable}
          filterValue={FilterData}
        />
      )}
    </>
  );
}

export default Container;
