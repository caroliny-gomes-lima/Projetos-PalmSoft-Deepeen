import React from "react";
import Styles from "../styles/Styles";
import { DocumentsTable } from "../components";
import { hooks } from "../../../utils";
import { api } from "../../../services";
import { Spacing } from "../../../config";
import { CircularProgress } from "@material-ui/core";
import { errorModal } from "../../../components/modals/utils";

function Container() {
  const { loading, call } = hooks.useRequest();
  const [isMounted, setMount] = React.useState<boolean>(false);
  const [UsersListDocsData, setUsersListDocsData] = React.useState<any>({});
  const [pageNumber, setPageNumber] = React.useState<any>(1);
  const [currentButton, setCurrentButton] = React.useState<boolean>(false);
  const [pageSize, setPageSize] = React.useState<any>(5);
  const [flag, setFlag] = React.useState<number>(0);
  const FilterData = React.useRef<any>();

  const Mount = React.useCallback(() => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "DocsList",
      api.GetAllUserDataDocs({
        page: 0,
        size: pageSize,
        accepted: null,
      }),
      async (response) => {
        if (response.ok) {
          setUsersListDocsData(response.data);
        }
      }
    );
  }, []);
  React.useEffect(() => {
    if (!isMounted) {
      Mount();
      setMount(true);
    }
  }, [Mount, isMounted]);

  const getSelectedFilterTable = (pageNumber, data) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "DocsList",
      api.GetAllUserDataDocs({
        page: pageNumber,
        size: pageSize,
        filter: data,
        accepted: currentButton,
      }),
      async (response) => {
        if (response.ok) {
          setUsersListDocsData(response.data);
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
      "DocsList",
      api.GetAllUserDataDocs({
        page: newPage - 1,
        size: newPageSize ? newPageSize : pageSize,
        accepted: currentButton === true ? true : null,
      }),
      async (response) => {
        if (response.ok) {
          setUsersListDocsData(response.data);
          setPageNumber(newPage);
        }
      }
    );
  };

  const getCurrentDataTable = (index) => {
    const getStatus = () => {
      if (index === 0) {
        return null;
      } else if (index === 1) {
        return "PENDING";
      } else {
        return "ACCEPTED";
      }
    };
    call(
      "DocsList",
      api.GetAllUserDataDocs({
        size: pageSize,
        status: getStatus(),
      }),
      async (response) => {
        if (response.ok) {
          setUsersListDocsData(response.data);
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
        <DocumentsTable
          size={pageSize}
          tableData={UsersListDocsData}
          page={pageNumber}
          setPage={GetPage}
          loadTable={Mount}
          loading={loading}
          getCurrentDataTable={getCurrentDataTable}
          sendSelectedFilter={getSelectedFilterTable}
          filterValue={FilterData}
          setCurrentButton={setCurrentButton}
          flag={flag}
          setFlag={setFlag}
        />
      )}
    </>
  );
}

export default Container;
