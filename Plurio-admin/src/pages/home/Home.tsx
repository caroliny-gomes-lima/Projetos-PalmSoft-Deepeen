import React, { useContext } from "react";
import {
  ButtonContained,
  ButtonOutlined,
  CustomText,
  Input,
  InputAutocomplete,
  InputDate,
  InputTags,
  Table,
} from "../../components";
import { FormFull } from "form-full";
import { fonts, Theme } from "../../config";
import { StorageContext } from "../../contexts/StorageContext";
import ChartBox from "../../components/charts/chartBox";
import { models } from "../../utils";
import Styles from "./styles";
import { customModal } from "../../components/modals/utils";

function Home() {
  const [isMounted, setMount] = React.useState<boolean>(false);
  const [randomizer, setRandomizer] = React.useState<number[]>([1, 1, 1, 1]);
  const Mount = React.useCallback(() => { }, []);
  const { addData } = useContext<any>(StorageContext);
  const chartData = {
    values: [
      65 * randomizer[0],
      59 * randomizer[1],
      80 * randomizer[2],
      81 * randomizer[3],
    ],
    labels: ["Teste 1", "Teste 2", "Teste 3", "Teste 4"],
  };
  const chartMultiData = {
    values: [
      {
        label: "Linha 1",
        values: [
          65 * randomizer[0],
          59 * randomizer[1],
          80 * randomizer[2],
          81 * randomizer[3],
        ],
      },
      {
        label: "Linha 2",
        values: [
          15 * randomizer[0],
          24 * randomizer[1],
          20 * randomizer[2],
          50 * randomizer[3],
        ],
      },
      {
        label: "Linha 3",
        values: [
          75 * randomizer[0],
          79 * randomizer[1],
          30 * randomizer[2],
          11 * randomizer[3],
        ],
      },
    ],
    labels: ["Teste 1", "Teste 2", "Teste 3", "Teste 4"],
  };

  React.useEffect(() => {
    if (!isMounted) {
      Mount();
      setMount(true);
    }
  }, [Mount, isMounted]);

  let data = [
    {
      label: "Autocomplete",
      value: 1,
    },
    {
      label: "Normal",
      value: 2,
    },
    {
      label: "Tags",
      value: 3,
    },
    {
      label: "Tabela",
      value: 4,
    },
  ];

  return (
    <>
      <Styles.Container>
        <CustomText fontSize={2.55} fontFamily={fonts.bold}>
          Componentes
        </CustomText>
      </Styles.Container>
      <Styles.Container>
        <CustomText
          style={{ paddingBottom: "16px" }}
          fontSize={2}
          fontFamily={fonts.semibold}
        >
          • Formulário:
        </CustomText>
        <FormFull
          onSubmit={(a) => {
            console.log(a);
            const text = Object.entries(a).map(
              ([key, value]) =>
                `${key}: ${typeof value === "object"
                  ? Array.isArray(value)
                    ? value.map((item) => item.value)
                    : value instanceof Date
                      ? value.toLocaleString()
                      : value?.value
                  : value
                }`
            );

            addData("Teste", a);
            customModal.setInfos(
              "Dados Formulário",
              ["Teste dados:", ...text],
              {
                label: "Ok",
                onClick: () => {
                  customModal.close();
                },
              },
              null,
              null,
              null,
              true
            );
          }}
        >
          <InputAutocomplete
            label="Input autocomplete"
            name="autocomplete"
            defaultValue={{ value: 1, label: "Teste" }}
            options={[
              { value: 1, label: "Teste" },
              { value: 2, label: "Teste 2" },
            ]}
          />
          <Input label="Input normal" name="normal" />
          <InputTags label="Input tags" name="tags" options={data} />
          <InputDate label="DD/MM/YYYY Input" name="dd/mm/yyyy" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            <ButtonOutlined fullWidth={false} action="clear">
              Limpar
            </ButtonOutlined>
            <ButtonContained fullWidth={false} action="submit">
              Enviar
            </ButtonContained>
          </div>
        </FormFull>
      </Styles.Container>
      <Styles.Container>
        <CustomText
          style={{ paddingBottom: "16px" }}
          fontSize={2}
          fontFamily={fonts.semibold}
        >
          • Tabela:
        </CustomText>
        <Table
          lastAlign={true}
          data={[
            { name: "Eduardo.", value: 20, boolean: false },
            { name: "Ana", value: 20.32, boolean: false },
            { name: "Dani", value: 123.32, boolean: true },
          ]}
          renderItemColumns={(item) => [
            item.name,
            item.value,
            item.boolean ? "Sim" : "Não",
          ]}
          headers={{
            table: ["Nome", "Valor", "Boolean"],
            keys: ["name", "value", "boolean"],
          }}
        />
      </Styles.Container>
      <Styles.Container>
        <CustomText
          style={{ paddingBottom: "16px" }}
          fontSize={2}
          fontFamily={fonts.semibold}
        >
          • Gráficos:
        </CustomText>
        <ButtonContained
          fullWidth={false}
          onClick={() => {
            setRandomizer([
              Math.random() * 2,
              Math.random() * 2,
              Math.random() * 2,
              Math.random() * 2,
            ]);
          }}
        >
          Randomizar
        </ButtonContained>
        {/* <ChartBox name="teste" chartData={models.getBarChart(chartData)} />
        <ChartBox name="teste" chartData={models.getLineChart(chartData)} /> */}
        <ChartBox
          name="teste"
          chartData={models.getMultiLineChart(chartMultiData)}
        />
        <ChartBox
          name="teste1"
          chartData={models.getDoughnutChart(chartData)}
        />
      </Styles.Container>
    </>
  );
}

export default Home;
