import { ExitToApp } from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import { Table } from "../../../components";
import { Texts } from "../../../config";
import { ToCSV } from "../../../lib";
import { BlockTitle } from "../../../pages/styles/defaultStyles";
import Style from "../styles/EquationParametersStyle";

function EquationTable({ reportData, reportData100, isFetching }) {
  const texts = Texts["pt-BR"].report.reportTable;

  return (
    <>
      <Style.RowTitle
        $onlyTitle={isFetching || !reportData || !reportData.length}
      >
        <Style.TitleContainer>
          <BlockTitle>{texts.title}</BlockTitle>
        </Style.TitleContainer>
        {!isFetching && reportData && reportData.length ? (
          <Style.ButtonsContainer>
            <Style.ExportButtonContainer>
              <Style.ExportButton
                startIcon={<ExitToApp />}
                // onClick={() => ToCSV.table("productivityTable", texts.csvName)}
                onClick={() =>
                  ToCSV.data(
                    reportData,
                    texts.exportHeaders,
                    [
                      "shippingDate",
                      "id",
                      "separatorOpRegtr",
                      "separatorOp",
                      "separationOtSector",
                      "separatorGlobal",
                      "separatorSecondsPlanned",
                      "separatorSecondsSpent",
                      "separationValidOt",
                      "checkoutOpRegtr",
                      "checkoutOp",
                      "checkoutOtSector",
                      "checkoutGlobal",
                      "checkoutSecondsPlanned",
                      "checkoutSecondsSpent",
                      "checkoutValidOt",
                    ],
                    texts.csvName
                  )
                }
              >
                {texts.exportButton}
              </Style.ExportButton>
            </Style.ExportButtonContainer>
          </Style.ButtonsContainer>
        ) : null}
      </Style.RowTitle>
      {reportData100 && !isFetching ? (
        <Style.Content>
          <Style.InputContainer fullWidth>
            <Table
              id="reportTable"
              headers={texts.tableHeaders}
              data={reportData100}
              placeholderSize={15}
              columnSize={16}
              loading={isFetching}
              renderItemColumns={(item) => [
                item.shippingDate,
                item.id,
                item.separatorOpRegtr,
                item.separatorOp,
                item.separationOtSector,
                item.separatorGlobal,
                item.separatorSecondsPlanned,
                item.separatorSecondsSpent,
                item.separationValidOt,
                item.checkoutOpRegtr,
                item.checkoutOp,
                item.checkoutOtSector,
                item.checkoutGlobal,
                item.checkoutSecondsPlanned,
                item.checkoutSecondsSpent,
                item.checkoutValidOt,
              ]}
            />
          </Style.InputContainer>
        </Style.Content>
      ) : null}
    </>
  );
}

function mapStateToProps(state) {
  const { reportData, reportData100, isFetching } = state.report;
  return {
    reportData,
    isFetching,
    reportData100,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EquationTable);
