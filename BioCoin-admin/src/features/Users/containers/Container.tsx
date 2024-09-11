import React from "react";
import { UsersTable } from "../components";
import { hooks } from "../../../utils";
import { api } from "../../../services";
import { Spacing } from "../../../config";
import { CircularProgress } from "@material-ui/core";
import Styles from "../styles/Styles";
import { errorModal } from "../../../components/modals/utils";

function Container() {
  const { loading, call } = hooks.useRequest();
  const [usersListData, setUsersListData] = React.useState<any>({});
  const [pageNumber, setPageNumber] = React.useState<any>(1);
  const [pageSize, setPageSize] = React.useState<any>(5);
  const FilterData = React.useRef<any>();

  const Mount = React.useCallback(() => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "UsersTable",
      api.GetUserAll({ page: 0, size: pageSize, admin: true }),
      async (response) => {
        if (response.ok) {
          setUsersListData(response.data);
          setPageNumber(1);
        }
      }
    );
  }, []);
  React.useEffect(Mount, [Mount]);

  const getSelectedFilterTable = (selectedFilter) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "UsersTable",
      api.GetUserAll({
        page: 0,
        size: pageSize,
        filter: selectedFilter,
        admin: true,
      }),
      async (response) => {
        if (response.ok) {
          setUsersListData(response.data);
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
      "UsersTable",
      api.GetUserAll({
        page: newPage - 1,
        size: newPageSize ? newPageSize : pageSize,
        filter: FilterData.current,
        admin: true,
      }),
      async (response) => {
        if (response.ok) {
          setPageNumber(newPage);
          setUsersListData(response.data);
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
        <UsersTable
          size={pageSize}
          tableData={usersListData}
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
