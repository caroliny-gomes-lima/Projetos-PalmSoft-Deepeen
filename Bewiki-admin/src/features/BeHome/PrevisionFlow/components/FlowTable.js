import React from "react";
import { Pagination, Table } from "../../../../components";
import { Texts } from "../../../../config";
import Styles from "../styles/StyledCard";
import StatusFilter from "./StatusFilter";
import InputSearch from "../../../../components/inputs/InputSearch";
import { FormHolder } from "../../../../FormConfig";

function FlowTable({
  page,
  setPage,
  loading,
  dataTableFlow,
  sendParameters,
  setName,
}) {
  const texts = Texts["pt-BR"].beHome.PrevisionFlow;
  const [formRef, setRef] = React.useState();

  const checkValueChange = (form, inputName) => {
    const value = form?.getFieldValue(inputName);
    if (value !== "") {
      setName(value);
    } else {
      setName("");
    }
  };

  const typeStay = [
    {
      value: null,
      label: "TODOS",
    },
    {
      value: "DISPONIVEL",
      label: "DISPONÍVEL",
    },
    {
      value: "VAGO_SUJO",
      label: "VAGO / SUJO",
    },
    {
      value: "EM_LIMPEZA",
      label: "EM LIMPEZA",
    },
    {
      value: "OCUPADO",
      label: "OCUPADO",
    },
    {
      value: "EM_CHECK_IN",
      label: "EM CHECK IN",
    },
  ];

  function getStatus(status, occupied) {
    const setStatus = {
      Available: "Disponível",
      unavailable: "Ocupado",
      cleaning: "Em limpeza",
    };
    if (status === "DISPONIVEL" && occupied === false) {
      return setStatus.Available;
    } else if (status === "DISPONIVEL" && occupied === true) {
      return setStatus.unavailable;
    } else if (status === "VAGO_SUJO") {
      return setStatus.cleaning;
    } else if (status === null && occupied === false) {
      return setStatus.Available;
    } else if (status === null && occupied === true) {
      return setStatus.unavailable;
    }
  }

  return (
    <>
      <FormHolder formRef={setRef}>
        <Styles.CardHeader>
          <Styles.Title>{texts.title[1]}</Styles.Title>
          <Styles.CardHeader>
            <InputSearch
              flow
              name="studioNameInput"
              onBlur={() => {
                checkValueChange(formRef, "studioNameInput");
              }}
              placeholder="Nome do Studio..."
            />
            <StatusFilter
              defaultValue={{
                value: null,
                label: "TODOS",
              }}
              name="status"
              sendParameters={sendParameters}
              options={typeStay}
            />
          </Styles.CardHeader>
        </Styles.CardHeader>
        <Styles.BlackLine />
        {dataTableFlow ? (
          <>
            <Table
              sortList={() => {}}
              id="flowTable"
              headers={texts}
              data={dataTableFlow.content}
              totalPage={50}
              withGroup
              firstDivision={3}
              secondDivision={3}
              placeholderSize={15}
              loading={loading}
              justify
              renderItemColumns={(item) => [
                item.typeStudio,
                item.nameStudio,
                item.externalId,
                <>&nbsp;</>,
                getStatus(item.status, item.occupied),
              ]}
            />
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={dataTableFlow.totalPages}
            />
          </>
        ) : null}
      </FormHolder>
    </>
  );
}

export default FlowTable;
