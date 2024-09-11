import React from "react";
import { BlogTable } from "../components";
import { hooks } from "../../../utils";
import { api } from "../../../services";
import Styles from "../styles/Styles";
import { CircularProgress } from "@material-ui/core";
import { Spacing } from "../../../config";
import { errorModal } from "../../../components/modals/utils";

function Container() {
  const { loading, call } = hooks.useRequest();
  const [blogListData, setBlogListData] = React.useState<any>(null);
  const [pageNumber, setPageNumber] = React.useState<any>(1);
  const [pageSize, setPageSize] = React.useState<any>(5);
  const FilterData = React.useRef<any>();

  const Mount = React.useCallback(() => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "blogList",
      api.GetBlogList({ page: 0, size: pageSize }),
      async (response) => {
        if (response.ok) {
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call(
              null,
              api.GetBlogImage(item.imageId, item.id),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setBlogListData({ ...response.data, content: newList });
        }
      }
    );
  }, []);
  React.useEffect(Mount, [Mount]);

  const GetPage = (newPage: number, newPageSize?: any) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    if (newPageSize) {
      setPageSize(newPageSize);
    }
    call(
      "blogList",
      api.GetBlogList({
        page: newPage - 1,
        size: newPageSize ? newPageSize : pageSize,
        name: FilterData.current,
      }),
      async (response) => {
        if (response.ok) {
          setPageNumber(newPage);
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call(
              null,
              api.GetBlogImage(item.imageId, item.id),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setBlogListData({ ...response.data, content: newList });
        }
      }
    );
  };

  const getSelectedFilterTable = (pageNumber, data) => {
    errorModal.setInfos("Carregando", ["aguarde..."], null, null);
    call(
      "blogList",
      api.GetBlogList({ page: pageNumber, size: pageSize, name: data }),
      async (response) => {
        if (response.ok) {
          let newList: any[] = [];
          for (const item of response?.data?.content) {
            await call(
              null,
              api.GetBlogImage(item.imageId, item.id),
              (response) => {
                newList.push({ ...item, img: response?.data });
              }
            );
          }
          setBlogListData({ ...response.data, content: newList });
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
        <BlogTable
          size={pageSize}
          page={pageNumber}
          setPage={GetPage}
          tableData={blogListData}
          loading={loading}
          loadTable={Mount}
          sendSelectedFilter={getSelectedFilterTable}
          filterValue={FilterData}
          setPageSize={setPageSize}
        />
      )}
    </>
  );
}

export default Container;
