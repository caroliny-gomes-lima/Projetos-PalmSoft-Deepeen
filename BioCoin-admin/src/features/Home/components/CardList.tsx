import React from "react";
import Styles from "../styles/Styles";
import { Avatar, Grid } from "@material-ui/core";
import { IconsBase64 } from "../../../components";
import { Colors } from "../../../config";
import { Place, Style } from "@material-ui/icons";
import { SessionStorage } from "../../../utils";

const DrawListPreservedAreasCards = (dataList) => {
  return dataList.map((item) => {
    return (
      <>
        <Styles.ListItem>
          <Styles.PreservedAreasCardsImageBox
            alt=""
            src={`data:image/jpeg;base64,${item?.img}`}
          />
          <Styles.textArea>
            <Styles.Title>{item.name}</Styles.Title>
            <Styles.text>
              <Place />
              {item?.address?.street +
                ", " +
                item?.address?.city +
                " - " +
                item?.address?.state}
            </Styles.text>
          </Styles.textArea>
          <Styles.CardMap>
            <Styles.MapFrame
              id="gmap_canvas"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={`https://maps.google.com/maps?q=${item?.address?.lat},${item?.address?.lon}&z=13&ie=UTF8&iwloc=&output=embed`}
            />
          </Styles.CardMap>
        </Styles.ListItem>
        <Styles.Line />
      </>
    );
  });
};
function formatarDataHora(dataString: string): string {
  const data = new Date(dataString);

  if (isNaN(data.getTime())) {
    throw new Error("Data inválida");
  }

  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const hora = String(data.getHours()).padStart(2, "0");
  const minutos = String(data.getMinutes()).padStart(2, "0");

  return `${dia}/${mes} ${hora}:${minutos}`;
}
const DrawListRecentSalesCards = (list) => {
  const UserData = SessionStorage.getItem("data");

  return list.map((item) => {
    return (
      <>
        <Styles.ListItem>
          <Styles.LeftGroup>
            <Avatar
              alt={UserData?.firstName}
              src={`data:image/png;base64, ${item?.img}`}
            />
            <Styles.UserName>{item?.user?.name}</Styles.UserName>
          </Styles.LeftGroup>

          <hr/>
          {/* <Styles.Line/> */}

          <Styles.rightGroup>
            <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Styles.iconCotnainer>
                <Styles.Icon alt="" src={IconsBase64.creditCard} />
              </Styles.iconCotnainer>
              <Styles.textArea>
                <Styles.Title $customFontSize>{item?.billingType}</Styles.Title>
                <Styles.text $customText>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Grid item>{"Cotação: "}</Grid>
                    <Grid item>
                      {item?.valueUnit?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Grid>
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      marginLeft: "2px",
                      color: Colors.black,
                    }}
                  >
                    {item?.price?.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </div>
                </Styles.text>
              </Styles.textArea>
            </div>
            <Styles.textArea>
              <Styles.Title $customFontSize>
                {" "}
                {item?.value?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Styles.Title>
              <Styles.text $customText>{formatarDataHora(item?.createdAt)}</Styles.text>
            </Styles.textArea>
          </Styles.rightGroup>
        </Styles.ListItem>
        <Styles.Line />
      </>
    );
  });
};

export { DrawListPreservedAreasCards, DrawListRecentSalesCards };
