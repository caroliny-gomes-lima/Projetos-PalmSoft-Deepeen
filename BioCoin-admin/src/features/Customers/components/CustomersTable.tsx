import React from "react";
import Styles from "../styles/Styles";
import {
  TablePagination,
  Table,
  IconButtonContained,
  IconsBase64,
  InputSearch,
} from "../../../components";
import { Colors, Spacing } from "../../../config";
import { Texts } from "../../../config";
import { Avatar, CircularProgress, Grid } from "@material-ui/core";
import { FormFull } from "form-full";
import CustomerEdit from "./CustomerEdit";
import DeleteCustomer from "./InsideModal/deleteCustomer";
import { customModal } from "../../../components/modals/utils";

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

function CustomersTable({
  tableData,
  page,
  setPage,
  loadTable,
  loading,
  sendSelectedFilter,
  filterValue,
  size,
}: UserTableProps) {
  const texts = Texts["pt-BR"].Main.Customers;
  const [change, setChange] = React.useState<boolean>(false);
  const [ItemDataTable, setItemDataTable] = React.useState<any>(null);

  const onChangeFilterSubmit = (pageNumber, selectedFilter) => {
    filterValue.current = selectedFilter;
    sendSelectedFilter(pageNumber, selectedFilter);
  };

  function handleEditButton(item) {
    setChange(true);
    setItemDataTable(item);
  }

  function handleDeleteButton(item) {
    customModal.setInfos(
      "",
      [""],
      null,
      null,
      <DeleteCustomer item={item.id} loadTable={loadTable} />,
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
            <TablePagination
              size={size}
              page={page}
              setPage={setPage}
              itemRowPages={tableData?.content?.length}
              totalPages={tableData?.totalPages}
              totalRowPages={tableData?.totalElements}
              headerTable={
                <Styles.HeaderTable>
                  <Grid item xs={12} sm={6} md={6} lg={4}>
                    <InputSearch
                      onEnterKeyPress={(data) => onChangeFilterSubmit(0, data)}
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
                    "Cliente",
                    <Styles.AreaButtonsTable>
                      <IconButtonContained
                        IconBase64
                        changeColor={Colors.gray}
                        Icon={IconsBase64.pen}
                        changeIconColor={Colors.black}
                        onClick={() => handleEditButton(item)}
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
        {change === false ? (
          DrawTable()
        ) : (
          <CustomerEdit
            loadTable={loadTable}
            CustomerDataTable={ItemDataTable}
            setChange={setChange}
          />
        )}
      </>
    </>
  );
}

export default CustomersTable;
