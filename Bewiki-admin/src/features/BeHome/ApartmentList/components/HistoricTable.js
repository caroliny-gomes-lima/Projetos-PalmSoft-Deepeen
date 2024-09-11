import React from "react";
import { TableExtension } from "../../../../components";
import { Texts } from "../../../../config";
import { CheckCircle, Cancel } from "@material-ui/icons";
import Styles from "../styles/Styles";
import { connect } from "react-redux";

function HistoricTabel({ isFetching, list, sort, HistoricReleaseData }) {
  const texts = Texts["pt-BR"].beHome.ReleaseHistoric;
  const ptBr = {
    months: [
      { initials: "Jan", fullName: "Janeiro" },
      { initials: "Fev", fullName: "Fevereiro" },
      { initials: "Mar", fullName: "Março" },
      { initials: "Abr", fullName: "Abril" },
      { initials: "Mai", fullName: "Maio" },
    ],
  };
  const [r, setR] = React.useState(false);
  const listSec = React.useRef(null);
  const data = ptBr.months;

  const sortContent = (key, list) => {
    let keylist = Object.keys(list[0]);
    let keyName = keylist[key];
    function compare(a, b) {
      if (r) {
        if (a[keyName] < b[keyName]) {
          return -1;
        }
        if (a[keyName] > b[keyName]) {
          return 1;
        }
        return 0;
      } else {
        if (a[keyName] > b[keyName]) {
          return -1;
        }
        if (a[keyName] < b[keyName]) {
          return 1;
        }
        return 0;
      }
    }

    listSec.current = list.sort(compare);
    setR(!r);
  };

  function convertData() {
    listSec.current = data.map((item) => {
      return {
        initials: item.initials,
        fullName: item.fullName,
      };
    });
  }
  if (data) {
    convertData();
  }

  return (
    <>
      <TableExtension
        sortList={listSec.current}
        sortContent={sortContent}
        id="historicTable"
        headers={texts}
        data={ptBr.months}
        totalPage={50}
        withGroup
        firstDivision={4}
        placeholderSize={15}
        loading={isFetching}
        renderItemColumns={(item) => [
          item.fullName,
          item.initials,
          item.fullName,
          item.initials,

          <Styles.ButtonTableCancel startIcon={<Cancel />} onClick={"teste"}>
            {texts.cancelButton}
          </Styles.ButtonTableCancel>,

          <Styles.ButtonTableApprove
            endIcon={<CheckCircle />}
            onClick={"teste"}
          >
            {texts.approveButton}
          </Styles.ButtonTableApprove>,
        ]}
      />
    </>
  );
}

function mapStateToProps(state) {
  //const { HistoricReleaseData, isFetching } = state.Behome;
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(HistoricTabel);
