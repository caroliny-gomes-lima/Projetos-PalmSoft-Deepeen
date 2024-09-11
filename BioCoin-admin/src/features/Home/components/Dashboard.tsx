import React from "react";
import Styles from "../styles/Styles";
import { models } from "../../../utils";
import ChartBox from "../../../components/charts/chartBox";
import { CircularProgress, Grid } from "@material-ui/core";
import { IconsBase64 } from "../../../components";
import {
  DrawListPreservedAreasCards,
  DrawListRecentSalesCards,
} from "./CardList";
const NoData = (onDev?: boolean) => {
  return (
    <Styles.NoDataContainer>
      <Styles.NoDataText>
        {onDev ? "Em Desenvolvimento" : "Sem Dados"}
      </Styles.NoDataText>
    </Styles.NoDataContainer>
  );
};
const LoadingData = () => {
  return (
    <Styles.NoDataContainer>
      <CircularProgress style={{ color: "black" }} />
    </Styles.NoDataContainer>
  );
};

function Dashboard({ data, loading, PreservedAreasData }: any) {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Styles.Cards>
          <Styles.CardsContent>
            <Styles.CardsHeader>
              <Styles.CardsIcon $defaultColorGreen>
                <Styles.Icon alt="" src={IconsBase64.Goldbar} />
              </Styles.CardsIcon>
              <Styles.CardsTitle>{"Total Vendido"}</Styles.CardsTitle>
            </Styles.CardsHeader>
            {loading ? (
              LoadingData()
            ) : (
              <Styles.CardsText>
                {data?.data?.totalSold?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Styles.CardsText>
            )}
          </Styles.CardsContent>
        </Styles.Cards>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Styles.Cards>
          <Styles.CardsContent>
            <Styles.CardsHeader>
              <Styles.CardsIcon $defaultColorlightBlue>
                <Styles.Icon alt="" src={IconsBase64.Group} />
              </Styles.CardsIcon>
              <Styles.CardsTitle>{"Total de Visitantes"}</Styles.CardsTitle>
            </Styles.CardsHeader>
            {loading ? (
              LoadingData()
            ) : (
              <Styles.CardsText>{data?.data?.totalVisitant}</Styles.CardsText>
            )}
          </Styles.CardsContent>
        </Styles.Cards>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Styles.Cards>
          <Styles.CardsContent>
            <Styles.CardsHeader>
              <Styles.CardsIcon $defaultColorOrange>
                <Styles.Icon alt="" src={IconsBase64.PersonPlus} />
              </Styles.CardsIcon>
              <Styles.CardsTitle>{"Total de Clientes"}</Styles.CardsTitle>
            </Styles.CardsHeader>
            {loading ? (
              LoadingData()
            ) : (
              <Styles.CardsText>{data?.data?.totalClient}</Styles.CardsText>
            )}
          </Styles.CardsContent>
        </Styles.Cards>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Styles.Cards>
          <Styles.CardsContent>
            <Styles.CardsHeader>
              <Styles.CardsIcon $defaultColorBlue>
                <Styles.Icon alt="" src={IconsBase64.ChartLine} />
              </Styles.CardsIcon>
              <Styles.CardsTitle>{"Vendas de Hoje"}</Styles.CardsTitle>
            </Styles.CardsHeader>{" "}
            {loading ? (
              LoadingData()
            ) : (
              <Styles.CardsText>
                {data?.data?.todaySold?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Styles.CardsText>
            )}
          </Styles.CardsContent>
        </Styles.Cards>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Styles.Cards $defaultCard>
          <div style={{ paddingLeft: 20, paddingTop: 5 }}>
            <Styles.CardsTitle>{"Moedas Vendidas"}</Styles.CardsTitle>
          </div>
          {loading ? (
            LoadingData()
          ) : data?.graphs?.chartAccess ? (
            <ChartBox
              name="teste"
              chartData={models.getLineChart(data?.graphs?.chartAccess)}
            />
          ) : (
            NoData()
          )}
        </Styles.Cards>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Styles.Cards $defaultCard>
          <div style={{ paddingLeft: 20, paddingTop: 5 }}>
            <Styles.CardsTitle>{"Total de Acessos"}</Styles.CardsTitle>
          </div>
          {loading ? (
            LoadingData()
          ) : data?.graphs?.chartCoinSold ? (
            <ChartBox
              name="teste1"
              chartData={models.getLineChart(data?.graphs?.chartCoinSold)}
            />
          ) : (
            NoData()
          )}
        </Styles.Cards>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Styles.Cards $defaultCard>
          <Styles.CardsHeader>
            <Styles.CardsTitle>
              {"Áreas Preservadas Adicionadas"}
            </Styles.CardsTitle>
          </Styles.CardsHeader>
          {loading ? (
            LoadingData()
          ) : PreservedAreasData?.content?.length > 0 ? (
            <Styles.ScrollContainer>
              {DrawListPreservedAreasCards(PreservedAreasData?.content)}
            </Styles.ScrollContainer>
          ) : (
            NoData()
          )}
        </Styles.Cards>
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Styles.Cards $defaultCard>
          <Styles.CardsHeader>
            <Styles.CardsTitle>{"Vendas Recentes"}</Styles.CardsTitle>
          </Styles.CardsHeader>
          {loading ? (
            LoadingData()
          ) : data?.data?.lastestTransactions?.length > 0 ? (
            <Styles.ScrollContainer>
              {DrawListRecentSalesCards(data?.data?.lastestTransactions)}
            </Styles.ScrollContainer>
          ) : (
            NoData()
          )}
        </Styles.Cards>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
