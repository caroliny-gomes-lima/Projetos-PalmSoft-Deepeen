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
import UserEdit from "./UserEdit";
import AddUser from "./AddUser";
import { customModal } from "../../../components/modals/utils";
import DeleteUser from "./InsideModal/DeleteUser";

type UserTableProps = {
  tableData: any;
  page: any;
  setPage: any;
  loadTable: any;
  loading: any;
  sendSelectedFilter: any;
  filterValue: any;
  size: any;
};

function UsersTable({
  tableData,
  page,
  setPage,
  loadTable,
  loading,
  sendSelectedFilter,
  filterValue,
  size,
}: UserTableProps) {
  const texts = Texts["pt-BR"].Main.Users;
  const [changeUserEditScreen, setchangeUserEditScreen] =
    React.useState<boolean>(false);
  const [changeAddUserScreen, setchangeAddUserScreen] =
    React.useState<boolean>(false);
  const [ItemDataTable, setItemDataTable] = React.useState<any>(null);

  const onChangeFilterSubmit = (selectedFilter) => {
    filterValue.current = selectedFilter;
    sendSelectedFilter(selectedFilter);
  };

  function handleButton(e, item) {
    if (e.currentTarget.name === "editButton") {
      setchangeUserEditScreen(true);
      setItemDataTable(item);
    } else if (e.currentTarget.name === "addButton") {
      setchangeUserEditScreen(false);
      setItemDataTable(null);
      setchangeAddUserScreen(true);
    }
  }

  function handleDeleteButton(item) {
    customModal.setInfos(
      "",
      [""],
      null,
      null,
      <DeleteUser item={item.id} loadTable={loadTable} />,
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
            <>
              <TablePagination
                size={size}
                page={page}
                setPage={setPage}
                itemRowPages={tableData?.content?.length}
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
                        onEnterKeyPress={(data) => onChangeFilterSubmit(data)}
                      />
                    </Grid>
                  </Styles.HeaderTable>
                }
                table={
                  <Table
                    id="UsersTable"
                    data={tableData.content}
                    headers={texts.headerTable}
                    lastAlign={false}
                    firstColumn={true}
                    renderItemColumns={(item) => [
                      item.id,
                      <Avatar alt="" src={IconsBase64.avatar} />,
                      item.name,
                      item.email,
                      "Admin",
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
      {changeUserEditScreen === false && changeAddUserScreen === false ? (
        DrawTable()
      ) : changeUserEditScreen === true ? (
        <UserEdit
          UserDataTable={ItemDataTable}
          setChange={setchangeUserEditScreen}
          loadTable={loadTable}
        />
      ) : changeAddUserScreen === true ? (
        <AddUser setChange={setchangeAddUserScreen} loadTable={loadTable} />
      ) : null}
    </>
  );
}

export default UsersTable;
