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
import { Add } from "@material-ui/icons";
import DeletePreservedArea from "./InsideModal/DeletePreservedArea";
import AddPreservedArea from "./AddPreservedArea";
import { customModal } from "../../../components/modals/utils";
import EditPreservedArea from "./EditPreservedArea";

type UserTableProps = {
  tableData: any;
  sendSelectedFilter: any;
  loadTable?: any;
  loading: any;
  page: any;
  setPage: any;
  size: any;
};

function PreservedAreasTable({
  tableData,
  sendSelectedFilter,
  loadTable,
  loading,
  page,
  setPage,
  size,
}: UserTableProps) {
  const texts = Texts["pt-BR"].Main.PreservedAreas;
  const [switchPage, setSwitchPage] = React.useState<number>(0);
  const [ItemDataTable, setItemDataTable] = React.useState<any>(null);

  function handleButton(e, item) {
    if (e.currentTarget.name === "editButton") {
      setSwitchPage(2);
      setItemDataTable(item);
    } else if (e.currentTarget.name === "addButton") {
      setSwitchPage(1);
      setItemDataTable(null);
    }
  }

  function handleDeleteButton(item) {
    customModal.setInfos(
      "",
      [""],
      null,
      null,
      <DeletePreservedArea item={item.id} loadTable={loadTable} />,
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
                        onEnterKeyPress={(data) => sendSelectedFilter(0, data)}
                      />
                    </Grid>
                  </Styles.HeaderTable>
                }
                table={
                  <Table
                    id="PreservedAreasTable"
                    data={tableData.content}
                    headers={texts.headerTable}
                    lastAlign={false}
                    firstColumn={true}
                    renderItemColumns={(item) => [
                      item.id,
                      <Avatar
                        alt=" "
                        src={
                          item.img
                            ? `data:image/jpeg;base64,${item.img}`
                            : IconsBase64.avatar
                        }
                      />,
                      item.name,
                      item.address.street,
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
      {switchPage === 0 ? (
        DrawTable()
      ) : switchPage === 1 ? (
        <AddPreservedArea
          setChange={() => setSwitchPage(0)}
          loadTable={loadTable}
        />
      ) : switchPage === 2 ? (
        <EditPreservedArea
          setChange={() => setSwitchPage(0)}
          ItemDataTable={ItemDataTable}
          loadTable={loadTable}
        />
      ) : null}
    </>
  );
}

export default PreservedAreasTable;
