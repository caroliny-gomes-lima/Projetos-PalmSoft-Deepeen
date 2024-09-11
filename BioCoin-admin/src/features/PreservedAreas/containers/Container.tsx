import React from "react";
import { hooks } from "../../../utils";
import PreservedAreasTable from "../components/PreservedAreasTable";
import { api } from "../../../services";
import { Spacing } from "../../../config";
import { CircularProgress } from "@material-ui/core";
import Styles from "../styles/Styles";
import { customModal, errorModal } from "../../../components/modals/utils";

function Container() {
  const { loading, call } = hooks.useRequest();
  const [PreservedAreasData, setPreservedAreasData] = React.useState<any>(null);
  const [PreservedAreasParameters, setPreservedAreasParameters] =
    React.useState({
      page: 0,
      size: 5,
      filter: "",
    });

  const Mount = React.useCallback(() => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "PreservedAreasList",
      api.GetPreservedAreasList(PreservedAreasParameters),
      async (response) => {
        if (response.ok) {
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call(
              null,
              api.GetPreservedAreaImage(item.id, item.imageId1),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setPreservedAreasData({ ...response.data, content: newList });
        }
      }
    );
    //errorModal.close();
  }, []);
  React.useEffect(Mount, [Mount]);

  const GetPage = (newPage: number, newPageSize?: any) => {
    const Parameters = {
      page: newPage - 1,
      size: newPageSize ? newPageSize : PreservedAreasParameters.size,
      filter: PreservedAreasParameters.filter,
    };
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "PreservedAreasList",
      api.GetPreservedAreasList(Parameters),
      async (response) => {
        if (response.ok) {
          setPreservedAreasParameters(Parameters);
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call(
              null,
              api.GetPreservedAreaImage(item.id, item.imageId1),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setPreservedAreasData({ ...response.data, content: newList });
        }
      }
    );
    //errorModal.close();
  };

  const getSelectedFilterTable = (pageNumber, data) => {
    const Parameters = {
      page: pageNumber - 1,
      size: PreservedAreasParameters.size,
      filter: data,
    };
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "PreservedAreasList",
      api.GetPreservedAreasList(Parameters),
      async (response) => {
        setPreservedAreasParameters(Parameters);
        if (response.ok) {
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call(
              null,
              api.GetPreservedAreaImage(item.id, item.imageId1),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setPreservedAreasData({ ...response.data, content: newList });
        }
      }
    );
    //errorModal.close();
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
        <PreservedAreasTable
          size={PreservedAreasParameters.size}
          page={PreservedAreasParameters.page + 1}
          setPage={GetPage}
          tableData={PreservedAreasData}
          loadTable={Mount}
          loading={loading}
          sendSelectedFilter={getSelectedFilterTable}
        />
      )}
    </>
  );
}

export default Container;
