import React from "react";
import Styles from "../styles/Styles";
import {
  TablePagination,
  Table,
  IconButtonContained,
  InputAutocomplete,
  IconsBase64,
  InputSearch,
} from "../../../components";
import { Colors, Spacing } from "../../../config";
import { Texts } from "../../../config";
import { Avatar, CircularProgress, Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { FormFull } from "form-full";
import { customModal } from "../../../components/modals/utils";
import DeleteBlogModal from "./InsideModa/DeleteBlogModal";
import EditBlogScreen from "./EditBlogScreen";
import AddBlogScreen from "./AddBlogScreen";

type BlogTableProps = {
  tableData?: any;
  page?: any;
  setPage?: any;
  loadTable?: any;
  loading: any;
  sendSelectedFilter?: any;
  filterValue: any;
  size: any;
  setPageSize: any;
};

function BlogTable({
  tableData,
  page,
  setPage,
  loadTable,
  loading,
  sendSelectedFilter,
  filterValue,
  size,
  setPageSize,
}: BlogTableProps) {
  const texts = Texts["pt-BR"].Main.Blog;

  const [changeEditBlogScreen, setChangeEditBlogScreen] =
    React.useState<boolean>(false);
  const [changeBlogScreen, setChangeBlogScreen] =
    React.useState<boolean>(false);
  const [ItemDataTable, setItemDataTable] = React.useState<any>(null);

  const convertTime = (item: Date): string => {
    const day = item.getDate();
    const month = item.getMonth() + 1;
    const year = item.getFullYear();

    const formattedDay = day.toString().padStart(2, "0");
    const formattedmonth = month.toString().padStart(2, "0");
    const formattedYear = year.toString().padStart(2, "0");

    return `${formattedDay}/${formattedmonth}/${formattedYear}`;
  };

  function handleDeleteButton(item) {
    customModal.setInfos(
      "",
      [""],
      null,
      null,
      <DeleteBlogModal item={item.id} loadTable={loadTable} />,
      null
    );
  }

  const NoData = () => {
    return (
      <Styles.NoDataContainer>
        <Styles.NoDataText>{"Sem Dados"}</Styles.NoDataText>
      </Styles.NoDataContainer>
    );
  };

  function handleButton(e, item) {
    if (e.currentTarget.name === "editButton") {
      setChangeEditBlogScreen(true);
      setItemDataTable(item);
    } else if (e.currentTarget.name === "addButton") {
      setChangeEditBlogScreen(false);
      setItemDataTable(null);
      setChangeBlogScreen(true);
      setPageSize(5);
    }
  }

  const onChangeFilterSubmit = (pageNumber, selectedFilter) => {
    filterValue.current = selectedFilter;
    sendSelectedFilter(pageNumber, selectedFilter);
  };

  function DrawTable() {
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
            <TablePagination
              size={size}
              page={page}
              setPage={setPage}
              itemRowPages={tableData?.content.length}
              totalPages={tableData?.totalPages}
              totalRowPages={tableData?.totalElements}
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
                      onEnterKeyPress={(data) => onChangeFilterSubmit(0, data)}
                    />
                  </Grid>
                </Styles.HeaderTable>
              }
              table={
                <Table
                  id="BlogTable"
                  data={tableData?.content}
                  headers={texts.headerTable}
                  lastAlign={false}
                  firstColumn={true}
                  renderItemColumns={(item) => [
                    item.id,
                    <Avatar
                      alt=" "
                      src={`data:image/jpeg;base64,${item.img}`}
                    />,
                    item.name,
                    convertTime(new Date(item.createdAt)),
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
                        onClick={() => handleDeleteButton(item)}
                      />
                    </Styles.AreaButtonsTable>,
                  ]}
                />
              }
            />
          ) : (
            <>{NoData()}</>
          )}
        </Styles.Container>
      </>
    );
  }
  return (
    <>
      <>
        {changeEditBlogScreen === false && changeBlogScreen === false ? (
          DrawTable()
        ) : changeEditBlogScreen === true ? (
          <EditBlogScreen
            ItemDataTable={ItemDataTable}
            setChange={setChangeEditBlogScreen}
            loadTable={loadTable}
          />
        ) : changeBlogScreen === true ? (
          <AddBlogScreen
            setChange={setChangeBlogScreen}
            loadTable={loadTable}
          />
        ) : null}
      </>
    </>
  );
}

export default BlogTable;
